import type { APIRoute } from 'astro';
import { getPublishedArticles } from '../lib/articles';

export const GET: APIRoute = async ({ locals, url }) => {
  const articles = await getPublishedArticles(locals);
  const base = url.origin;

  const staticPages = [
    { loc: `${base}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${base}/articles/`, priority: '0.9', changefreq: 'daily' },
    { loc: `${base}/about`, priority: '0.5', changefreq: 'monthly' },
  ];

  const articlePages = articles.map(a => ({
    loc: `${base}/articles/${a.slug}`,
    lastmod: new Date(a.updatedAt).toISOString().split('T')[0],
    priority: '0.8',
    changefreq: 'weekly',
  }));

  const allPages = [...staticPages, ...articlePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${p.loc}</loc>
    ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
