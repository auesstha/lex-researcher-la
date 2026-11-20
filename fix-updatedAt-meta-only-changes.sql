-- Restore updatedAt for articles where only title/excerpt changed (no content edit).
-- Rule: dateModified should only advance when article.content is meaningfully modified.
-- Changing title or excerpt alone does not justify a new dateModified signal.
--
-- id 13 (remedies): only title changed in update-remedies-title-comparative.sql
--   wrongly stamped 2026-11-20T08:30:00Z → restore to publishedAt 2026-10-07T09:00:00Z
--
-- id 15 (ADR): title + excerpt changed in update-adr-title-meta.sql
--   wrongly stamped 2026-11-20T08:00:00Z → restore to publishedAt 2026-10-11T09:00:00Z

UPDATE articles SET updatedAt = '2026-10-07T09:00:00Z' WHERE id = '13';
UPDATE articles SET updatedAt = '2026-10-11T09:00:00Z' WHERE id = '15';
