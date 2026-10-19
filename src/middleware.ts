import { defineMiddleware } from 'astro:middleware';
import { runUsersMigration } from './lib/migrate-users';

export const onRequest = defineMiddleware(async (_ctx, next) => {
  // Run users table migration on every request (CREATE TABLE IF NOT EXISTS is idempotent).
  // Errors are swallowed so the site keeps working even if the DB binding is temporarily unavailable.
  try {
    await runUsersMigration();
  } catch (_e) {
    // Silently ignore — migration will retry on next request
  }

  return next().then((response) => {
    response.headers.set('X-Robots-Tag', 'index, follow');
    return response;
  });
});
