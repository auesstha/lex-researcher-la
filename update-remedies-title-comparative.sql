-- CTR fix: remedies constitutional crisis article (pos 8.6, 31 impressions, 0 clicks)
-- Problem: seoTitle "Remedies for Constitutional Crisis" (34 chars) has no comparative
--          angle — searchers cannot tell from the browser tab that the article spans
--          6 democracies; the word "comparative" only appears after the colon in the
--          subtitle, which makeSeoTitle() strips
-- Fix: move "Compared" into the pre-colon seoTitle portion; list the 6 countries
--      in the post-colon subtitle so the full page heading is informative

UPDATE articles
SET
  title     = 'Constitutional Crisis Remedies Compared: India, South Korea, Brazil, Poland, Hungary, Israel',
  updatedAt = '2026-11-20T08:30:00Z'
WHERE id = '13';
