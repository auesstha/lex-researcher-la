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
  | 'world-law'
  | 'property-law';

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
  intro: string;
  group: string;
}

export const CATEGORIES: Record<CategorySlug, CategoryMeta> = {
  'international-law': {
    label: 'International Law', shortLabel: 'Intl Law', icon: '🏛️', color: 'blue', group: 'Public International Law',
    description: 'Public international law, treaties, and the UN system.',
    intro: 'International law governs the legal relationships between states, intergovernmental organisations, and — increasingly — individuals. It encompasses treaty law, customary international law, and the general principles recognised by civilised nations. From the foundational instruments of the United Nations Charter to the jurisprudence of the International Court of Justice, this field shapes how states cooperate, resolve disputes, and accept obligations toward one another. Articles in this category analyse the architecture of the international legal order, state responsibility, the sources of international law, and the ongoing tension between sovereignty and global governance. Whether examining landmark ICJ decisions or the evolving role of soft law, our research aims to make public international law accessible to scholars, practitioners, and engaged citizens alike.',
  },
  'human-rights-law': {
    label: 'International Human Rights Law', shortLabel: 'Human Rights', icon: '✊', color: 'rose', group: 'Public International Law',
    description: 'ICCPR, ICESCR, regional human rights instruments.',
    intro: 'International human rights law establishes the fundamental entitlements that every person holds by virtue of their humanity, regardless of nationality, status, or circumstance. Anchored in the Universal Declaration of Human Rights and given binding force through the ICCPR and ICESCR, this body of law is further elaborated by regional systems — the European Convention, the African Charter, and the American Convention on Human Rights. Articles in this category examine the substantive rights recognised under international instruments, the treaty bodies and courts that monitor compliance, the doctrine of non-derogable rights, and the persistent gap between legal obligation and lived reality. Special attention is given to emerging challenges: digital rights, climate-related displacement, and the rights of marginalised communities under international scrutiny.',
  },
  'humanitarian-law': {
    label: 'International Humanitarian Law', shortLabel: 'IHL', icon: '🕊️', color: 'orange', group: 'Public International Law',
    description: 'Geneva Conventions, laws of armed conflict.',
    intro: 'International humanitarian law — the laws of armed conflict — regulates the conduct of hostilities and protects those who are not, or are no longer, taking part in fighting. The four Geneva Conventions of 1949 and their Additional Protocols form the core of this body of law, supplemented by customary rules that bind all parties to a conflict. IHL draws a strict distinction between civilians and combatants, prohibits indiscriminate and disproportionate attacks, and mandates humane treatment of prisoners of war and the wounded. Articles in this category explore the application of IHL in contemporary conflicts, the law of occupation, the regulation of new technologies of warfare including autonomous weapons and cyber operations, and the role of the International Committee of the Red Cross in monitoring compliance.',
  },
  'international-criminal-law': {
    label: 'International Criminal Law', shortLabel: 'Intl Criminal', icon: '⚖️', color: 'red', group: 'Public International Law',
    description: 'ICC, tribunals, genocide, war crimes, crimes against humanity.',
    intro: 'International criminal law holds individuals — including heads of state — accountable for the most serious crimes of concern to the international community: genocide, crimes against humanity, war crimes, and the crime of aggression. The establishment of the International Criminal Court under the Rome Statute marked a watershed in this field, creating a permanent institution to prosecute those who commit atrocities when national courts cannot or will not act. Articles in this category analyse ICC jurisprudence, the legacy of the ad hoc tribunals for the former Yugoslavia and Rwanda, the doctrine of command responsibility, the principle of complementarity, and the political tensions that continue to shape international criminal justice. We also examine transitional justice mechanisms including truth commissions and hybrid courts.',
  },
  'international-trade-law': {
    label: 'International Trade Law', shortLabel: 'Trade Law', icon: '🤝', color: 'emerald', group: 'Public International Law',
    description: 'WTO, GATT, trade agreements and dispute settlement.',
    intro: 'International trade law governs the rules under which states exchange goods, services, and capital across borders. The World Trade Organization and the GATT system it superseded provide the multilateral framework for trade liberalisation, non-discrimination, and dispute settlement. Beyond the WTO, a dense network of bilateral and regional trade agreements — from CPTPP to the EUSFTA — shapes investment flows and regulatory standards. Articles in this category examine WTO dispute settlement panel and Appellate Body decisions, the rules on subsidies and countervailing duties, sanitary and phytosanitary measures, trade-related intellectual property rights under TRIPS, and the growing friction between free trade obligations and domestic regulatory autonomy in areas such as environmental protection and public health.',
  },
  'international-environmental-law': {
    label: 'International Environmental Law', shortLabel: 'Environmental', icon: '🌿', color: 'green', group: 'Public International Law',
    description: 'Climate agreements, biodiversity, sustainable development.',
    intro: 'International environmental law addresses humanity\'s collective obligation to protect the natural systems on which all life depends. From the Stockholm Declaration of 1972 to the Paris Agreement on climate change and the Kunming-Montreal Global Biodiversity Framework, states have developed an extensive — if still inadequate — body of treaty law and soft-law norms. Core principles include the precautionary approach, the duty not to cause transboundary environmental harm, common but differentiated responsibilities, and the concept of sustainable development. Articles in this category analyse the legal architecture of the climate regime, biodiversity and ecosystem protection, marine pollution, the human rights dimensions of environmental degradation, and the emerging discourse around ecocide as an international crime.',
  },
  'maritime-law': {
    label: 'International Maritime Law', shortLabel: 'Maritime', icon: '⚓', color: 'cyan', group: 'Public International Law',
    description: 'UNCLOS, law of the sea, shipping and navigation.',
    intro: 'International maritime law regulates the rights and duties of states in the world\'s oceans and governs commercial shipping, naval operations, and the exploitation of marine resources. The United Nations Convention on the Law of the Sea — often called the constitution of the oceans — establishes the legal framework for territorial seas, exclusive economic zones, the continental shelf, and the high seas. The International Maritime Organization sets global standards for the safety of life at sea and the prevention of marine pollution. Articles in this category explore UNCLOS dispute settlement, including arbitration under Annex VII, the delimitation of maritime boundaries, the legal status of islands and artificial structures, piracy under international law, and emerging issues such as deep-sea mining and the governance of maritime autonomous vessels.',
  },
  'international-investment-law': {
    label: 'International Investment Law', shortLabel: 'Investment', icon: '📈', color: 'violet', group: 'Specialised Fields',
    description: 'BITs, investor-state arbitration, FDI protection.',
    intro: 'International investment law protects foreign direct investment by providing investors with substantive rights — fair and equitable treatment, protection against expropriation without compensation, and full security — enforceable against host states through binding arbitration. The system rests on a web of nearly 3,000 bilateral investment treaties and investment chapters in regional trade agreements, with disputes resolved before ICSID, the Permanent Court of Arbitration, or ad hoc tribunals under the UNCITRAL Rules. Articles in this category examine landmark investor-state awards, the evolving standards of fair and equitable treatment, the tension between investment protection and the host state\'s right to regulate in the public interest, and the ongoing reform debate around the ISDS mechanism, including the proposed Multilateral Investment Court.',
  },
  'diplomatic-law': {
    label: 'Diplomatic & Consular Law', shortLabel: 'Diplomatic', icon: '🎖️', color: 'amber', group: 'Specialised Fields',
    description: 'Vienna Conventions, diplomatic immunity, consular relations.',
    intro: 'Diplomatic and consular law governs the establishment and conduct of permanent missions, the privileges and immunities of diplomatic agents, and the consular relations that facilitate the protection of nationals abroad. The 1961 Vienna Convention on Diplomatic Relations and its 1963 consular counterpart codify rules that had evolved over centuries of state practice, establishing the inviolability of diplomatic premises and the personal immunity of accredited diplomats from the criminal and civil jurisdiction of the receiving state. Articles in this category analyse the scope and limits of diplomatic immunity, the obligations of the receiving state to protect missions and personnel, the use of persona non grata declarations, and contemporary challenges including the weaponisation of diplomatic channels and the status of international organisations\' staff.',
  },
  'air-space-law': {
    label: 'Air & Space Law', shortLabel: 'Air & Space', icon: '🚀', color: 'indigo', group: 'Specialised Fields',
    description: 'Chicago Convention, outer space treaty, satellite law.',
    intro: 'Air and space law regulates two domains — civil aviation and outer space — that were unimaginable to earlier generations of international lawyers. The 1944 Chicago Convention established the framework for international civil aviation, creating ICAO and codifying the freedoms of the air that underpin modern commercial flight. Space law rests on the five UN treaties of the 1960s and 1970s, above all the Outer Space Treaty, which declares space the province of all mankind, prohibits national appropriation, and bans the placement of weapons of mass destruction in orbit. Articles in this category examine liability for damage caused by space objects, the emerging commercial space economy, the legality of anti-satellite weapons tests, the governance of satellite communications, and the growing challenge of orbital debris under international law.',
  },
  'refugee-law': {
    label: 'International Refugee Law', shortLabel: 'Refugee Law', icon: '🏳️', color: 'teal', group: 'Specialised Fields',
    description: '1951 Convention, non-refoulement, UNHCR mandate.',
    intro: 'International refugee law defines who qualifies for international protection, the rights that flow from that status, and the obligations of states that receive those fleeing persecution. The 1951 Refugee Convention and its 1967 Protocol remain the cornerstone instruments, with the principle of non-refoulement — the prohibition on returning a person to a territory where they face serious harm — widely regarded as a norm of customary international law. UNHCR\'s mandate to supervise the application of the Convention adds an institutional dimension to this framework. Articles in this category analyse refugee status determination, the definition of persecution and the grounds of the Refugee Convention, the treatment of asylum seekers under international and regional human rights law, the legal challenges posed by mass displacement, climate refugees, and the Global Compact on Refugees.',
  },
  'international-labor-law': {
    label: 'International Labour Law', shortLabel: 'Labour Law', icon: '🏗️', color: 'yellow', group: 'Specialised Fields',
    description: 'ILO conventions, core labour standards, decent work.',
    intro: 'International labour law sets universal standards for the world of work, recognising that social justice and decent conditions of labour are prerequisites for lasting peace and prosperity. The International Labour Organization — the oldest UN specialised agency — has adopted more than 190 conventions covering freedom of association, collective bargaining, the abolition of forced and child labour, and non-discrimination. The ILO\'s Declaration on Fundamental Principles and Rights at Work identifies eight core conventions that all member states must respect regardless of ratification. Articles in this category examine ILO supervisory mechanisms, the integration of labour standards into trade agreements, supply chain due diligence obligations, the rights of migrant workers, and the challenge of extending labour protections to the gig economy and informal sector workers under international frameworks.',
  },
  'intellectual-property-law': {
    label: 'International IP Law', shortLabel: 'IP Law', icon: '💡', color: 'purple', group: 'Specialised Fields',
    description: 'TRIPS, WIPO treaties, patents, copyright, trademarks.',
    intro: 'International intellectual property law governs the cross-border protection of patents, copyright, trademarks, geographical indications, and related rights. The TRIPS Agreement, administered by the WTO, set minimum standards of IP protection that all members must incorporate into domestic law, reshaping national patent regimes and the availability of generic medicines. WIPO administers a suite of treaties — including the Patent Cooperation Treaty, the Berne Convention, and the Madrid System for trademarks — that streamline multi-jurisdictional protection. Articles in this category examine the balance between IP protection and access to knowledge and medicines, the flexibilities available under TRIPS for developing countries, the protection of traditional knowledge and genetic resources, digital copyright challenges, and the IP dimensions of emerging technologies including artificial intelligence and biotechnology.',
  },
  'river-law': {
    label: 'River & Water Law', shortLabel: 'Water Law', icon: '🌊', color: 'sky', group: 'General & Comparative',
    description: 'Transboundary watercourses, UN Watercourses Convention.',
    intro: 'River and water law addresses one of the most pressing resource challenges of the twenty-first century: the equitable and sustainable sharing of freshwater across state boundaries. The 1997 UN Convention on the Law of Non-Navigational Uses of International Watercourses codifies the principles of equitable and reasonable utilisation, the obligation not to cause significant harm, and the duty to notify and consult co-riparian states before undertaking measures with potential transboundary effects. Regional river commissions — on the Mekong, the Nile, the Danube, and beyond — provide institutional frameworks for cooperation on specific basins. Articles in this category explore watercourse treaty practice, the resolution of transboundary water disputes, the human right to water under international human rights law, and the impact of climate change on freshwater availability and legal obligations.',
  },
  'world-law': {
    label: 'World Law', shortLabel: 'World Law', icon: '🌍', color: 'stone', group: 'General & Comparative',
    description: 'Comparative law, global governance, emerging legal orders.',
    intro: 'World law takes a broad, comparative view of legal systems, examining how constitutional design, private law traditions, and governance structures converge and diverge across nations. This field draws on comparative methodology to identify common principles, transplanted norms, and distinctive national approaches to shared legal problems. From constitutional courts and judicial review to the reception of international law into domestic legal orders, world law traces the flows of legal ideas across jurisdictions. Articles in this category analyse landmark constitutional decisions from courts around the globe, the interplay between civil law and common law traditions, the role of legal culture in shaping institutional design, and the emergence of transnational legal orders that sit alongside — and sometimes challenge — the traditional state-based international legal system.',
  },
  'property-law': {
    label: 'Property & Land Law', shortLabel: 'Property Law', icon: '🏠', color: 'lime', group: 'General & Comparative',
    description: 'Immovable property, land transfers, gifts, and personal law.',
    intro: 'Property and land law defines how rights over immovable assets are created, transferred, and extinguished, sitting at the intersection of private law, customary practice, and constitutional protection. The rules governing ownership, co-ownership, mortgages, easements, and the registration of title vary significantly across legal systems, yet share common organising principles drawn from Roman law and local custom. Land transfer — whether by sale, gift, inheritance, or adverse possession — involves a web of formal requirements designed to protect parties and ensure certainty of title. Articles in this category examine the doctrinal foundations of property rights, the legal treatment of gifts of immovable property, the reform of land registration systems, disputes over customary land rights, and the interface between domestic property law and international human rights standards including the right to adequate housing and protection against forced eviction.',
  },
};

export const CATEGORY_GROUPS: Record<string, CategorySlug[]> = {
  'Public International Law': ['international-law','human-rights-law','humanitarian-law','international-criminal-law','international-trade-law','international-environmental-law','maritime-law'],
  'Specialised Fields':        ['international-investment-law','diplomatic-law','air-space-law','refugee-law','international-labor-law','intellectual-property-law'],
  'General & Comparative':     ['river-law','world-law','property-law'],
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
    lime:    'bg-lime-50 text-lime-700 border-lime-200',
  };
  return map[color] ?? map.stone;
}

export function getStripClass(color: string): string {
  const map: Record<string, string> = {
    blue:'bg-blue-500',rose:'bg-rose-500',orange:'bg-orange-500',red:'bg-red-500',
    emerald:'bg-emerald-500',green:'bg-green-500',cyan:'bg-cyan-500',violet:'bg-violet-500',
    amber:'bg-amber-500',indigo:'bg-indigo-500',teal:'bg-teal-500',yellow:'bg-yellow-500',
    purple:'bg-purple-500',sky:'bg-sky-500',stone:'bg-stone-400',lime:'bg-lime-500',
  };
  return map[color] ?? map.stone;
}

export function getBannerClass(color: string): string {
  const map: Record<string, string> = {
    blue:'bg-blue-600',rose:'bg-rose-600',orange:'bg-orange-600',red:'bg-red-600',
    emerald:'bg-emerald-600',green:'bg-green-600',cyan:'bg-cyan-600',violet:'bg-violet-600',
    amber:'bg-amber-600',indigo:'bg-indigo-600',teal:'bg-teal-600',yellow:'bg-yellow-500',
    purple:'bg-purple-600',sky:'bg-sky-600',stone:'bg-stone-600',lime:'bg-lime-600',
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
    content:     String(row.content ?? ''),
    author:      String(row.author),
    authorTitle: String(row.authorTitle ?? ''),
    tags:        (() => { const t = String(row.tags ?? '[]'); try { return JSON.parse(t); } catch { return t.split(',').map(s => s.trim()).filter(Boolean); } })(),
    readTime:    Number(row.readTime ?? 5),
    published:   Number(row.published) === 1,
    publishedAt: String(row.publishedAt),
    updatedAt:   String(row.updatedAt ?? row.publishedAt),
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

const LIST_COLS = 'id,title,slug,category,excerpt,author,authorTitle,tags,readTime,published,publishedAt,updatedAt';

export async function getArticles(_locals: App.Locals): Promise<Article[]> {
  const { results } = await (getDB()).prepare(`SELECT ${LIST_COLS} FROM articles ORDER BY publishedAt DESC`).all();
  return (results as Record<string, unknown>[]).map(rowToArticle);
}

export async function getPublishedArticles(_locals: App.Locals): Promise<Article[]> {
  const { results } = await (getDB()).prepare(`SELECT ${LIST_COLS} FROM articles WHERE published=1 ORDER BY publishedAt DESC`).all();
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
  const { results } = await (getDB()).prepare(`SELECT ${LIST_COLS} FROM articles WHERE category=? AND published=1 ORDER BY publishedAt DESC`).bind(category).all();
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

export async function getSettings(_locals: App.Locals): Promise<Record<string, string>> {
  const { results } = await (getDB()).prepare('SELECT key, value FROM site_settings').all();
  const map: Record<string, string> = {};
  for (const row of results as { key: string; value: string }[]) map[row.key] = row.value;
  return map;
}

export async function saveSetting(_locals: App.Locals, key: string, value: string): Promise<void> {
  await (getDB()).prepare('INSERT INTO site_settings (key, value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind(key, value).run();
}
