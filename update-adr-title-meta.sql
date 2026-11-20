-- CTR fix: ADR common law countries article (pos 10.6, 4 impressions, 0 clicks)
-- Problem: title names neither the ADR types (mediation/arbitration/conciliation/ENE)
--          nor the specific countries (England, Australia, Canada, New Zealand);
--          meta description is a single CEDR stat about England only
-- Fix: title names 4 countries in first half; excerpt first sentence names
--      all 4 ADR types + all 4 countries within 155 chars

UPDATE articles
SET
  title   = 'ADR in England, Australia, Canada, and New Zealand: Mediation, Arbitration, Conciliation',
  excerpt = 'Mediation, arbitration, conciliation, and ENE across England, Australia, Canada, and New Zealand — traced from CPR 1998 to the Arbitration Act 2025. The Centre for Effective Dispute Resolution reported a 92% mediation settlement rate in England and Wales, while Churchill v Merthyr Tydfil [2023] and the CPR 2024 amendments shifted common law systems from encouraging ADR to mandating it. This legislative review examines the statutory framework for each ADR type, the compulsion debate, access-to-justice tensions, and what the 2025 reforms mean for practitioners across common law jurisdictions.',
  updatedAt = '2026-11-20T08:00:00Z'
WHERE id = '15';
