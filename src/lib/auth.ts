// @ts-ignore — cloudflare:workers is a Cloudflare runtime built-in
import { env as cfEnv } from 'cloudflare:workers';

export type SessionData = {
  userId: string;
  role: string;
  displayName: string;
};

const SESSION_COOKIE = 'lex_sid';

// ── Password hashing (Web Crypto PBKDF2-SHA256 with salt) ────────────────────

export async function hashPassword(password: string): Promise<string> {
  const salt = Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    256
  );
  const hash = Array.from(new Uint8Array(bits))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  return `${salt}:${hash}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [salt, expectedHash] = stored.split(':');
  if (!salt || !expectedHash) return false;
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    256
  );
  const hash = Array.from(new Uint8Array(bits))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  return hash === expectedHash;
}

// ── Database helpers ─────────────────────────────────────────────────────────

function getDB(): D1Database {
  const db = (cfEnv as Record<string, unknown>)?.DB as D1Database | undefined;
  if (!db) throw new Error('D1 binding (DB) not available');
  return db;
}

function getKV(): KVNamespace {
  const kv = (cfEnv as any).SESSION as KVNamespace | undefined;
  if (!kv) throw new Error('KV binding (SESSION) not available');
  return kv;
}

export interface UserRow {
  id: string;
  username: string;
  email: string;
  password_hash: string;
  role: string;
  display_name: string;
  status: string; // 'pending' | 'approved' | 'rejected'
  created_at: string;
}

export async function getUserByEmail(email: string): Promise<UserRow | null> {
  const row = await getDB().prepare('SELECT * FROM users WHERE email=?').bind(email).first();
  return row ? (row as unknown as UserRow) : null;
}

export async function getUserById(id: string): Promise<UserRow | null> {
  const row = await getDB().prepare('SELECT * FROM users WHERE id=?').bind(id).first();
  return row ? (row as unknown as UserRow) : null;
}

export async function createUser(data: {
  id: string;
  username: string;
  email: string;
  password_hash: string;
  role: string;
  display_name: string;
  status?: string;
}): Promise<void> {
  const now = new Date().toISOString();
  const status = data.status ?? 'pending';
  await getDB()
    .prepare(
      'INSERT INTO users (id, username, email, password_hash, role, display_name, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    )
    .bind(data.id, data.username, data.email, data.password_hash, data.role, data.display_name, status, now)
    .run();
}

export async function getPendingUsers(): Promise<UserRow[]> {
  const { results } = await getDB()
    .prepare("SELECT * FROM users WHERE status='pending' ORDER BY created_at DESC")
    .all();
  return results as unknown as UserRow[];
}

export async function getAllUsers(): Promise<UserRow[]> {
  const { results } = await getDB()
    .prepare("SELECT * FROM users WHERE role != 'admin' ORDER BY created_at DESC")
    .all();
  return results as unknown as UserRow[];
}

export async function updateUserStatus(id: string, status: string): Promise<void> {
  await getDB()
    .prepare("UPDATE users SET status=? WHERE id=?")
    .bind(status, id)
    .run();
}

export async function sendApprovalEmail(email: string, displayName: string): Promise<void> {
  const apiKey = (cfEnv as any).RESEND_API_KEY as string | undefined;
  if (!apiKey) return; // Email sending silently skipped if key not configured
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Lex Researcher <noreply@lexresearcher.com>',
      to: email,
      subject: 'Your Lex Researcher account has been approved',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#f8f6f1;border-radius:12px">
          <div style="text-align:center;margin-bottom:28px">
            <div style="display:inline-flex;width:52px;height:52px;background:#f59e0b;border-radius:12px;align-items:center;justify-content:center;font-family:Georgia,serif;font-weight:900;font-size:22px;color:#0f172a">L</div>
            <div style="margin-top:10px;font-family:Georgia,serif;font-size:20px;font-weight:700;color:#0f172a">Lex Researcher</div>
          </div>
          <h2 style="font-size:22px;font-weight:700;color:#0f172a;margin:0 0 12px">Welcome, ${displayName}!</h2>
          <p style="color:#475569;font-size:15px;line-height:1.6;margin:0 0 20px">
            Your account on <strong>Lex Researcher Journal</strong> has been approved by the admin. You can now sign in and start publishing your legal research.
          </p>
          <a href="https://lexresearcher.com/admin/login" style="display:inline-block;background:#f59e0b;color:#0f172a;font-weight:700;font-size:14px;padding:12px 28px;border-radius:10px;text-decoration:none">Sign In Now →</a>
          <p style="color:#94a3b8;font-size:12px;margin-top:28px">Lex Researcher · Open-access legal scholarship</p>
        </div>
      `,
    }),
  });
}

export function isAdmin(role: string): boolean {
  return role === 'admin';
}

// ── Session management (KV-backed) ───────────────────────────────────────────

function generateId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function createSession(
  userId: string,
  role: string,
  displayName: string,
  kv?: KVNamespace
): Promise<string> {
  const store = kv ?? getKV();
  const sessionId = generateId();
  const data: SessionData = { userId, role, displayName };
  await store.put(`session:${sessionId}`, JSON.stringify(data), { expirationTtl: 86400 });
  return `${SESSION_COOKIE}=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`;
}

export async function getSession(
  request: Request,
  kv?: KVNamespace
): Promise<SessionData | null> {
  const store = kv ?? getKV();
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.split(';').find(c => c.trim().startsWith(SESSION_COOKIE + '='));
  if (!match) return null;
  const sessionId = match.split('=')[1]?.trim();
  if (!sessionId) return null;
  const raw = await store.get(`session:${sessionId}`);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionData;
  } catch {
    return null;
  }
}

export async function clearSession(
  request: Request,
  kv?: KVNamespace
): Promise<string> {
  const store = kv ?? getKV();
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.split(';').find(c => c.trim().startsWith(SESSION_COOKIE + '='));
  if (match) {
    const sessionId = match.split('=')[1]?.trim();
    if (sessionId) {
      await store.delete(`session:${sessionId}`);
    }
  }
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;
}

// ── Legacy shims (kept for backward compat — all admin pages now use getSession) ──
export function isAuthenticated(_request: Request): boolean {
  return false;
}
export function checkPassword(_password: string): boolean {
  return false;
}
export function createSessionCookie(): string {
  return '';
}
export function clearSessionCookie(): string {
  return `lex_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;
}
