-- CTR fix: bankruptcy Bangladesh article (pos 7.7, 0 clicks)
-- Problem: title "Declaring Bankruptcy in Bangladesh" is abstract — no "how to",
--          no outcome signal; excerpt leads with legislation and petition stats,
--          not what the searcher gets from reading
-- Fix: title → "how to" framing; excerpt → second-person, practical-outcome lede

UPDATE articles
SET
  title   = 'How to Declare Bankruptcy in Bangladesh: Steps, Eligibility, and Debt Relief',
  excerpt = 'You can declare bankruptcy in Bangladesh under the Bankruptcy Act 1997 — eligibility, petition steps, costs, and discharge outcomes explained. Despite 26 years on the books, only 533–638 petitions have ever been filed, largely because the Artha Rin Adalat Ain 2003 gives creditors a faster alternative route. This guide covers both debtor and creditor pathways, corporate insolvency under the Companies Act 1994, and the proposed Insolvency and Bankruptcy Ordinance 2025 that would replace the current framework entirely.',
  updatedAt = '2026-11-20T07:30:00Z'
WHERE id = '18';
