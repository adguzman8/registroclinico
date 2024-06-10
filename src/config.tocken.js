import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TOKEN;


export const TOKEN_SECRET= `${token}`