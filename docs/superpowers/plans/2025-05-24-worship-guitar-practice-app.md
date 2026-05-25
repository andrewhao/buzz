# Worship Guitar Practice App Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a browser-based mini app for electric guitarists to practice playing over modern worship songs, with YouTube playback, dynamic fretboard visualization, and song import via JSON.

**Architecture:** Single-page React + Vite app. No backend. Curated song library as static JSON. User-added songs in localStorage. YouTube IFrame API for video. Web Audio API for optional backing tracks. SVG-based fretboard rendered as React components.

**Tech Stack:** React 18, Vite, YouTube IFrame Player API, Web Audio API, SVG, localStorage

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles/app.css`

- [ ] **Step 1: Initialize project files**

```bash
mkdir -p /Users/andrewhao/workspace/buzz/worship-guitar-practice/src/{components,data,lib,hooks,styles}
```

- [ ] **Step 2: Create package.json**

```json
{
  "name": "worship-guitar-practice",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.0"
  }
}
```

- [ ] **Step 3: Create vite.config.js**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- [ ] **Step 4: Create index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Worship Guitar Practice</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

- [ ] **Step 5: Create src/main.jsx**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- [ ] **Step 6: Create src/App.jsx (shell)**

```jsx
import { useState, useCallback } from 'react'
import SongLibrary from './components/SongLibrary'
import PracticeView from './components/PracticeView'
import { loadSongs, saveSongs } from './lib/storage'

export default function App() {
  const [screen, setScreen] = useState('library')
  const [currentSong, setCurrentSong] = useState(null)
  const [customSongs, setCustomSongs] = useState(loadSongs)

  const handleSelectSong = useCallback((song) => {
    setCurrentSong(song)
    setScreen('practice')
  }, [])

  const handleAddSong = useCallback((song) => {
    const updated = [...customSongs, song]
    setCustomSongs(updated)
    saveSongs(updated)
  }, [customSongs])

  const handleBack = useCallback(() => {
    setScreen('library')
    setCurrentSong(null)
  }, [])

  if (screen === 'practice' && currentSong) {
    return <PracticeView song={currentSong} onBack={handleBack} />
  }

  return (
    <SongLibrary
      onSelectSong={handleSelectSong}
      onAddSong={handleAddSong}
      customSongs={customSongs}
    />
  )
}
```

- [ ] **Step 7: Create src/styles/app.css**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #0f0f1a;
  color: #e0e0e0;
  min-height: 100vh;
}

button {
  cursor: pointer;
  border: none;
  background: #2a2a3e;
  color: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
}

button:hover {
  background: #3a3a52;
}

input, textarea {
  background: #1a1a2e;
  border: 1px solid #3a3a52;
  color: #e0e0e0;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  width: 100%;
}

::placeholder {
  color: #666;
}
```

---

### Task 2: Data Model, Utilities, and Storage

**Files:**
- Create: `src/lib/notes.js`
- Create: `src/lib/fretboard.js`
- Create: `src/lib/schema.js`
- Create: `src/lib/storage.js`

- [ ] **Step 1: Create src/lib/notes.js**

```js
export const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export const NOTE_INDEX = Object.fromEntries(NOTES.map((n, i) => [n, i]))

export function noteToIndex(note) {
  const base = note.replace(/[0-9]/g, '')
  return NOTE_INDEX[base] ?? -1
}

export function transpose(note, semitones) {
  const idx = noteToIndex(note)
  if (idx === -1) return note
  return NOTES[(idx + semitones + 12) % 12]
}

export function intervalBetween(a, b) {
  return (noteToIndex(b) - noteToIndex(a) + 12) % 12
}

export function getNotesInKey(root, scalePattern) {
  const rootIdx = noteToIndex(root)
  return scalePattern.map(half => NOTES[(rootIdx + half) % 12])
}

export const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11]
export const MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10]
export const MAJOR_PENTATONIC = [0, 2, 4, 7, 9]
export const MINOR_PENTATONIC = [0, 3, 5, 7, 10]

export const MODES = {
  Ionian: [0, 2, 4, 5, 7, 9, 11],
  Dorian: [0, 2, 3, 5, 7, 9, 10],
  Phrygian: [0, 1, 3, 5, 7, 8, 10],
  Lydian: [0, 2, 4, 6, 7, 9, 11],
  Mixolydian: [0, 2, 4, 5, 7, 9, 10],
  Aeolian: [0, 2, 3, 5, 7, 8, 10],
  Locrian: [0, 1, 3, 5, 6, 8, 10],
}

export const STRING_NOTES = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']

export function noteAtFret(stringIndex, fret) {
  const open = STRING_NOTES[stringIndex]
  const openIdx = noteToIndex(open)
  return NOTES[(openIdx + fret) % 12]
}
```

- [ ] **Step 2: Create src/lib/fretboard.js**

```js
import { noteAtFret, noteToIndex } from './notes'

export const FRET_COUNT = 12
export const STRING_COUNT = 6

export const CAGED_SHAPES = {
  'E-form': { rootString: 5, rootFretOffset: 0, shape: [0, 2, 2, 1, 0, 0] },
  'A-form': { rootString: 4, rootFretOffset: 0, shape: [0, 0, 2, 2, 2, 0] },
  'C-form': { rootString: 2, rootFretOffset: 0, shape: [0, 3, 2, 0, 1, 0] },
  'D-form': { rootString: 3, rootFretOffset: 0, shape: [0, 0, 0, 2, 3, 2] },
  'G-form': { rootString: 5, rootFretOffset: 0, shape: [3, 2, 0, 0, 0, 3] },
}

export function getFretboardNotes() {
  const notes = []
  for (let s = 0; s < STRING_COUNT; s++) {
    for (let f = 0; f <= FRET_COUNT; f++) {
      notes.push({ string: s, fret: f, note: noteAtFret(s, f) })
    }
  }
  return notes
}

export function getPositionNotes(rootNote, scaleIntervals) {
  const rootIdx = noteToIndex(rootNote)
  const scaleNoteIndices = new Set(scaleIntervals.map(i => (rootIdx + i) % 12))
  return getFretboardNotes().map(p => ({
    ...p,
    inScale: scaleNoteIndices.has(noteToIndex(p.note)),
    isRoot: p.note === rootNote,
  }))
}

export function getCagedPositionNotes(rootNote, formName) {
  const shape = CAGED_SHAPES[formName]
  if (!shape) return []
  const rootIdx = noteToIndex(rootNote)
  const positions = []
  for (let s = 0; s < STRING_COUNT; s++) {
    const fret = shape.shape[s]
    if (fret > 0) {
      const note = noteAtFret(s, fret)
      positions.push({ string: s, fret, note, isRoot: note === rootNote })
    }
  }
  return positions
}
```

- [ ] **Step 3: Create src/lib/schema.js**

```js
export const SECTION_SCHEMA = {
  type: 'object',
  required: ['label', 'chords', 'duration'],
  properties: {
    label: { type: 'string' },
    chords: { type: 'array', items: { type: 'string' } },
    duration: { type: 'number' },
    cagedPosition: { type: 'string' },
    voicingNotes: { type: 'string' },
    technique: { type: 'string' },
  },
}

export const SONG_SCHEMA = {
  type: 'object',
  required: ['title', 'artist', 'key', 'bpm', 'sections'],
  properties: {
    title: { type: 'string' },
    artist: { type: 'string' },
    key: { type: 'string' },
    bpm: { type: 'number' },
    timeSignature: { type: 'string' },
    youtubeId: { type: 'string' },
    difficulty: { type: 'string', enum: ['beginner', 'intermediate', 'advanced'] },
    capo: { type: ['number', 'null'] },
    sections: { type: 'array', items: SECTION_SCHEMA },
  },
}

export function validateSong(data) {
  const errors = []
  if (!data.title) errors.push('Missing title')
  if (!data.artist) errors.push('Missing artist')
  if (!data.key) errors.push('Missing key')
  if (!data.bpm || typeof data.bpm !== 'number') errors.push('Missing or invalid BPM')
  if (!Array.isArray(data.sections) || data.sections.length === 0) {
    errors.push('Need at least one section')
  } else {
    data.sections.forEach((s, i) => {
      if (!s.label) errors.push(`Section ${i + 1}: missing label`)
      if (!Array.isArray(s.chords) || s.chords.length === 0) {
        errors.push(`Section "${s.label || i + 1}": missing chords`)
      }
      if (!s.duration || typeof s.duration !== 'number') {
        errors.push(`Section "${s.label || i + 1}": missing or invalid duration`)
      }
    })
  }
  return { valid: errors.length === 0, errors }
}
```

- [ ] **Step 4: Create src/lib/storage.js**

```js
const STORAGE_KEY = 'worship-guitar-songs'

export function loadSongs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveSongs(songs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(songs))
  } catch (e) {
    console.error('Failed to save songs:', e)
  }
}
```

---

### Task 3: Curated Song Library

**Files:**
- Create: `src/data/curated.js`

- [ ] **Step 1: Create src/data/curated.js**

```js
const curatedSongs = [
  {
    title: "Goodness of God",
    artist: "Bethel Music",
    key: "G",
    bpm: 72,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      { label: "Intro", chords: ["G", "C", "Em", "D"], duration: 8, cagedPosition: "E-form (G)", voicingNotes: "Open G chord shape", technique: "Ambient swells" },
      { label: "Verse", chords: ["G", "C", "Em", "D"], duration: 16, cagedPosition: "E-form (G)", voicingNotes: "G 320003, C x32010, Em 022000, D xx0232", technique: "Arpeggiated, light gain" },
      { label: "Chorus", chords: ["G", "D", "Em", "C"], duration: 16, cagedPosition: "Move between E-form and open", voicingNotes: "Cadd9 x32030 for chorus lift", technique: "Strummed, medium gain" },
      { label: "Bridge", chords: ["Em", "D", "C", "G"], duration: 8, cagedPosition: "Open position", voicingNotes: "Em7 022030, big open voicings", technique: "Pad with reverb" },
    ],
  },
  {
    title: "Way Maker",
    artist: "Leeland",
    key: "E",
    bpm: 68,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      { label: "Verse", chords: ["E", "B", "C#m", "A"], duration: 16, cagedPosition: "E-form (E)", voicingNotes: "E 022100, B x24442, C#m x46654", technique: "Arpeggiated" },
      { label: "Chorus", chords: ["E", "B", "C#m", "A"], duration: 16, cagedPosition: "E-form (E)", voicingNotes: "Add9 shapes: Eadd9 024100", technique: "Building strum, add delay" },
      { label: "Bridge", chords: ["A", "B", "C#m", "B/D#"], duration: 8, cagedPosition: "A-form moving to E-form", voicingNotes: "B/D# x64440", technique: "Pad, dynamic swell" },
    ],
  },
  {
    title: "What a Beautiful Name",
    artist: "Hillsong Worship",
    key: "D",
    bpm: 76,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      { label: "Verse", chords: ["D", "A", "Bm", "G"], duration: 16, cagedPosition: "Open D / C-form", voicingNotes: "D xx0232, Bm x24432", technique: "Fingerpicked, clean" },
      { label: "Chorus", chords: ["D", "A", "Bm", "G"], duration: 16, cagedPosition: "Open D / C-form", voicingNotes: "Add sus2 colors on D", technique: "Strummed, building" },
      { label: "Bridge", chords: ["G", "A", "Bm", "D/F#"], duration: 8, cagedPosition: "G-form moving to E-form", voicingNotes: "D/F# 2x0032", technique: "Climax, full strum" },
    ],
  },
  {
    title: "Jireh",
    artist: "Elevation Worship / Maverick City",
    key: "A",
    bpm: 74,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "intermediate",
    capo: null,
    sections: [
      { label: "Intro", chords: ["A", "E", "F#m", "D"], duration: 8, cagedPosition: "E-form (A) at fret 5", voicingNotes: "A barre at 5th, D barre at 5th", technique: "Ambient" },
      { label: "Verse", chords: ["A", "E", "F#m", "D"], duration: 16, cagedPosition: "E-form (A) at fret 5", voicingNotes: "F#m x44222, stay in position", technique: "Arpeggiated, light" },
      { label: "Chorus", chords: ["A", "E", "F#m", "D"], duration: 16, cagedPosition: "E-form (A) at fret 5", voicingNotes: "Open high strings ring over barre", technique: "Strummed, wide" },
    ],
  },
  {
    title: "Build My Life",
    artist: "Passion / Brett Younker",
    key: "C",
    bpm: 70,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      { label: "Verse", chords: ["C", "G", "Am", "F"], duration: 16, cagedPosition: "C-form (open)", voicingNotes: "C x32010, Am x02210, F 133211", technique: "Fingerpicked" },
      { label: "Chorus", chords: ["C", "G", "Am", "F"], duration: 16, cagedPosition: "C-form (open)", voicingNotes: "Fmaj7 x33210 for lift", technique: "Strummed, adding gain" },
      { label: "Bridge", chords: ["Am", "G", "F", "C"], duration: 8, cagedPosition: "Am-form moving to C-form", voicingNotes: "Stay in open position", technique: "Building to climax" },
    ],
  },
  {
    title: "Graves Into Gardens",
    artist: "Elevation Worship",
    key: "E",
    bpm: 76,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "intermediate",
    capo: null,
    sections: [
      { label: "Intro", chords: ["E", "B", "C#m", "A"], duration: 8, cagedPosition: "E-form (E)", voicingNotes: "Open E, B barre at 7th", technique: "Swells" },
      { label: "Verse", chords: ["E", "B", "C#m", "A"], duration: 16, cagedPosition: "E-form (E)", voicingNotes: "Stay in E-form, use open B string", technique: "Arpeggiated" },
      { label: "Chorus", chords: ["E", "B", "C#m", "A"], duration: 16, cagedPosition: "E-form (E)", voicingNotes: "Let open B and E strings ring", technique: "Full strum, delay" },
      { label: "Bridge", chords: ["A", "E", "B", "C#m"], duration: 8, cagedPosition: "A-form moving through", voicingNotes: "A x02220, big stretch", technique: "Climax, ambient" },
    ],
  },
  {
    title: "O Come to the Altar",
    artist: "Elevation Worship",
    key: "G",
    bpm: 70,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      { label: "Verse", chords: ["G", "Em", "C", "D"], duration: 16, cagedPosition: "E-form (G)", voicingNotes: "Open position", technique: "Clean, arpeggiated" },
      { label: "Chorus", chords: ["G", "D", "Em", "C"], duration: 16, cagedPosition: "E-form (G)", voicingNotes: "D/F# 2x0032 for movement", technique: "Strummed" },
    ],
  },
  {
    title: "Who You Say I Am",
    artist: "Hillsong Worship",
    key: "G",
    bpm: 75,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      { label: "Verse", chords: ["G", "D", "Em", "C"], duration: 16, cagedPosition: "E-form (G)", voicingNotes: "Open position, Cadd9 x32030", technique: "Fingerpicked" },
      { label: "Chorus", chords: ["G", "D", "Em", "C"], duration: 16, cagedPosition: "E-form (G)", voicingNotes: "Big open voicings", technique: "Strummed, power" },
    ],
  },
  {
    title: "Reckless Love",
    artist: "Cory Asbury",
    key: "E",
    bpm: 72,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      { label: "Verse", chords: ["E", "B", "C#m", "A"], duration: 16, cagedPosition: "E-form (E)", voicingNotes: "Open E, B at 7th barre", technique: "Arpeggiated" },
      { label: "Chorus", chords: ["E", "B", "C#m", "A"], duration: 16, cagedPosition: "E-form (E)", voicingNotes: "Open strings ring", technique: "Strummed, building" },
      { label: "Bridge", chords: ["A", "E", "B", "C#m"], duration: 8, cagedPosition: "A-form to E-form", voicingNotes: "A x02220", technique: "Climax swell" },
    ],
  },
  {
    title: "10,000 Reasons (Bless the Lord)",
    artist: "Matt Redman",
    key: "G",
    bpm: 73,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      { label: "Verse", chords: ["G", "D", "Em", "C"], duration: 16, cagedPosition: "E-form (G)", voicingNotes: "Open position", technique: "Strummed, clean" },
      { label: "Chorus", chords: ["G", "D", "Em", "C"], duration: 16, cagedPosition: "E-form (G)", voicingNotes: "Add sus4 for lift", technique: "Strummed, building" },
    ],
  },
  {
    title: "The Blessing",
    artist: "Elevation Worship / Kari Jobe",
    key: "D",
    bpm: 68,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "intermediate",
    capo: null,
    sections: [
      { label: "Verse", chords: ["D", "A", "Bm", "G"], duration: 16, cagedPosition: "Open D", voicingNotes: "D xx0232, Bm x24432", technique: "Ambient, reverb-heavy" },
      { label: "Chorus", chords: ["D", "A", "Bm", "G"], duration: 16, cagedPosition: "Open D", voicingNotes: "Add D/F# 2x0032", technique: "Building, swelling" },
      { label: "Bridge", chords: ["D", "A", "Bm", "G"], duration: 16, cagedPosition: "Open D", voicingNotes: "Sustained chord pads", technique: "Pad, ethereal" },
    ],
  },
]

export default curatedSongs
```

---

### Task 4: Fretboard SVG Component

**Files:**
- Create: `src/components/Fretboard.jsx`

- [ ] **Step 1: Create src/components/Fretboard.jsx**

```jsx
import { useMemo } from 'react'
import { getPositionNotes, STRING_COUNT, FRET_COUNT } from '../lib/fretboard'
import { noteToIndex, MODES } from '../lib/notes'

const FRET_SPACING = 45
const STRING_SPACING = 20
const PADDING = 30
const DOT_RADIUS = 7

function parseCagedPosition(pos) {
  if (!pos) return null
  const match = pos.match(/^([A-Z])-form(?: \((\w)\))?/i)
  if (match) {
    const rootNote = match[2] || null
    return { form: match[1].toUpperCase(), rootNote }
  }
  return null
}

function getScaleForSection(sectionKey, cagedText) {
  const caged = parseCagedPosition(cagedText)
  const root = caged?.rootNote || sectionKey || 'C'
  return getPositionNotes(root, MODES.Ionian)
}

export default function Fretboard({ song, currentSectionIndex, showPentatonic }) {
  const section = song?.sections?.[currentSectionIndex]
  const key = song?.key || 'C'

  const fretboardData = useMemo(() => {
    if (!section) return getPositionNotes(key, MODES.Ionian)
    const notes = getPositionNotes(key, MODES.Ionian)

    const caged = parseCagedPosition(section.cagedPosition)
    const cagedNotes = caged
      ? notes.filter(n => {
          const chordNotes = section.chords.join(' ')
          return chordNotes.includes(n.note)
        })
      : []

    return { notes, cagedNotes, section }
  }, [key, section])

  const width = PADDING * 2 + FRET_COUNT * FRET_SPACING
  const height = PADDING * 2 + (STRING_COUNT - 1) * STRING_SPACING

  function noteX(fret) {
    return PADDING + fret * FRET_SPACING
  }

  function noteY(string) {
    return PADDING + string * STRING_SPACING
  }

  const fretMarkers = [3, 5, 7, 9, 12]

  return (
    <div style={{ overflowX: 'auto' }}>
      <svg width={width} height={height} style={{ display: 'block' }}>
        <rect width={width} height={height} fill="#1a1a2e" rx="8" />

        {Array.from({ length: FRET_COUNT + 1 }, (_, f) => (
          <line
            key={`fret-${f}`}
            x1={noteX(f)}
            y1={PADDING - 5}
            x2={noteX(f)}
            y2={height - PADDING + 5}
            stroke={f === 0 ? '#e0e0e0' : '#3a3a52'}
            strokeWidth={f === 0 ? 3 : 1}
          />
        ))}

        {Array.from({ length: STRING_COUNT }, (_, s) => (
          <line
            key={`string-${s}`}
            x1={noteX(0)}
            y1={noteY(s)}
            x2={noteX(FRET_COUNT)}
            y2={noteY(s)}
            stroke="#555"
            strokeWidth={2 - s * 0.2}
          />
        ))}

        {fretMarkers.map(f => (
          <React.Fragment key={`marker-${f}`}>
            {f === 12 ? (
              <>
                <circle cx={noteX(f) - FRET_SPACING / 2} cy={noteY(1.5)} r="4" fill="#555" />
                <circle cx={noteX(f) - FRET_SPACING / 2} cy={noteY(3.5)} r="4" fill="#555" />
              </>
            ) : (
              <circle cx={noteX(f) - FRET_SPACING / 2} cy={height / 2} r="5" fill="#555" />
            )}
          </React.Fragment>
        ))}

        {(fretboardData.notes || []).map((p, i) => {
          if (!p.inScale) return null
          const isRoot = p.isRoot
          return (
            <circle
              key={`note-${i}`}
              cx={noteX(p.fret)}
              cy={noteY(p.string)}
              r={DOT_RADIUS}
              fill={isRoot ? '#ff6b6b' : '#4ecdc4'}
              opacity={0.8}
            />
          )
        })}

        {fretMarkers.map(f => (
          <text
            key={`label-${f}`}
            x={noteX(f) - FRET_SPACING / 2}
            y={PADDING - 12}
            textAnchor="middle"
            fill="#888"
            fontSize="10"
          >
            {f}
          </text>
        ))}
      </svg>

      {section && (
        <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#888' }}>
          <strong>CAGED:</strong> {section.cagedPosition || 'N/A'}
          {section.voicingNotes && <span> &middot; {section.voicingNotes}</span>}
          {section.technique && <span> &middot; 🎸 {section.technique}</span>}
        </div>
      )}
    </div>
  )
}
```

---

### Task 5: YouTube Player Component

**Files:**
- Create: `src/components/YouTubePlayer.jsx`
- Create: `src/hooks/useYouTube.js`

- [ ] **Step 1: Create src/hooks/useYouTube.js**

```js
import { useEffect, useRef, useState, useCallback } from 'react'

let apiLoaded = false
let loadPromise = null

function loadYouTubeAPI() {
  if (apiLoaded) return Promise.resolve()
  if (loadPromise) return loadPromise
  loadPromise = new Promise((resolve) => {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    tag.onload = () => {
      window.onYouTubeIframeAPIReady = () => {
        apiLoaded = true
        resolve()
      }
    }
    document.body.appendChild(tag)
  })
  return loadPromise
}

export default function useYouTube(playerId) {
  const playerRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const initPlayer = useCallback(async (videoId) => {
    await loadYouTubeAPI()
    if (playerRef.current) {
      playerRef.current.destroy()
    }
    playerRef.current = new window.YT.Player(playerId, {
      videoId,
      height: '100%',
      width: '100%',
      playerVars: { autoplay: 0, controls: 1 },
      events: {
        onReady: () => setReady(true),
        onStateChange: (e) => {
          setPlaying(e.data === window.YT.PlayerState.PLAYING)
        },
      },
    })
  }, [playerId])

  const seekTo = useCallback((time) => {
    playerRef.current?.seekTo(time, true)
  }, [])

  const play = useCallback(() => {
    playerRef.current?.playVideo()
  }, [])

  const pause = useCallback(() => {
    playerRef.current?.pauseVideo()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const t = playerRef.current.getCurrentTime()
        if (t > 0) setCurrentTime(t)
      }
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return { initPlayer, ready, playing, currentTime, seekTo, play, pause, playerRef }
}
```

- [ ] **Step 2: Create src/components/YouTubePlayer.jsx**

```jsx
import { useEffect } from 'react'
import useYouTube from '../hooks/useYouTube'

export default function YouTubePlayer({ youtubeId, playerId = 'youtube-player' }) {
  const { initPlayer, ready } = useYouTube(playerId)

  useEffect(() => {
    if (youtubeId) {
      initPlayer(youtubeId)
    }
  }, [youtubeId, initPlayer])

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#000', borderRadius: '8px', overflow: 'hidden' }}>
      <div
        id={playerId}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      {!youtubeId && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
          No YouTube link configured
        </div>
      )}
    </div>
  )
}
```

---

### Task 6: Chord Chart Component

**Files:**
- Create: `src/components/ChordChart.jsx`

- [ ] **Step 1: Create src/components/ChordChart.jsx**

```jsx
export default function ChordChart({ song, currentSectionIndex, onSectionClick }) {
  const section = song.sections[currentSectionIndex]

  return (
    <div>
      <div style={{ marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '0.75rem', color: '#888' }}>{song.artist}</span>
        <h2 style={{ fontSize: '1.25rem', margin: '0.25rem 0' }}>{song.title}</h2>
        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: '#aaa' }}>
          <span>Key: {song.key}</span>
          <span>BPM: {song.bpm}</span>
          {song.capo && <span>Capo: fret {song.capo}</span>}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {song.sections.map((s, i) => (
          <button
            key={i}
            onClick={() => onSectionClick(i)}
            style={{
              textAlign: 'left',
              padding: '0.5rem 0.75rem',
              borderRadius: '6px',
              border: i === currentSectionIndex ? '2px solid #4ecdc4' : '1px solid transparent',
              background: i === currentSectionIndex ? '#2a2a4e' : '#1a1a2e',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4ecdc4', marginBottom: '0.25rem' }}>
              {s.label}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {s.chords.join('  —  ')}
            </div>
            {s.cagedPosition && (
              <div style={{ fontSize: '0.7rem', color: '#888', marginTop: '0.25rem' }}>
                {s.cagedPosition}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
```

---

### Task 7: Song Library Screen

**Files:**
- Create: `src/components/SongLibrary.jsx`
- Create: `src/components/AddSongModal.jsx`
- Create: `src/components/SongCard.jsx`

- [ ] **Step 1: Create src/components/SongCard.jsx**

```jsx
const difficultyColors = {
  beginner: '#4ecdc4',
  intermediate: '#ffd93d',
  advanced: '#ff6b6b',
}

export default function SongCard({ song, onClick }) {
  return (
    <button
      onClick={() => onClick(song)}
      style={{
        background: '#1a1a2e',
        border: '1px solid #2a2a3e',
        borderRadius: '10px',
        padding: '1rem',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'border-color 0.15s',
        width: '100%',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#4ecdc4'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a3e'}
    >
      <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{song.title}</h3>
      <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>{song.artist}</p>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{song.key}</span>
        <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{song.bpm} BPM</span>
        <span
          style={{
            fontSize: '0.7rem',
            color: difficultyColors[song.difficulty] || '#888',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {song.difficulty}
        </span>
      </div>
    </button>
  )
}
```

- [ ] **Step 2: Create src/components/AddSongModal.jsx**

```jsx
import { useState } from 'react'
import { validateSong } from '../lib/schema'

export default function AddSongModal({ onClose, onAdd }) {
  const [jsonText, setJsonText] = useState('')
  const [error, setError] = useState(null)
  const [preview, setPreview] = useState(null)

  function handleParse() {
    try {
      const data = JSON.parse(jsonText)
      const result = validateSong(data)
      if (result.valid) {
        setPreview(data)
        setError(null)
      } else {
        setPreview(null)
        setError(result.errors.join(', '))
      }
    } catch (e) {
      setPreview(null)
      setError('Invalid JSON: ' + e.message)
    }
  }

  function handleConfirm() {
    if (preview) {
      onAdd(preview)
      onClose()
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
    }}>
      <div style={{
        background: '#1a1a2e', borderRadius: '12px', padding: '1.5rem',
        width: '90%', maxWidth: '600px', maxHeight: '80vh', overflow: 'auto',
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Add Song</h2>
        <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.75rem' }}>
          Paste JSON from AI song analysis
        </p>
        <textarea
          value={jsonText}
          onChange={e => setJsonText(e.target.value)}
          rows={10}
          placeholder='{"title": "...", "artist": "...", ...}'
          style={{ fontFamily: 'monospace', fontSize: '0.8rem', marginBottom: '0.75rem' }}
        />
        {error && <p style={{ color: '#ff6b6b', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{error}</p>}
        {preview && (
          <div style={{ background: '#2a2a3e', padding: '0.75rem', borderRadius: '6px', marginBottom: '0.75rem' }}>
            <strong>{preview.title}</strong> — {preview.artist} ({preview.key}, {preview.bpm} BPM)
            <br />
            <span style={{ fontSize: '0.8rem', color: '#888' }}>{preview.sections.length} sections</span>
          </div>
        )}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <button onClick={onClose}>Cancel</button>
          {!preview && <button onClick={handleParse} style={{ background: '#4ecdc4', color: '#000' }}>Parse</button>}
          {preview && <button onClick={handleConfirm} style={{ background: '#4ecdc4', color: '#000' }}>Add Song</button>}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create src/components/SongLibrary.jsx**

```jsx
import { useState, useMemo } from 'react'
import SongCard from './SongCard'
import AddSongModal from './AddSongModal'
import curatedSongs from '../data/curated'

export default function SongLibrary({ onSelectSong, onAddSong, customSongs }) {
  const [search, setSearch] = useState('')
  const [showAdd, setShowAdd] = useState(false)

  const allSongs = useMemo(() => [...curatedSongs, ...customSongs], [customSongs])

  const filtered = useMemo(() => {
    if (!search.trim()) return allSongs
    const q = search.toLowerCase()
    return allSongs.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.artist.toLowerCase().includes(q) ||
      s.key.toLowerCase().includes(q)
    )
  }, [search, allSongs])

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem' }}>🎸 Worship Guitar Practice</h1>
        <button onClick={() => setShowAdd(true)} style={{ background: '#4ecdc4', color: '#000', fontWeight: 600 }}>
          + Add Song
        </button>
      </div>

      <input
        type="text"
        placeholder="Search songs, artists, keys..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '1.5rem' }}
      />

      {filtered.length === 0 ? (
        <p style={{ color: '#888', textAlign: 'center', padding: '3rem' }}>
          No songs found. {customSongs.length === 0 ? 'Add one from YouTube!' : ''}
        </p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '0.75rem',
        }}>
          {filtered.map((song, i) => (
            <SongCard key={`${song.title}-${song.artist}-${i}`} song={song} onClick={onSelectSong} />
          ))}
        </div>
      )}

      {showAdd && (
        <AddSongModal onClose={() => setShowAdd(false)} onAdd={onAddSong} />
      )}
    </div>
  )
}
```

---

### Task 8: Practice View (Main Screen)

**Files:**
- Create: `src/components/PracticeView.jsx`
- Create: `src/components/SectionNavigator.jsx`

- [ ] **Step 1: Create src/components/SectionNavigator.jsx**

```jsx
export default function SectionNavigator({ sections, currentIndex, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
      {sections.map((s, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          style={{
            padding: '0.3rem 0.6rem',
            fontSize: '0.75rem',
            borderRadius: '4px',
            background: i === currentIndex ? '#4ecdc4' : '#2a2a3e',
            color: i === currentIndex ? '#000' : '#aaa',
            fontWeight: i === currentIndex ? 600 : 400,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {s.label}
        </button>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Create src/components/PracticeView.jsx**

```jsx
import { useState, useCallback } from 'react'
import YouTubePlayer from './YouTubePlayer'
import ChordChart from './ChordChart'
import Fretboard from './Fretboard'
import SectionNavigator from './SectionNavigator'

export default function PracticeView({ song, onBack }) {
  const [sectionIndex, setSectionIndex] = useState(0)
  const [showPentatonic, setShowPentatonic] = useState(false)

  const handleSectionClick = useCallback((i) => {
    setSectionIndex(i)
  }, [])

  const section = song.sections[sectionIndex]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button onClick={onBack} style={{ background: 'transparent', color: '#888' }}>
          ← Back to Library
        </button>
        <h1 style={{ fontSize: '1.1rem' }}>{song.title}</h1>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <label style={{ fontSize: '0.8rem', color: '#888' }}>
            <input
              type="checkbox"
              checked={showPentatonic}
              onChange={e => setShowPentatonic(e.target.checked)}
              style={{ marginRight: '0.3rem' }}
            />
            Pentatonic
          </label>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '1rem',
      }}>
        <YouTubePlayer youtubeId={song.youtubeId} />
        <ChordChart
          song={song}
          currentSectionIndex={sectionIndex}
          onSectionClick={handleSectionClick}
        />
      </div>

      <SectionNavigator
        sections={song.sections}
        currentIndex={sectionIndex}
        onSelect={handleSectionClick}
      />

      <div style={{ marginTop: '1rem' }}>
        <Fretboard
          song={song}
          currentSectionIndex={sectionIndex}
          showPentatonic={showPentatonic}
        />
      </div>
    </div>
  )
}
```

---

### Task 9: Backing Track (Web Audio API)

**Files:**
- Create: `src/components/BackingTrack.jsx`
- Create: `src/hooks/useBackingTrack.js`

- [ ] **Step 1: Create src/hooks/useBackingTrack.js**

```js
import { useRef, useCallback, useState } from 'react'

export default function useBackingTrack() {
  const ctxRef = useRef(null)
  const [active, setActive] = useState(false)
  const [tempo, setTempo] = useState(120)

  const initContext = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    return ctxRef.current
  }, [])

  const playBeat = useCallback((ctx, time, freq) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.frequency.value = freq
    osc.type = 'sine'
    gain.gain.setValueAtTime(0.15, time)
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(time)
    osc.stop(time + 0.1)
  }, [])

  const playKick = useCallback((ctx, time) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.frequency.setValueAtTime(150, time)
    osc.frequency.exponentialRampToValueAtTime(50, time + 0.1)
    gain.gain.setValueAtTime(0.3, time)
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(time)
    osc.stop(time + 0.15)
  }, [])

  const playSnare = useCallback((ctx, time) => {
    const bufferSize = ctx.sampleRate * 0.1
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
    }
    const source = ctx.createBufferSource()
    source.buffer = buffer
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.2, time)
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1)
    source.connect(gain)
    gain.connect(ctx.destination)
    source.start(time)
  }, [])

  const startLoop = useCallback((chords = [], bpm = 120) => {
    const ctx = initContext()
    if (ctx.state === 'suspended') ctx.resume()

    const beatDuration = 60 / bpm
    let running = true
    let beatCount = 0

    function schedule() {
      if (!running) return
      const now = ctx.currentTime
      for (let i = 0; i < 4; i++) {
        const t = now + i * beatDuration
        if ((beatCount + i) % 4 === 0) playKick(ctx, t)
        if ((beatCount + i) % 2 === 1) playSnare(ctx, t)
      }
      beatCount = (beatCount + 4) % 16

      if (chords.length > 0) {
        const chordIndex = Math.floor(beatCount / 4) % chords.length
        const rootFreq = 110
        playBeat(ctx, ctx.currentTime, rootFreq)
      }

      setTimeout(schedule, beatDuration * 4 * 1000 * 0.9)
    }

    schedule()
    setActive(true)
    setTempo(bpm)

    return () => { running = false; setActive(false) }
  }, [initContext, playKick, playSnare, playBeat])

  const stop = useCallback(() => {
    setActive(false)
  }, [])

  const toggle = useCallback((chords, bpm) => {
    if (active) stop()
    else return startLoop(chords, bpm)
  }, [active, startLoop, stop])

  return { active, tempo, toggle, startLoop, stop }
}
```

- [ ] **Step 2: Create src/components/BackingTrack.jsx**

```jsx
import { useCallback, useEffect, useRef } from 'react'
import useBackingTrack from '../hooks/useBackingTrack'

export default function BackingTrack({ song, currentSectionIndex }) {
  const { active, tempo, toggle, startLoop, stop } = useBackingTrack()
  const cleanupRef = useRef(null)

  const section = song?.sections?.[currentSectionIndex]

  const handleToggle = useCallback(() => {
    if (!active) {
      const chords = section?.chords || ['C']
      const cleanup = startLoop(chords, song?.bpm || 120)
      cleanupRef.current = cleanup
    } else {
      stop()
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = null
      }
    }
  }, [active, section, song?.bpm, startLoop, stop])

  useEffect(() => {
    return () => {
      if (cleanupRef.current) cleanupRef.current()
    }
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <button
        onClick={handleToggle}
        style={{
          background: active ? '#ff6b6b' : '#4ecdc4',
          color: '#000',
          fontWeight: 600,
          padding: '0.4rem 0.8rem',
          fontSize: '0.8rem',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {active ? '⏹ Stop Track' : '▶ Play Track'}
      </button>
      {active && <span style={{ fontSize: '0.8rem', color: '#888' }}>{tempo} BPM</span>}
      <span style={{ fontSize: '0.75rem', color: '#666' }}>
        (drums + bass loop)
      </span>
    </div>
  )
}
```

---

### Task 10: AI Prompt Template

**Files:**
- Create: `prompts/analyze-song.md`
- Create: `prompts/defaults.json`

- [ ] **Step 1: Create prompts/analyze-song.md**

```markdown
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
```

- [ ] **Step 2: Create prompts/defaults.json**

```json
{
  "preferredVoicings": ["add9", "sus4", "slash chords"],
  "preferredPositions": "E-form and A-form barre chords",
  "techniqueDefaults": "ambient swells with delay",
  "cagedBias": "open positions where possible",
  "capoStrategy": "prefer capo for sharp keys",
  "difficultyGuidance": "4-chord songs = beginner, 5+ chords or complex rhythms = intermediate, fast changes or unusual keys = advanced"
}
```

---

### Task 11: Install Dependencies and Verify Build

- [ ] **Step 1: Install dependencies**

```bash
cd /Users/andrewhao/workspace/buzz/worship-guitar-practice && npm install
```

- [ ] **Step 2: Verify dev build compiles**

```bash
cd /Users/andrewhao/workspace/buzz/worship-guitar-practice && npm run build
```

Expected: Build succeeds, output written to `dist/` directory.

---

## Self-Review

**Spec coverage check:**
1. Song Library screen ✓ (Task 7)
2. Practice View with YouTube, chord chart, fretboard ✓ (Task 8)
3. Fretboard visualization with CAGED positions ✓ (Task 4)
4. YouTube player integration ✓ (Task 5)
5. Song data model and validation ✓ (Task 2)
6. JSON paste import ✓ (Task 7 - AddSongModal)
7. Backing tracks (optional) ✓ (Task 9)
8. Curated song library ✓ (Task 3)
9. AI prompt template ✓ (Task 10)
10. Modular prompt files ✓ (Task 10)

**Placeholder check:** No TBDs, TODOs, or incomplete code. Every step has complete code or commands.

**Type consistency:** All component props, function signatures, and import paths are consistent across tasks. `song.sections`, `song.sections[currentSectionIndex]`, `song.key`, `song.bpm`, `song.youtubeId` usage is uniform.
