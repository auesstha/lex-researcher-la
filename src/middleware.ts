import { defineMiddleware } from 'astro:middleware';
import { runUsersMigration } from './lib/migrate-users';

const CANONICAL_HOST = 'lexresearcher.com';

export const onRequest = defineMiddleware(async (ctx, next) => {
  // 301 www → non-www. Must run before anything else so crawlers never index www.
  const host = ctx.request.headers.get('host') ?? '';
  if (host === `www.${CANONICAL_HOST}`) {
    const url = new URL(ctx.request.url);
    url.hostname = CANONICAL_HOST;
    return new Response(null, {
      status: 301,
      headers: { Location: url.toString() },
    });
  }

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
