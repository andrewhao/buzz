# Worship Song Analyzer

Analyze a YouTube worship song and return structured JSON for a guitar practice app.

## Instructions

I'll give you a YouTube link to a modern worship song. Analyze it step by step.

## STEP 1: Identify the song

Determine: title, artist, key, BPM, time signature. If you don't know the song, infer from the video title/description and your knowledge of the artist's catalog.

## STEP 2: Section breakdown

Listen through the song mentally. Identify each section:
- Intro, Verse, Chorus, Bridge, Outro
- Also note: Tag, Instrumental, Turnaround, Interlude if present
- For each section: list the chord progression and duration in bars (assume 4/4 unless noted, count measures)

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

## STEP 5: Output format

Return ONLY a valid JSON object matching this schema:

{
  "title": "Song Title",
  "artist": "Artist Name",
  "key": "G",
  "bpm": 72,
  "timeSignature": "4/4",
  "youtubeId": "VIDEO_ID_FROM_LINK",
  "difficulty": "beginner|intermediate|advanced",
  "capo": null or number,
  "sections": [
    {
      "label": "Verse",
      "chords": ["G", "C", "Em7", "Dsus4"],
      "duration": 16,
      "cagedPosition": "E-form (G)",
      "voicingNotes": "G 320003, Cadd9 x32030",
      "technique": "Arpeggiated, light gain"
    }
  ]
}

Return ONLY the JSON. No markdown, no explanation.
