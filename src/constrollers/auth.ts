import { RequestHandler } from "express";
import { authSigninSchema } from "../schemas/auth-signin";
import { createuser, getuserByEmail } from "../services/user";
import { generateOTP, validateOTP } from "../services/otp";
import { sendEmail } from "../libs/mailtrap";
import { authSignupSchema } from "../schemas/auth-signup";
import { authUseOTPSchema } from "../schemas/auth-useotp";
import { createJWT } from '../libs/jwt';




export const signin: RequestHandler = async (req, res) => {
    //Validar os dados recebidos
    const data = authSigninSchema.safeParse(req.body);
    if(!data.success){
        res.json({ error: data.error.flatten().fieldErrors });
        return;
    }

    //verificar se o usuário existe (base E-mail)
    const user = await getuserByEmail(data.data.email);
    if(!user) {
        res.json({ error: 'Usuário não existe' });
        return;
    }

    //Gerar um código OTP para o usuário
    const otp = await generateOTP(user.id);
    
    //Enviar o código para o e-mail do user
    await sendEmail(
        user.email,
        'Seu código de acesso é: ' + otp.code,
        'Digite seu código: ' + otp.code
    );

    //Devolver o ID do código OTP
    res.json({ id: otp.id});
}

export const signup: RequestHandler = async (req, res) => {
    //Validar os dados recebidos
    const data = authSignupSchema.safeParse(req.body);
    if(!data.success){
        res.json({ error: data.error.flatten().fieldErrors });
        return;
    }

    //verificar se o e-mail já existe
    const user = await getuserByEmail(data.data.email);
    if(user) {
        res.json({ error: 'Já existe usuário com este e-mail.' });
        return;
    }

    //Criar o Usuário
    const newUser = await createuser(data.data.name, data.data.email);

    //Retornar os dados do usuário recém-criado
    res.status(201).json({ user: newUser });
}

export const useOTP: RequestHandler = async (req, res) => {
    //Validar os dados recebidos
    const data = authUseOTPSchema.safeParse(req.body);
    if(!data.success){
        res.json({ error: data.error.flatten().fieldErrors });
        return;
    }

    //validar o OTP
    const user = await validateOTP(data.data.id, data.data.code);
    if(!user) {
        res.json({ error: 'OTP inválido ou expirado' });
        return;
    }

    //Cria o JWT
    const token = createJWT(user.id);

    // Retorna o JWT
    res.json ({ token, user });
}