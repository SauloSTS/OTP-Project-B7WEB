# Sistema de Autenticação com OTP usando Mailtrap (Projeto B7Web)

 Este projeto, desenvolvido como parte do curso B7Web, implementa um sistema de autenticação seguro utilizando o mecanismo de One-Time Password (OTP).

## Tecnologias Utilizadas:

 + **Backend:** Node.js, TypeScript, Express
 - **Banco de dados:** PostgreSQL
 * **ORM:** Prisma
 + **Segurança:** Helmet, CORS, JSON Web Tokens
 - **Geração de IDs:** UUID
 * **Validação de dados:** Zod
 + **Envio de emails:** Mailtrap (ambiente de desenvolvimento)

## Funcionalidades:

+ **Cadastro de usuários:** Permite o cadastro de novos usuários com nome e email e senha.
- **Login:** Autenticação de usuários através do OTP.
* **Validação de OTP:** Valida o código OTP inserido pelo usuário para confirmar a identidade.

### Como usar:
1. ***Pré-requisitos:***
+ Node.js e npm instalados
- PostgreSQL instalado e rodando
* Uma conta no Mailtrap para configurar o envio de emails
+ Node.js e npm globais: npm install -g prisma
2. ***Configurando o banco de dados:***
 + Crie um banco de dados PostgreSQL e configure as variáveis de ambiente.
- Execute npx prisma migrate dev para criar as tabelas.
3. ***Configurando o Mailtrap:*** 
* Configure as credenciais do Mailtrap no arquivo .env.

## Observações:

+ **Prisma:** O Prisma facilita a interação com o banco de dados PostgreSQL, oferecendo um modelo de dados intuitivo e type-safe.
- **TypeScript:** Garante a tipagem estática do código, reduzindo erros e aumentando a manutenibilidade.
* **Zod:** Valida os dados de entrada da API, garantindo a integridade dos dados.
+ **Helmet e CORS:** Protegem a aplicação contra ataques comuns, como XSS e CSRF.
- **JWT:** Utilizados para autenticar as requisições e armazenar informações do usuário de forma segura.
* **UUID:** Garantem a unicidade dos identificadores dos usuários.

## Agradecimentos:

Agradeço ao curso B7Web pela oportunidade de aprender e desenvolver este projeto.

#B7Web #NodeJS #TypeScript #Prisma #PostgreSQL #OTP #Mailtrap #Helmet #CORS #JWT #Zod
