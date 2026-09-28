import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

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
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  readTime: number;
  published: boolean;
}

const DATA_PATH = join(process.cwd(), 'src/data/articles.json');

export function getArticles(): Article[] {
  const raw = readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw);
}

export function getPublishedArticles(): Article[] {
  return getArticles().filter(a => a.published);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find(a => a.slug === slug);
}

export function getArticleById(id: string): Article | undefined {
  return getArticles().find(a => a.id === id);
}

export function getArticlesByCategory(category: string): Article[] {
  return getPublishedArticles().filter(a => a.category === category);
}

export function saveArticle(article: Article): void {
  const articles = getArticles();
  const idx = articles.findIndex(a => a.id === article.id);
  if (idx >= 0) {
    articles[idx] = article;
  } else {
    articles.unshift(article);
  }
  writeFileSync(DATA_PATH, JSON.stringify(articles, null, 2));
}

export function deleteArticle(id: string): void {
  const articles = getArticles().filter(a => a.id !== id);
  writeFileSync(DATA_PATH, JSON.stringify(articles, null, 2));
}

export const CATEGORIES: Record<CategorySlug, {
  label: string;
  shortLabel: string;
  icon: string;
  color: string;      // tailwind color name
  description: string;
  group: 'international' | 'specialised' | 'general';
}> = {
  /* ── INTERNATIONAL PUBLIC LAW ── */
  'international-law': {
    label: 'International Law',
    shortLabel: 'Int\'l Law',
    icon: '🏛️',
    color: 'emerald',
    description: 'The body of rules and principles governing relations between sovereign states, international organisations, and other international actors through treaties and custom.',
    group: 'international',
  },
  'human-rights-law': {
    label: 'International Human Rights Law',
    shortLabel: 'Human Rights',
    icon: '✊',
    color: 'rose',
    description: 'Legal standards protecting fundamental rights and freedoms of individuals, including the ICCPR, ICESCR, regional human rights conventions, and enforcement mechanisms.',
    group: 'international',
  },
  'humanitarian-law': {
    label: 'International Humanitarian Law',
    shortLabel: 'IHL',
    icon: '🕊️',
    color: 'orange',
    description: 'The laws of armed conflict — the Geneva Conventions, Hague Regulations, and customary IHL governing the conduct of hostilities and protection of civilians.',
    group: 'international',
  },
  'international-criminal-law': {
    label: 'International Criminal Law',
    shortLabel: 'Criminal Law',
    icon: '⚖️',
    color: 'red',
    description: 'The prosecution of individuals for genocide, war crimes, crimes against humanity, and aggression before the ICC, ad hoc tribunals, and national courts exercising universal jurisdiction.',
    group: 'international',
  },
  'international-trade-law': {
    label: 'International Trade Law',
    shortLabel: 'Trade Law',
    icon: '🤝',
    color: 'blue',
    description: 'WTO agreements, GATT, trade dispute settlement, tariffs, non-tariff barriers, preferential trade agreements, and the regulation of global commerce.',
    group: 'international',
  },
  'international-environmental-law': {
    label: 'International Environmental Law',
    shortLabel: 'Env. Law',
    icon: '🌿',
    color: 'green',
    description: 'The Paris Agreement, Biodiversity Convention, Stockholm Declaration, and the evolving body of treaty and customary law protecting the global environment.',
    group: 'international',
  },
  'maritime-law': {
    label: 'International Maritime Law',
    shortLabel: 'Maritime Law',
    icon: '⚓',
    color: 'cyan',
    description: 'UNCLOS, the law of the sea, maritime zones, freedom of navigation, flag state jurisdiction, piracy, and the governance of ocean resources.',
    group: 'international',
  },
  'international-investment-law': {
    label: 'International Investment Law',
    shortLabel: 'Investment Law',
    icon: '📈',
    color: 'indigo',
    description: 'Bilateral investment treaties (BITs), investor-state dispute settlement (ISDS), ICSID arbitration, and the legal protection of foreign direct investment.',
    group: 'specialised',
  },
  'diplomatic-law': {
    label: 'Diplomatic & Consular Law',
    shortLabel: 'Diplomatic Law',
    icon: '🎖️',
    color: 'violet',
    description: 'The Vienna Convention on Diplomatic Relations, consular law, diplomatic immunity, state immunity, and the legal framework of international relations.',
    group: 'specialised',
  },
  'air-space-law': {
    label: 'International Air & Space Law',
    shortLabel: 'Air & Space',
    icon: '🚀',
    color: 'sky',
    description: 'The Chicago Convention on civil aviation, outer space treaty regime, liability for space objects, satellite governance, and the emerging law of commercial space.',
    group: 'specialised',
  },
  'refugee-law': {
    label: 'International Refugee Law',
    shortLabel: 'Refugee Law',
    icon: '🏳️',
    color: 'teal',
    description: 'The 1951 Refugee Convention, non-refoulement, statelessness, the UNHCR mandate, and the legal frameworks protecting persons fleeing persecution and conflict.',
    group: 'specialised',
  },
  'international-labor-law': {
    label: 'International Labour Law',
    shortLabel: 'Labour Law',
    icon: '🏗️',
    color: 'yellow',
    description: 'ILO conventions, core labour standards, freedom of association, forced labour, child labour, and the regulation of work in a globalised economy.',
    group: 'specialised',
  },
  'intellectual-property-law': {
    label: 'International Intellectual Property Law',
    shortLabel: 'IP Law',
    icon: '💡',
    color: 'purple',
    description: 'TRIPS Agreement, WIPO treaties, patents, copyright, trademarks, geographical indications, and the tension between IP protection and public access.',
    group: 'specialised',
  },
  /* ── GENERAL / THEMATIC ── */
  'river-law': {
    label: 'River & Water Law',
    shortLabel: 'River Law',
    icon: '🌊',
    color: 'blue',
    description: 'Transboundary watercourse governance, the UN Watercourses Convention, water rights, equitable utilisation, and the legal management of shared river basins.',
    group: 'general',
  },
  'world-law': {
    label: 'World Law',
    shortLabel: 'World Law',
    icon: '🌍',
    color: 'amber',
    description: 'Comparative legal systems, constitutional frameworks, domestic courts, and the global convergence of national legal traditions.',
    group: 'general',
  },
};

// Groups for display
export const CATEGORY_GROUPS = {
  international: { label: 'International Public Law',   slug: 'international' },
  specialised:   { label: 'Specialised Fields',         slug: 'specialised' },
  general:       { label: 'General & Comparative Law',  slug: 'general' },
} as const;

// Tailwind badge utility — safe static strings per colour
export function getBadgeClass(color: string): string {
  const map: Record<string, string> = {
    emerald:  'bg-emerald-100  text-emerald-800  border-emerald-200',
    rose:     'bg-rose-100     text-rose-800     border-rose-200',
    orange:   'bg-orange-100   text-orange-800   border-orange-200',
    red:      'bg-red-100      text-red-800      border-red-200',
    blue:     'bg-blue-100     text-blue-800     border-blue-200',
    green:    'bg-green-100    text-green-800    border-green-200',
    cyan:     'bg-cyan-100     text-cyan-800     border-cyan-200',
    indigo:   'bg-indigo-100   text-indigo-800   border-indigo-200',
    violet:   'bg-violet-100   text-violet-800   border-violet-200',
    sky:      'bg-sky-100      text-sky-800      border-sky-200',
    teal:     'bg-teal-100     text-teal-800     border-teal-200',
    yellow:   'bg-yellow-100   text-yellow-800   border-yellow-200',
    purple:   'bg-purple-100   text-purple-800   border-purple-200',
    amber:    'bg-amber-100    text-amber-800    border-amber-200',
  };
  return map[color] ?? 'bg-stone-100 text-stone-700 border-stone-200';
}

export function getStripClass(color: string): string {
  const map: Record<string, string> = {
    emerald: 'bg-emerald-400',  rose:   'bg-rose-400',
    orange:  'bg-orange-400',   red:    'bg-red-400',
    blue:    'bg-blue-400',     green:  'bg-green-500',
    cyan:    'bg-cyan-400',     indigo: 'bg-indigo-400',
    violet:  'bg-violet-400',   sky:    'bg-sky-400',
    teal:    'bg-teal-400',     yellow: 'bg-yellow-400',
    purple:  'bg-purple-400',   amber:  'bg-amber-400',
  };
  return map[color] ?? 'bg-stone-400';
}

export function getBannerClass(color: string): string {
  const map: Record<string, string> = {
    emerald: 'from-emerald-900 via-emerald-800 to-slate-900',
    rose:    'from-rose-900    via-rose-800    to-slate-900',
    orange:  'from-orange-900  via-orange-800  to-slate-900',
    red:     'from-red-900     via-red-800     to-slate-900',
    blue:    'from-blue-900    via-blue-800    to-slate-900',
    green:   'from-green-900   via-green-800   to-slate-900',
    cyan:    'from-cyan-900    via-cyan-800    to-slate-900',
    indigo:  'from-indigo-900  via-indigo-800  to-slate-900',
    violet:  'from-violet-900  via-violet-800  to-slate-900',
    sky:     'from-sky-900     via-sky-800     to-slate-900',
    teal:    'from-teal-900    via-teal-800    to-slate-900',
    yellow:  'from-yellow-900  via-yellow-800  to-slate-900',
    purple:  'from-purple-900  via-purple-800  to-slate-900',
    amber:   'from-amber-900   via-amber-800   to-stone-900',
  };
  return map[color] ?? 'from-slate-900 via-slate-800 to-slate-900';
}
