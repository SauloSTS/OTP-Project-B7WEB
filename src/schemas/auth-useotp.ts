import { z } from "zod";

export const authUseOTPSchema = z.object({
    id: z.string({ message: 'ID do OTP obrigatório' }),
    code: z.string({ message: 'OTP obrigatório' }).length(6, 'Código precisa de 6 números')
});