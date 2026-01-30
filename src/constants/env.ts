import dotenv from 'dotenv';

dotenv.config();
export const SERVER_DOMAIN = process.env.SERVER_DOMAIN || 'localhost:3001';
export const PLATFORM_DOMAIN = process.env.PLATFORM_DOMAIN || 'localhost:3000';

export const URL_SERVER = 'http://localhost:3001';

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'chave-do-client-id.apps.googleusercontent.com';
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'chave-do-client-secret'