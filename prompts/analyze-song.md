# Worship Song Analyzer

Analyze a YouTube worship song and return structured JSON for a guitar practice app.

## OUTPUT CONTRACT (read this first; it is non-negotiable)

Return ONLY a JSON object with this exact top-level and section shape. No markdown, no prose, no wrapper object.

```json
{
  "title": "Song Title",
  "artist": "Artist Name",
  "key": "G",
  "bpm": 72,
  "timeSignature": "4/4",
  "youtubeId": "VIDEO_ID_FROM_LINK",
  "difficulty": "beginner|intermediate|advanced",
  "capo": null,
  "sections": [
    {
      "label": "Verse 1",
      "startTime": 14.0,
      "lyrics": [
        { "t": 14.0, "text": "[G]First line of the [C]verse goes here" },
        { "t": 18.5, "text": "[Em7]Second line with [Dsus4]chord changes" }
      ],
      "cagedPosition": "E-form (G)",
      "voicingNotes": "G 320003, Cadd9 x32030",
      "technique": "Arpeggiated, light gain"
    }
  ]
}
```

### Field rules (no substitutions)

- **All times are numbers in seconds**, one decimal place (e.g. `14.0`, `137.5`). **Never** use `"MM:SS"` strings.
- Section field is `label`, **not** `name`. Section list is `sections`, at the top level — **not** wrapped in `metadata` or anything else.
- Chord + lyric data lives **only** in `lyrics: [{ t, text }]` per section. The `text` carries ChordPro-style inline `[Chord]` markers.
- Section guitar approach is `technique`, **not** `guitarTechnique`.
- Section end is implicit (the next section's `startTime`). Do **not** emit `endTime` or `duration`.

### Forbidden field names (do not emit any of these — they are the wrong schema)

`metadata`, `name` (use `label`), `endTime`, `duration`, `chords` (chord info goes inside `lyrics[].text`), `guitarTechnique` (use `technique`), `progression`, `sectionChords`.

### Forbidden value shapes

- `"startTime": "00:30"` — wrong. Use `"startTime": 30.0`.
- `"chords": "[A] [D] [A]"` — wrong. Use `"lyrics": [{ "t": 30.0, "text": "[A]    [D]    [A]" }]`.
- A section with no `lyrics` array — wrong. Every section has `lyrics`, even instrumental ones (chord-only ChordPro lines).

If you find yourself about to emit any of the above, stop and re-read this section. The rest of this document explains *how* to fill in this exact schema; it does not authorize a different one.

## Instructions

I'll give you a YouTube link to a modern worship song. Analyze it step by step.

## STEP 1: Identify the song

Determine: title, artist, key, BPM, time signature. If you don't know the song, infer from the video title/description and your knowledge of the artist's catalog.

## STEP 2: Section breakdown

Listen to the audio. Identify each section:
- Intro, Verse, Chorus, Bridge, Outro
- Also note: Tag, Instrumental, Turnaround, Interlude if present
- For each section: capture the `startTime` in seconds from video t=0 (one decimal place). All chord information lives inline in `lyrics[].text` (see STEP 2B) — there is no separate section-level chord list. A section ends where the next one's `startTime` begins; do not emit a `duration` field.

## STEP 2B: Lyric transcription with timing

For each section that has vocals, produce one entry per sung line in `lyrics`:

- `t`: line start time in seconds from video t=0, one decimal place (e.g. `14.3`). Anchor `t` to **when the vocalist actually begins singing the line** in the audio, including any pickup/anacrusis syllables before the downbeat. Not the last word of the previous line. **Each `t` is an independent observation of the audio — do not derive it by adding bars × `60/bpm` to a previous line.** Tempos drift, fills shorten or stretch bars, and accumulated bar math will be off by seconds by the end of a long song. Listen for each line.
- `text`: the lyric with ChordPro-style inline chord markers — `[Chord]` placed immediately before the syllable the chord **actually changes on**. Multiple chord changes per line are expected and required when they occur. Mid-word placement is fine (e.g. `com[G]pares`).
- Place each `[Chord]` bracket at the true chord-change moment. If a line begins with pickup syllables that are still on the previous chord (anacrusis), the first bracket on that line lands **later in the line**, not at the start. Do not force a leading bracket onto pickup syllables — that would misrepresent the harmony.
- One object per distinct sung line. If a line repeats verbatim (e.g. verse 2 of a chorus), include the repeat as its own entry with its own `t`.
- Use chord names exactly as played — keep slash chords, sus4, sus2, add9, etc. intact. **A slash chord is ONE bracket: write `[D/F#]`, never `[D]/[F#]` and never `[D]/F#`.** Always write `sus2` or `sus4` explicitly; **never bare `sus`** (it's ambiguous). If a chord is otherwise ambiguous, prefer the simpler diatonic option.
- **Chord-naming convention:** inline `[Chord]` markers always use **sounding-pitch names** — the chord the listener hears. When `capo > 0`, the chord *shape* (e.g. `G`) differs from the sounding pitch (e.g. `B` with capo 4); `voicingNotes` is where you note the shape, e.g. `"B 320003 (G shape, capo 4)"`. Never put shape names in `[brackets]` when a capo is in use.
- All `t` values within a section MUST fall between this section's `startTime` and the next section's `startTime` (or the video's end time for the final section). Line spacing should reflect when each line is actually sung — not forced to be evenly distributed.
- **Each section entry represents one contiguous pass through the music.** If two passes of the same lyrics are separated by **more than ~4 seconds of any other content** (instrumental break, vocal ad-lib, another section's worth of bars), they MUST be split into separate section entries (e.g. `Bridge 1` and `Bridge 2`), even when the lyrics are identical. A 46-second gap between two passes inside one section entry is always wrong.
- Use straight ASCII quotes only in `text`: `'` and `"`, never `'`, `'`, `"`, or `"`. Same for hyphens — use `-`, not `—` or `–`.
- **Instrumental sections** (Intro, Turnaround, Instrumental, Outro with no vocal) use the same `lyrics[]` shape with **chord-only ChordPro lines** — brackets separated by whitespace, no lyric text. Each line still needs a `t` anchored to when that phrase begins. Split into multiple lines to reflect actual phrase boundaries (typically every 2–4 bars), not one giant line.
- Within a chord-only line, the visual spacing between brackets is decorative; chord-change timing is only meaningful at the line level (via `t`). If you need finer chord-change timing inside an instrumental, split into more `lyrics` lines with their own `t` values.
- **Every section MUST include a `lyrics` field.** No section is ever entirely empty — purely instrumental sections still get chord-only ChordPro lines as described above. `lyrics: []` should be rare and only used if a section truly has no chord content (e.g. a percussion-only break).

## STEP 3: CAGED position logic

For each section, determine the best CAGED position to play in:
- Consider the root chord of the section
- Consider which position gives best access to the full chord progression
- Consider capo position if applicable (check if the original recording uses a capo)
- Output e.g. "E-form (G)", "A-form (C)", "Open position / C-form"
- Read prompts/defaults.json for preferred position bias

## STEP 4: Voicing & technique

For each section, recommend:
- voicingNotes: Specific fret-hand shapes with fingering notation (e.g., "Cadd9 x32030", "D/F# 2x0032")
- technique: Electric-specific approach (ambient swells, arpeggiated, strummed, pad with reverb, delay drenched, clean fingerpicking, building, climax)
- Use worship guitar conventions: add9, sus4, slash chords, open strings ringing

## STEP 4B: Worked example (for the format only — do not copy values)

For "What A Beautiful Name" by Hillsong Worship (key D, 68 BPM, 4/4), a partial output for the chorus would look like:

```json
{
  "label": "Chorus",
  "startTime": 52.8,
  "lyrics": [
    { "t": 52.8, "text": "[D]What a beautiful [A/C#]name it is" },
    { "t": 57.1, "text": "[Bm]What a beautiful [G]name it is" },
    { "t": 61.4, "text": "The [D]name of [A/C#]Jesus [Bm]Christ my [G]King" },
    { "t": 66.0, "text": "[D]What a beautiful [A/C#]name it [Bm]is" },
    { "t": 70.2, "text": "Nothing com[G]pares to this" }
  ],
  "cagedPosition": "D-form (D)",
  "voicingNotes": "D xx0232, A/C# x42220, Bm x24432, G 320003",
  "technique": "Strummed, building dynamics"
}
```

And a typical instrumental Intro — chord-only ChordPro lines, one per phrase:

```json
{
  "label": "Intro",
  "startTime": 0.0,
  "lyrics": [
    { "t": 0.0, "text": "[D]    [A]    [Bm]    [G]" },
    { "t": 7.0, "text": "[D]    [A]    [Bm]    [G]" }
  ],
  "cagedPosition": "D-form (D)",
  "voicingNotes": "D xx0232, A x02220, Bm x24432, G 320003",
  "technique": "Ambient swells, delay"
}
```

Note: `t` is decimal seconds from video start, anchored to when singing begins (including pickup syllables). Chord markers sit immediately before the syllable on which the chord *actually changes*, including mid-word (`com[G]pares`). Lines with four chord changes are normal and required when the song does that. Lines without a leading bracket inherit the chord from the previous line — this is correct and expected when the line opens with pickup syllables on the carried-over chord.

**Anacrusis example** — when "Oh there's" is sung as pickup on the previous E chord, and the downbeat B lands on "nothing":

```json
{ "t": 52.5, "text": "Oh there's [B]nothing better than You" }
```

The bracket is in the middle of the line, not at the start. `t` is the time of "Oh" (when singing begins), not of "nothing" (when the chord changes).

**Slash-chord example** — a `D/F#` walking down at the end of a phrase is ONE bracket:

```json
{ "t": 65.0, "text": "Lord I lay my [G]heart down at your [D/F#]feet" }
```

**Wrong** (do not emit either of these):

```
{ "t": 65.0, "text": "Lord I lay my [G]heart down at your [D]/[F#]feet" }
{ "t": 65.0, "text": "Lord I lay my [G]heart down at your [D]/F#feet" }
```

## STEP 5: Final output

Emit the JSON object exactly as specified in the **OUTPUT CONTRACT** at the top of this document. Every section must include every field shown there. Re-read the "Forbidden field names" and "Forbidden value shapes" lists before returning. Return ONLY the JSON — no markdown fences, no commentary, no wrapper object. Use straight ASCII quotes throughout.
