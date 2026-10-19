// @ts-ignore — cloudflare:workers is a Cloudflare runtime built-in
import { env as cfEnv } from 'cloudflare:workers';
import { hashPassword } from './auth';

function getDB(): D1Database {
  const db = (cfEnv as Record<string, unknown>)?.DB as D1Database | undefined;
  if (!db) throw new Error('D1 binding (DB) not available');
  return db;
}

function generateId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

const CREATE_USERS_TABLE = `
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'author',
  display_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'approved',
  created_at TEXT NOT NULL
);
`;

// Adds columns to existing deployments (silently ignored if already exist)
const ALTER_COLUMNS = [
  `ALTER TABLE users ADD COLUMN status TEXT NOT NULL DEFAULT 'approved'`,
  `ALTER TABLE users ADD COLUMN bio TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE users ADD COLUMN title TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE users ADD COLUMN location TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE users ADD COLUMN degree TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE users ADD COLUMN specialisation TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE users ADD COLUMN facebook TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE users ADD COLUMN instagram TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE users ADD COLUMN linkedin TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE users ADD COLUMN public_email TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE users ADD COLUMN avatar TEXT NOT NULL DEFAULT ''`,
];

export async function runUsersMigration(): Promise<void> {
  const db = getDB();

  // Create table (idempotent)
  await db.prepare(CREATE_USERS_TABLE).run();

  // Add new columns to existing tables (silently ignore if already exist)
  for (const sql of ALTER_COLUMNS) {
    try { await db.prepare(sql).run(); } catch (_) { /* column already exists */ }
  }

  // Seed default admin user if none exists
  const existing = await db.prepare("SELECT id FROM users WHERE role='admin' LIMIT 1").first();
  if (!existing) {
    const passwordHash = await hashPassword('lex-admin-2026');
    const now = new Date().toISOString();
    await db
      .prepare(
        'INSERT OR IGNORE INTO users (id, username, email, password_hash, role, display_name, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
      )
      .bind(generateId(), 'lamia', 'lamia@lexresearcher.com', passwordHash, 'admin', 'Lamia Akhter', now)
      .run();
  }
}
