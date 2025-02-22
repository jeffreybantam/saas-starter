import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema/index';

// This script sets up the database with the required schema
async function setup() {
  try {
    if (!process.env.POSTGRES_URL) {
      throw new Error('POSTGRES_URL is not defined');
    }

    // Create the database connection
    const connection = postgres(process.env.POSTGRES_URL, { 
      max: 1,
      ssl: 'require'
    });
    const db = drizzle(connection, { schema });

    // Run the migrations
    console.log('Running migrations...');
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations completed successfully');

    // Close the connection
    await connection.end();
    
    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Database setup failed:', error);
    process.exit(1);
  }
}

setup(); 