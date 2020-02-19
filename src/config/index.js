import dotenv from 'dotenv-safe';

dotenv.config();

export const {
  // API port
  PORT,
  // API database
  DB_STRING_CONNECTION,
} = process.env;
