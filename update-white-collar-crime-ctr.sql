-- CTR fix: white collar crime Bangladesh (pos 5, 0 clicks)
-- Three changes:
-- 1. Title: "Crimes" → "Crime" — seoTitle becomes exact match for the ranking query
-- 2. Excerpt: shorten first sentence from 178 chars to 147 chars — clean meta display
-- 3. Content: add Quick Answer blockquote before the opening ## definition heading

-- ── 1 + 2: Title and excerpt ─────────────────────────────────────────────────
UPDATE articles
SET
  title   = 'White Collar Crime in Bangladesh: Laws, Penalties, Remedies & Enforcement',
  excerpt = 'Bangladesh''s ACC achieved a 48.17% conviction rate in white collar prosecutions while the BFIU froze Tk 76,000 crore — here is the legal framework. This analysis covers the five operative statutes (ACC Act 2004, MLPA 2012, Securities and Exchange Ordinance 1969, Bank Company Act 1991, Penal Code 1860), the Hallmark-Sonali Bank scam as the landmark case study, full penalty tables, corporate liability rules, and the enforcement gap between Bangladesh''s strong anti-corruption law and its courtroom reality.',
  updatedAt = '2026-11-21T07:00:00Z'
WHERE id = '1761696000000';

-- ── 3: Quick Answer blockquote before the opening ## heading ──────────────────
-- Target query: "white collar crime in bangladesh" (definition intent)
-- ~55 words: defines the category, names the statutes, cites enforcement stats
UPDATE articles
SET content = REPLACE(
  content,
  '## What Are White Collar Crimes in Bangladesh?',
  '> **Quick Answer:** White collar crime in Bangladesh covers economically motivated, non-violent offences — fraud, money laundering, corruption, and securities violations — prosecuted under five statutes including the ACC Act 2004 and MLPA 2012. Bangladesh''s ACC holds a 48.17% conviction rate in such cases and the BFIU has frozen Tk 76,000 crore in financial crime proceeds.' || char(10) || char(10)
  || '## What Are White Collar Crimes in Bangladesh?'
),
updatedAt = '2026-11-21T07:00:00Z'
WHERE id = '1761696000000';
