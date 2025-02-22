import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/index';

if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL is not defined');
}

// For queries
export const queryClient = postgres(process.env.POSTGRES_URL, { 
  max: 10,
  ssl: 'require'
});

export const db = drizzle(queryClient, { schema }); 