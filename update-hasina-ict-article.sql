-- Add "full circle" context and Tarique Rahman political background to the ICT Verdict section
UPDATE articles SET content = REPLACE(
  content,
  'Hasina''s Awami League government established the ICT in 2010 under the International Crimes (Tribunals) Act 1973 to prosecute atrocities committed during the 1971 Liberation War. That same tribunal is now the instrument of her conviction — this time for a crackdown on student protesters in July and August 2024',
  'Hasina''s Awami League government established the ICT in 2010 under the International Crimes (Tribunals) Act 1973 to prosecute atrocities committed during the 1971 Liberation War. The institution she created to deliver justice for 1971 Liberation War crimes is now the instrument of her own conviction — a full-circle irony noted by every serious commentator on this case. The tribunal was reconstituted in October 2024, months after Hasina fled Bangladesh, specifically to try offences arising from the July–August 2024 student uprising. That same tribunal is now the instrument of her conviction — this time for a crackdown on student protesters in July and August 2024'
) WHERE id='23';

-- Add political context paragraph (Tarique Rahman/BNP) to the voluntary return section
UPDATE articles SET content = REPLACE(
  content,
  'The diplomatic dimension also matters. Hasina currently resides in India.',
  'The political landscape in Bangladesh has also shifted fundamentally since Hasina fled. Bangladesh held its first general election post-ouster on February 11, 2026. The Bangladesh Nationalist Party (BNP) won with 209 of 297 seats, and **Tarique Rahman** was sworn in as Prime Minister on February 17, 2026, ending Muhammad Yunus''s interim administration. The Awami League was banned from contesting elections under the Anti-Terrorism Law. The current BNP government has simultaneously demanded Hasina''s extradition and expressed private concern that her physical return could trigger mass Awami League mobilisation on the streets.

The diplomatic dimension also matters. Hasina currently resides in India.'
) WHERE id='23';

-- Add Matrix Chambers passport application and political offense exception to extradition section
UPDATE articles SET content = REPLACE(
  content,
  'The first ground is the "unjust or oppressive" exception.',
  'A significant 2026 development narrows the extradition pathway further. On November 10, 2026, lawyers from **Matrix Chambers** in London applied to the Bangladesh High Commission in New Delhi for a new passport and national identity card on Hasina''s behalf — her existing documents having been revoked. The Bangladesh government''s response was unambiguous: the proper mechanism for her return is extradition, not voluntary travel. This standoff means Hasina is currently documented-stateless, unable to travel on a valid Bangladesh passport and not holding citizenship of any other state.

India also possesses a **fourth independent ground** for refusal that competitors have underreported: the **political offense exception**. Article 6 of the 2013 India-Bangladesh Extradition Treaty explicitly excludes extradition for offenses of a political character. Section 29 of India''s Extradition Act 1962 similarly protects against extradition where the request is motivated by political considerations. Given that (a) the ICT was reconstituted specifically after the political change of government, (b) the ICT Chief Prosecutor publicly appeared at political rallies calling for the Awami League''s ban, and (c) the charges arise from the acts of a political administration, India has strong factual grounds for characterising the prosecution as carrying a political dimension. No Indian court has yet ruled on this point, but the statutory language plainly supports the argument.

The first ground is the "unjust or oppressive" exception.'
) WHERE id='23';

-- Add new FAQ about Tarique Rahman and current Bangladesh government
UPDATE articles SET content = REPLACE(
  content,
  '### Q: Where is Sheikh Hasina now in 2026?',
  '### Q: Who is the current Prime Minister of Bangladesh in 2026?

Tarique Rahman of the Bangladesh Nationalist Party (BNP) has been Prime Minister since February 17, 2026, following the BNP''s landslide victory in the February 11, 2026 general election (209 of 297 seats). He succeeded Muhammad Yunus, who served as Chief Adviser of the interim government from August 2024 to February 2026. The Awami League was banned from contesting the 2026 election.

### Q: Where is Sheikh Hasina now in 2026?'
) WHERE id='23';

-- Update the updatedAt timestamp
UPDATE articles SET updatedAt = '2026-11-18T10:00:00.000Z' WHERE id='23';
