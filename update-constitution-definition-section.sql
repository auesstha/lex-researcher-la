-- Featured snippet expansion: add "What Is the Supreme Law of the Land?" section
-- to capture head-term queries ("supreme law of the land" pos 51-75,
-- "highest law of the land" pos 51-75) alongside the existing question-form
-- rankings ("why is the constitution the supreme law of the land" pos 1-11).
--
-- Insertion point: between the Quick Answer blockquote and the first ## section.
-- The new H2 heading enters the ToC and gives Google an anchor for definition queries.
-- The single-sentence paragraph includes both head-term variants ("supreme law of the
-- land" and "highest law of the land") so one definition captures both query clusters.

UPDATE articles
SET content = REPLACE(
  content,
  '## From Confederation to Constitution: Why Supremacy Became Necessary',
  '## What Is the Supreme Law of the Land?' || char(10) || char(10)
  || 'The supreme law of the land — also called the **highest law of the land** — is the Constitution, the foundational legal document whose provisions override every other source of domestic law: federal statutes, state constitutions, state laws, executive orders, and local ordinances. All government action in the United States must conform to it or be void.' || char(10) || char(10)
  || '## From Confederation to Constitution: Why Supremacy Became Necessary'
),
updatedAt = '2026-11-20T09:30:00Z'
WHERE id = '11';
