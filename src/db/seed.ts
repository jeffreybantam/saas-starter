import { db } from './index';
import { users } from './schema/users';

async function seed() {
  try {
    // Delete existing records
    await db.delete(users);

    // Insert seed data
    await db.insert(users).values([
      {
        email: 'test@example.com',
      },
      // Add more seed data as needed
    ]);

    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Seed process failed:', error);
    process.exit(1);
  }
}

seed(); 