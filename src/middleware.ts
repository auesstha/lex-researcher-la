import { defineMiddleware } from 'astro:middleware';
import { runUsersMigration } from './lib/migrate-users';

const CANONICAL_ORIGIN = 'https://www.lexresearch.org';
const CANONICAL_HOST   = 'www.lexresearch.org';

export const onRequest = defineMiddleware(async (ctx, next) => {
  // 301 redirect every non-canonical origin to https://www.lexresearch.org.
  // Covers: http→https, lexresearcher.com→lexresearch.org, lexresearch.org→www.lexresearch.org.
  const url  = new URL(ctx.request.url);
  const host = (ctx.request.headers.get('host') ?? url.hostname).replace(/:.*$/, '');
  const isCanonical = url.protocol === 'https:' && host === CANONICAL_HOST;

  if (!isCanonical) {
    const target = new URL(ctx.request.url);
    target.protocol = 'https:';
    target.hostname = CANONICAL_HOST;
    target.port     = '';
    return new Response(null, {
      status: 301,
      headers: { Location: target.toString() },
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
