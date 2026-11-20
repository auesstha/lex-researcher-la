-- Featured snippet: add Quick Answer blockquote to 5 "why/what/how/can" articles
-- Inserted immediately before the first ## heading in each article.
-- The > prefix triggers the new blockquote renderer in [slug].astro.
-- Target: Google Featured Snippet box (~30-40% CTR regardless of brand rank).


-- ── 1. Why Is the Constitution the Supreme Law of the Land? (id 11) ───────────
-- Insert before: ## From Confederation to Constitution: Why Supremacy Became Necessary
UPDATE articles
SET content = REPLACE(
  content,
  '## From Confederation to Constitution: Why Supremacy Became Necessary',
  '> **Quick Answer:** The Constitution is the supreme law of the land because Article VI''s Supremacy Clause explicitly establishes that the Constitution, federal statutes, and treaties override any conflicting state law. This supremacy is enforced through judicial review — established in *Marbury v. Madison* (1803) — which empowers courts to strike down any law that conflicts with the Constitution.' || char(10) || char(10) || '## From Confederation to Constitution: Why Supremacy Became Necessary'
),
updatedAt = '2026-11-20T09:00:00Z'
WHERE id = '11';


-- ── 2. Can a Country Execute a Foreign National? (id 17) ─────────────────────
-- Insert before: ## Yes, Countries Can Execute Foreign Nationals, But Within Legal Limits
UPDATE articles
SET content = REPLACE(
  content,
  '## Yes, Countries Can Execute Foreign Nationals, But Within Legal Limits',
  '> **Quick Answer:** Yes — international law does not prohibit a country from executing a foreign national for a crime committed on its territory. However, Article 36 of the Vienna Convention on Consular Relations requires the detaining state to notify the foreign national''s consulate at the moment of arrest. Saudi Arabia executed 188 foreign nationals in 2025 while systematically violating this obligation.' || char(10) || char(10) || '## Yes, Countries Can Execute Foreign Nationals, But Within Legal Limits'
),
updatedAt = '2026-11-20T09:00:00Z'
WHERE id = '17';


-- ── 3. How to Declare Bankruptcy in Bangladesh (id 18) ───────────────────────
-- Insert before: ## The Short Answer: Statutory Relief Exists but Remains Practically Elusive
UPDATE articles
SET content = REPLACE(
  content,
  '## The Short Answer: Statutory Relief Exists but Remains Practically Elusive',
  '> **Quick Answer:** To declare bankruptcy in Bangladesh, file a petition in the district court under the Bankruptcy Act 1997 listing all debts and assets. If accepted, the court appoints a receiver, creditors are notified, and the debtor may receive a discharge releasing them from most unsecured debts. Only 533 to 638 petitions have been filed in the law''s 26-year history, and the Artha Rin Adalat Ain 2003 gives creditors a faster competing remedy.' || char(10) || char(10) || '## The Short Answer: Statutory Relief Exists but Remains Practically Elusive'
),
updatedAt = '2026-11-20T09:00:00Z'
WHERE id = '18';


-- ── 4. Can Sheikh Hasina Return to Bangladesh? (id 23) ───────────────────────
-- Insert before: ## The ICT Verdict: Charges, Conviction, and Current Legal Status
UPDATE articles
SET content = REPLACE(
  content,
  '## The ICT Verdict: Charges, Conviction, and Current Legal Status',
  '> **Quick Answer:** Sheikh Hasina can legally return to Bangladesh but would face immediate arrest and risk execution of the death sentence the International Crimes Tribunal imposed on 17 November 2026. India cannot be compelled to extradite her — the 2013 treaty allows refusal on fair trial and death penalty grounds. Seven legal pathways exist for return without execution, the most viable being a Section 401 CrPC conditional surrender.' || char(10) || char(10) || '## The ICT Verdict: Charges, Conviction, and Current Legal Status'
),
updatedAt = '2026-11-20T09:00:00Z'
WHERE id = '23';


-- ── 5. Land Registration Process Bangladesh Step by Step (id 1762300800000) ──
-- Insert before: ## Step 1: Verify the Land Title Online Using eporcha.gov.bd
UPDATE articles
SET content = REPLACE(
  content,
  '## Step 1: Verify the Land Title Online Using eporcha.gov.bd',
  '> **Quick Answer:** The land registration process in Bangladesh has seven steps: verify title on eporcha.gov.bd, check encumbrances on dolil.gov.bd, obtain a tax clearance certificate, pay stamp duty at a designated bank, register the deed before the sub-registrar, collect the registered deed, and complete mutation at the Land Office. Steps 1 to 3 can be completed from abroad using government portals; Steps 4 to 7 require physical presence in Bangladesh or a registered Special Power of Attorney.' || char(10) || char(10) || '## Step 1: Verify the Land Title Online Using eporcha.gov.bd'
),
updatedAt = '2026-11-20T09:00:00Z'
WHERE id = '1762300800000';
