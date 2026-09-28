const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD || 'lex-admin-2026';
const SESSION_COOKIE = 'lex_session';
const SESSION_VALUE = 'authenticated';

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function isAuthenticated(request: Request): boolean {
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.split(';').find(c => c.trim().startsWith(SESSION_COOKIE + '='));
  if (!match) return false;
  const value = match.split('=')[1]?.trim();
  return value === SESSION_VALUE;
}

export function createSessionCookie(): string {
  return `${SESSION_COOKIE}=${SESSION_VALUE}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`;
}

export function clearSessionCookie(): string {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;
}
