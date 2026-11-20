-- CTR fix: rewrite title + excerpt for page-1 articles with 0 clicks
-- Deployed: 2026-11-20
-- Reason: GSC shows 76–41 impressions at pos 5–10 with 0 clicks on 4 articles.
--         Root causes: (1) broken title truncation, (2) US-only signals in meta,
--         (3) teaser meta with no substance, (4) abstract-style meta description.


-- ── 1. Constitution supreme law ───────────────────────────────────────────────
-- Problem: excerpt opens with "Article VI's Supremacy Clause" + "Articles of Confederation"
--          → signals US-only article to global searchers → 0 clicks despite pos 1 for exact query
-- Fix: first sentence ≤155 chars that directly answers the question and names the enforcement mechanism
UPDATE articles
SET
  excerpt = 'The Constitution is the supreme law because Article VI''s Supremacy Clause makes every conflicting state law void — here''s how judicial review, preemption, and anti-commandeering doctrine give that supremacy its teeth. This analysis covers the Supremacy Clause text and its origins in the collapse of the Articles of Confederation, Marbury v. Madison as the enforcement mechanism, federal preemption doctrine (express, implied, field, and conflict preemption), the anti-commandeering limits from New York v. United States and Printz v. United States, and what ''supreme law of the land'' has meant from 1787 to 2026.',
  updatedAt = '2026-11-20T07:00:00Z'
WHERE id = '11';


-- ── 2. Saudi Arabia death penalty ─────────────────────────────────────────────
-- Problem A: title "Can a Country Carry the Death Penalty Against a Foreign National?
--            How Saudi Arabia Weaponizes Its Legal System Against Migrant Workers"
--            makeSeoTitle() finds no separator at pos 20–55 → hard-truncates to
--            "Can a Country Carry the Death Penalty Against a…" — ellipsis mid-thought
-- Problem B: excerpt opens with "In October 2026, Saudi Arabia executed..." which is fine
--            but the meta description that builds from it is not compelling
-- Fix A: restructure title so colon separator lands at pos 20–55
--        new title → seoTitle = "Can a Country Execute a Foreign National" (39 chars)
-- Fix B: rewrite excerpt first sentence to be a standalone compelling meta description
UPDATE articles
SET
  title   = 'Can a Country Execute a Foreign National: Saudi Arabia''s Record Under International Law',
  excerpt = 'Saudi Arabia executed migrant workers without consular notification, violating VCCR Article 36 — and the international legal system has largely failed to stop it. This article examines how Saudi Arabia systematically breaches Article 36 consular rights, CAT Article 15''s confession exclusion rule, and Arab Charter Article 6 in capital cases involving Bangladeshi and other migrant workers, using the October 2026 Mecca executions as the central case study.',
  updatedAt = '2026-11-20T07:00:00Z'
WHERE id = '17';


-- ── 3. Remedies for Constitutional Crisis ─────────────────────────────────────
-- Problem: first sentence of excerpt ("Most constitutional crises do not arrive
--          with tanks in the streets.") becomes the 67-char meta description —
--          it is punchy but names zero remedies, zero countries, zero value
-- Fix: rewrite excerpt so first sentence ≤155 chars names the five remedy categories
--      and the six countries covered — gives searchers a reason to click
UPDATE articles
SET
  excerpt = 'Judicial, legislative, electoral, and constitutional design remedies for crisis — compared across India, South Korea, Brazil, Poland, Hungary, and Israel. Most constitutional crises arrive through legislation and judicial appointments, not coups. This comparative guide examines how each of those democracies resisted or failed to resist executive overreach, why no single remedy suffices, and which remedy combinations have actually worked — from India''s basic structure doctrine to South Korea''s impeachment of Park Geun-hye and Israel''s ongoing judicial reform standoff.',
  updatedAt = '2026-11-20T07:00:00Z'
WHERE id = '13';


-- ── 4. White Collar Crimes Bangladesh ─────────────────────────────────────────
-- Problem: excerpt is a single 460-char sentence → meta description truncates at
--          152 chars ending in "Securities…" — reads as an abstract, creates no urgency
-- Fix: rewrite excerpt so first sentence ≤155 chars leads with a concrete data point
--      that signals authority and creates curiosity
UPDATE articles
SET
  excerpt = 'Bangladesh''s ACC achieved a 48.17% conviction rate in white collar prosecutions while the BFIU froze Tk 76,000 crore in assets — here is the legal framework behind those numbers. This analysis covers the five operative statutes (ACC Act 2004, MLPA 2012, Securities and Exchange Ordinance 1969, Bank Company Act 1991, Penal Code 1860), the Hallmark-Sonali Bank scam as the landmark case study, full penalty tables, corporate liability rules, and the enforcement gap between Bangladesh''s strong anti-corruption law and its courtroom reality.',
  updatedAt = '2026-11-20T07:00:00Z'
WHERE id = '1761696000000';
