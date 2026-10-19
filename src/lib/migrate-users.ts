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

// Adds status column to existing deployments that were created before this field existed
const ADD_STATUS_COLUMN = `ALTER TABLE users ADD COLUMN status TEXT NOT NULL DEFAULT 'approved'`;

export async function runUsersMigration(): Promise<void> {
  const db = getDB();

  // Create table (idempotent)
  await db.prepare(CREATE_USERS_TABLE).run();

  // Add status column to existing tables (silently ignore if already exists)
  try { await db.prepare(ADD_STATUS_COLUMN).run(); } catch (_) { /* column already exists */ }

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
