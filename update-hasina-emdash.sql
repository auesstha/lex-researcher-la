UPDATE articles SET content = REPLACE(content, '—', ' - '), excerpt = REPLACE(excerpt, '—', ' - ') WHERE id='23';
