# Worship Guitar Practice App

A browser-based mini app for electric guitarists to practice playing over modern Christian worship songs. Focuses on CAGED positions, worship-style chord voicings, and electric guitar techniques, with a dynamic fretboard visualization that updates as the song progresses.

## Platform

React + Vite web app. Browser-based, single-page application. No backend server. Deployable to Netlify/GitHub Pages.

## Screens

### Screen 1: Song Library

Landing page. Grid/card layout showing curated worship songs.

- Each card shows: title, artist, key, BPM, difficulty (beginner/intermediate/advanced)
- Search/filter bar to find songs by title, artist, key, or difficulty
- "Add Song" button → opens JSON paste modal
- Click a song card → navigates to Practice View

**Curated library:** ~20-30 songs from artists like Bethel Music, Elevation Worship, Hillsong Worship, Maverick City Music, Passion, etc. Shipped as JSON files in `data/`.

**JSON paste import:** Text area where user pastes AI-generated JSON. App validates against schema and saves to localStorage. No API calls — the AI work happens externally.

### Screen 2: Practice View

The main practicing interface. Split into panels:

- **Left panel:** Embedded YouTube player (IFrame API). Primary backing audio. User can seek, pause, loop.
- **Right panel:** Chord/section display. Shows current section label, chords, duration. Section auto-highlights as song progresses. Can manually click sections to jump.
- **Below right:** Fretboard visualization. Dynamic neck diagram that updates per section. Shows CAGED position notes, root notes highlighted, chord voicing shapes.
- **Bottom bar:** Backing track controls (optional synth), back to library, section navigation.

**Backing tracks (optional):** Web Audio API synth — simple drums, pads, bass. Can be toggled on/off. Follows song sections. Useful when user wants to play without YouTube's guitar in the mix.

## Fretboard Visualization

The centerpiece of the practice view. An interactive neck diagram showing frets 1-12 across all 6 strings.

- **Scale dots** for the current key/mode, color-coded by interval degree
- **Root notes** prominently highlighted
- **CAGED position shape** highlighted for the current section (e.g., E-form around fret 3 for G major)
- **Chord voicing ghost notes** — shows the specific fretted notes of the recommended voicing
- **Mode/position browser:** Buttons to cycle through related modes (Ionian, Dorian, Mixolydian) or adjacent CAGED positions
- **Pentatonic toggle:** Highlight just the pentatonic box within the current position
- Updates dynamically as the user clicks through sections or as the song playback advances

## Song Data Model (JSON Schema)

```json
{
  "title": "Goodness of God",
  "artist": "Bethel Music",
  "key": "G",
  "bpm": 72,
  "timeSignature": "4/4",
  "youtubeId": "dHk6gVgTz5M",
  "difficulty": "intermediate",
  "capo": null,
  "sections": [
    {
      "label": "Intro",
      "chords": ["G5", "C5", "Em7", "Dsus4"],
      "duration": 8,
      "cagedPosition": "E-form (G)",
      "voicingNotes": "Wide interval G5 on low strings",
      "technique": "Ambient swells with delay"
    },
    {
      "label": "Verse",
      "chords": ["G", "C", "Em7", "Dsus4"],
      "duration": 16,
      "cagedPosition": "E-form (G)",
      "voicingNotes": "Root on 6th string, 3rd fret; add9 shape on C",
      "technique": "Arpeggiated, light gain"
    },
    {
      "label": "Chorus",
      "chords": ["G", "D/F#", "Em7", "Cadd9"],
      "duration": 16,
      "cagedPosition": "Move between G (E-form) and C (A-form)",
      "voicingNotes": "Cadd9 x32030, D/F# 2x0032",
      "technique": "Strummed, medium gain, open strings ringing"
    },
    {
      "label": "Bridge",
      "chords": ["Em7", "Dsus4", "Cadd9", "G"],
      "duration": 8,
      "cagedPosition": "Open position / Em (Am-form)",
      "voicingNotes": "Em7 022030, big open voicings",
      "technique": "Pad with reverb, let ring"
    }
  ]
}
```

`sections[].duration` — in bars (default assumption is 4/4, 4 beats per bar). Sections auto-advance based on BPM and bar count.

## AI Song Parsing (External)

The app does NOT embed AI. Instead, a modular prompt file (`prompts/analyze-song.md`) guides the user's AI tool (Claude Code, opencode, pi) to analyze songs.

### Prompt File Structure

The prompt file lives in `prompts/analyze-song.md` and is broken into editable sections:

1. **STEP 1: Identify the song** — determine title, artist, key, BPM, time signature from the YouTube video
2. **STEP 2: Section breakdown** — identify each section (intro, verse, chorus, bridge, outro) with chords and duration
3. **STEP 3: CAGED position logic** — for each section, determine the best CAGED position (E-form, A-form, C-form, etc.) considering the chord progression and capo
4. **STEP 4: Voicing & technique** — recommend specific fret-hand shapes, electric guitar techniques (swells, arpeggiation, delay, reverb, gain level)
5. **STEP 5: Output format** — produce JSON matching the schema above

User preferences are stored in `prompts/defaults.json` (preferred voicings, positions, technique defaults) which the prompt instructs the AI to read first.

Sections are modular — the user can edit any step independently without breaking the rest.

### Usage Flow

1. User finds a YouTube worship song they want to practice
2. User runs: `cat prompts/analyze-song.md | opencode` (or similar) with the YouTube link
3. AI returns a JSON block matching the schema
4. User copies JSON into the app's "Add Song" paste modal
5. App validates, saves to localStorage, song appears in library

## Project Structure

```
worship-guitar-practice/
├── src/
│   ├── App.jsx              # Router, layout
│   ├── components/
│   │   ├── SongLibrary.jsx  # Song grid, search, add modal
│   │   ├── PracticeView.jsx # Main practice screen
│   │   ├── YouTubePlayer.jsx# YouTube IFrame API wrapper
│   │   ├── ChordChart.jsx   # Section/chord display
│   │   ├── Fretboard.jsx    # Dynamic neck diagram (Canvas or SVG)
│   │   ├── SectionNavigator.jsx
│   │   └── BackingTrack.jsx # Web Audio API synth
│   ├── data/
│   │   └── curated.js       # Curated song library (imported JSON)
│   ├── hooks/
│   │   └── useYouTube.js    # YouTube player state management
│   ├── lib/
│   │   ├── fretboard.js     # Fretboard math, note positions, scale logic
│   │   └── validate.js      # JSON schema validation
│   └── styles/
│       └── app.css
├── public/
├── prompts/
│   ├── analyze-song.md      # AI song parsing prompt (editable)
│   └── defaults.json        # User taste preferences (editable)
├── data/
│   ├── bethel.json
│   ├── elevation.json
│   └── ... (curated songs)
├── index.html
├── package.json
└── vite.config.js
```

## Tech Choices

| Concern | Choice | Reason |
|---------|--------|--------|
| Framework | React 18 | Ubiquitous, component model fits UI panels |
| Build | Vite | Fast dev server, simple config, easy deploy |
| YouTube | IFrame Player API | Embed video, get playback state for auto-advance |
| Audio | Web Audio API | Synth backing tracks without audio files |
| State | React useState/useContext | Simple enough, no need for Redux |
| Storage | localStorage | Persist user-added songs, no backend |
| Fretboard | SVG | Better interactivity (hover/click notes), React-friendly via JSX |

## Fretboard Implementation

Two options for rendering the fretboard:

- **SVG:** Easier to implement hit-testing and hover effects. Scales well at different sizes. React-friendly (JSX).
- **Canvas:** Better performance for complex animations (note highlights sweeping across the neck). Harder to make interactive.

Recommend starting with SVG. It supports clicking/hovering individual notes, which the user requested.

## Non-Goals

- No audio transcription (AI doesn't listen to audio — it analyzes based on known songs or what the AI model already knows)
- No real-time pitch detection
- No social features
- No accounts or authentication
- No backend server

## Spec Self-Review

- All sections are filled. No TBDs or TODOs.
- Architecture matches feature descriptions: two screens, fretboard updates per section, YouTube primary audio, JSON paste import.
- Scope is focused — a single mini app, not a platform.
- No ambiguity: JSON schema is explicit, prompt structure is explicit, tech choices are explicit.
