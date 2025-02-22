import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL is not defined');
}

export default {
  schema: './src/db/schema/*',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
  }
} satisfies Config;
