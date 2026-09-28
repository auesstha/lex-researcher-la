export type CategorySlug =
  | 'international-law'
  | 'human-rights-law'
  | 'humanitarian-law'
  | 'international-criminal-law'
  | 'international-trade-law'
  | 'international-environmental-law'
  | 'maritime-law'
  | 'international-investment-law'
  | 'diplomatic-law'
  | 'air-space-law'
  | 'refugee-law'
  | 'international-labor-law'
  | 'intellectual-property-law'
  | 'river-law'
  | 'world-law';

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: CategorySlug;
  excerpt: string;
  content: string;
  author: string;
  authorTitle: string;
  tags: string[];
  readTime: number;
  published: boolean;
  publishedAt: string;
  updatedAt: string;
}

export interface CategoryMeta {
  label: string;
  shortLabel: string;
  icon: string;
  color: string;
  description: string;
  group: string;
}

export const CATEGORIES: Record<CategorySlug, CategoryMeta> = {
  'international-law':              { label: 'International Law',                  shortLabel: 'Intl Law',        icon: '🏛️', color: 'blue',    description: 'Public international law, treaties, and the UN system.',          group: 'Public International Law' },
  'human-rights-law':               { label: 'International Human Rights Law',     shortLabel: 'Human Rights',    icon: '✊', color: 'rose',    description: 'ICCPR, ICESCR, regional human rights instruments.',              group: 'Public International Law' },
  'humanitarian-law':               { label: 'International Humanitarian Law',     shortLabel: 'IHL',             icon: '🕊️', color: 'orange',  description: 'Geneva Conventions, laws of armed conflict.',                    group: 'Public International Law' },
  'international-criminal-law':     { label: 'International Criminal Law',         shortLabel: 'Intl Criminal',   icon: '⚖️', color: 'red',     description: 'ICC, tribunals, genocide, war crimes, crimes against humanity.', group: 'Public International Law' },
  'international-trade-law':        { label: 'International Trade Law',            shortLabel: 'Trade Law',       icon: '🤝', color: 'emerald', description: 'WTO, GATT, trade agreements and dispute settlement.',            group: 'Public International Law' },
  'international-environmental-law':{ label: 'International Environmental Law',    shortLabel: 'Environmental',   icon: '🌿', color: 'green',   description: 'Climate agreements, biodiversity, sustainable development.',     group: 'Public International Law' },
  'maritime-law':                   { label: 'International Maritime Law',         shortLabel: 'Maritime',        icon: '⚓', color: 'cyan',    description: 'UNCLOS, law of the sea, shipping and navigation.',               group: 'Public International Law' },
  'international-investment-law':   { label: 'International Investment Law',       shortLabel: 'Investment',      icon: '📈', color: 'violet',  description: 'BITs, investor-state arbitration, FDI protection.',              group: 'Specialised Fields' },
  'diplomatic-law':                 { label: 'Diplomatic & Consular Law',          shortLabel: 'Diplomatic',      icon: '🎖️', color: 'amber',   description: 'Vienna Conventions, diplomatic immunity, consular relations.',   group: 'Specialised Fields' },
  'air-space-law':                  { label: 'Air & Space Law',                    shortLabel: 'Air & Space',     icon: '🚀', color: 'indigo',  description: 'Chicago Convention, outer space treaty, satellite law.',         group: 'Specialised Fields' },
  'refugee-law':                    { label: 'International Refugee Law',          shortLabel: 'Refugee Law',     icon: '🏳️', color: 'teal',    description: '1951 Convention, non-refoulement, UNHCR mandate.',               group: 'Specialised Fields' },
  'international-labor-law':        { label: 'International Labour Law',           shortLabel: 'Labour Law',      icon: '🏗️', color: 'yellow',  description: 'ILO conventions, core labour standards, decent work.',          group: 'Specialised Fields' },
  'intellectual-property-law':      { label: 'International IP Law',               shortLabel: 'IP Law',          icon: '💡', color: 'purple',  description: 'TRIPS, WIPO treaties, patents, copyright, trademarks.',         group: 'Specialised Fields' },
  'river-law':                      { label: 'River & Water Law',                  shortLabel: 'Water Law',       icon: '🌊', color: 'sky',     description: 'Transboundary watercourses, UN Watercourses Convention.',        group: 'General & Comparative' },
  'world-law':                      { label: 'World Law',                          shortLabel: 'World Law',       icon: '🌍', color: 'stone',   description: 'Comparative law, global governance, emerging legal orders.',    group: 'General & Comparative' },
};

export const CATEGORY_GROUPS: Record<string, CategorySlug[]> = {
  'Public International Law': ['international-law','human-rights-law','humanitarian-law','international-criminal-law','international-trade-law','international-environmental-law','maritime-law'],
  'Specialised Fields':        ['international-investment-law','diplomatic-law','air-space-law','refugee-law','international-labor-law','intellectual-property-law'],
  'General & Comparative':     ['river-law','world-law'],
};

export function getBadgeClass(color: string): string {
  const map: Record<string, string> = {
    blue:    'bg-blue-50 text-blue-700 border-blue-200',
    rose:    'bg-rose-50 text-rose-700 border-rose-200',
    orange:  'bg-orange-50 text-orange-700 border-orange-200',
    red:     'bg-red-50 text-red-700 border-red-200',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    green:   'bg-green-50 text-green-700 border-green-200',
    cyan:    'bg-cyan-50 text-cyan-700 border-cyan-200',
    violet:  'bg-violet-50 text-violet-700 border-violet-200',
    amber:   'bg-amber-50 text-amber-700 border-amber-200',
    indigo:  'bg-indigo-50 text-indigo-700 border-indigo-200',
    teal:    'bg-teal-50 text-teal-700 border-teal-200',
    yellow:  'bg-yellow-50 text-yellow-700 border-yellow-200',
    purple:  'bg-purple-50 text-purple-700 border-purple-200',
    sky:     'bg-sky-50 text-sky-700 border-sky-200',
    stone:   'bg-stone-100 text-stone-700 border-stone-200',
  };
  return map[color] ?? map.stone;
}

export function getStripClass(color: string): string {
  const map: Record<string, string> = {
    blue:'bg-blue-500',rose:'bg-rose-500',orange:'bg-orange-500',red:'bg-red-500',
    emerald:'bg-emerald-500',green:'bg-green-500',cyan:'bg-cyan-500',violet:'bg-violet-500',
    amber:'bg-amber-500',indigo:'bg-indigo-500',teal:'bg-teal-500',yellow:'bg-yellow-500',
    purple:'bg-purple-500',sky:'bg-sky-500',stone:'bg-stone-400',
  };
  return map[color] ?? map.stone;
}

export function getBannerClass(color: string): string {
  const map: Record<string, string> = {
    blue:'bg-blue-600',rose:'bg-rose-600',orange:'bg-orange-600',red:'bg-red-600',
    emerald:'bg-emerald-600',green:'bg-green-600',cyan:'bg-cyan-600',violet:'bg-violet-600',
    amber:'bg-amber-600',indigo:'bg-indigo-600',teal:'bg-teal-600',yellow:'bg-yellow-500',
    purple:'bg-purple-600',sky:'bg-sky-600',stone:'bg-stone-600',
  };
  return map[color] ?? map.stone;
}

function rowToArticle(row: Record<string, unknown>): Article {
  return {
    id:          String(row.id),
    title:       String(row.title),
    slug:        String(row.slug),
    category:    row.category as CategorySlug,
    excerpt:     String(row.excerpt ?? ''),
    content:     String(row.content),
    author:      String(row.author),
    authorTitle: String(row.authorTitle ?? ''),
    tags:        JSON.parse(String(row.tags ?? '[]')),
    readTime:    Number(row.readTime ?? 5),
    published:   Number(row.published) === 1,
    publishedAt: String(row.publishedAt),
    updatedAt:   String(row.updatedAt),
  };
}

// In Astro v6 + @astrojs/cloudflare, env bindings are accessed via the cloudflare:workers module.
// This import is resolved by the Cloudflare Workers runtime at deployment.
// @ts-ignore — cloudflare:workers is a Cloudflare runtime built-in
import { env as cfEnv } from 'cloudflare:workers';

function getDB(): D1Database {
  const db = (cfEnv as Record<string, unknown>)?.DB as D1Database | undefined;
  if (!db) throw new Error('D1 binding (DB) not available — ensure DB is bound in wrangler config');
  return db;
}

export async function getArticles(_locals: App.Locals): Promise<Article[]> {
  const { results } = await (getDB()).prepare('SELECT * FROM articles ORDER BY publishedAt DESC').all();
  return (results as Record<string, unknown>[]).map(rowToArticle);
}

export async function getPublishedArticles(_locals: App.Locals): Promise<Article[]> {
  const { results } = await (getDB()).prepare('SELECT * FROM articles WHERE published=1 ORDER BY publishedAt DESC').all();
  return (results as Record<string, unknown>[]).map(rowToArticle);
}

export async function getArticleBySlug(_locals: App.Locals, slug: string): Promise<Article | null> {
  const row = await (getDB()).prepare('SELECT * FROM articles WHERE slug=?').bind(slug).first();
  return row ? rowToArticle(row as Record<string, unknown>) : null;
}

export async function getArticleById(_locals: App.Locals, id: string): Promise<Article | null> {
  const row = await (getDB()).prepare('SELECT * FROM articles WHERE id=?').bind(id).first();
  return row ? rowToArticle(row as Record<string, unknown>) : null;
}

export async function getArticlesByCategory(_locals: App.Locals, category: string): Promise<Article[]> {
  const { results } = await (getDB()).prepare('SELECT * FROM articles WHERE category=? AND published=1 ORDER BY publishedAt DESC').bind(category).all();
  return (results as Record<string, unknown>[]).map(rowToArticle);
}

export async function saveArticle(_locals: App.Locals, article: Article): Promise<void> {
  await (getDB()).prepare(`
    INSERT INTO articles (id,title,slug,category,excerpt,content,author,authorTitle,tags,readTime,published,publishedAt,updatedAt)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
    ON CONFLICT(id) DO UPDATE SET
      title=excluded.title, slug=excluded.slug, category=excluded.category,
      excerpt=excluded.excerpt, content=excluded.content, author=excluded.author,
      authorTitle=excluded.authorTitle, tags=excluded.tags, readTime=excluded.readTime,
      published=excluded.published, publishedAt=excluded.publishedAt, updatedAt=excluded.updatedAt
  `).bind(
    article.id, article.title, article.slug, article.category, article.excerpt,
    article.content, article.author, article.authorTitle, JSON.stringify(article.tags),
    article.readTime, article.published ? 1 : 0, article.publishedAt, article.updatedAt
  ).run();
}

export async function deleteArticle(_locals: App.Locals, id: string): Promise<void> {
  await (getDB()).prepare('DELETE FROM articles WHERE id=?').bind(id).run();
}
