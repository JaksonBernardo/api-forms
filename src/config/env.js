import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT;
export const env = process.env.NODE_ENV;
export const database = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};
export const jwtSecret = process.env.JWT_SECRET;
export const apiKey = process.env.API_KEY;
