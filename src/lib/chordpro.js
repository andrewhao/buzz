import ChordSheetJS from 'chordsheetjs'
import { Note } from 'tonal'

const parser = new ChordSheetJS.ChordProParser()

const INTERVAL_TO_DEGREE = {
  0: '1', 1: 'b2', 2: '2', 3: 'b3', 4: '3', 5: '4',
  6: 'b5', 7: '5', 8: 'b6', 9: '6', 10: 'b7', 11: '7',
}

export function chordToNashville(chord, key) {
  if (!chord || !key) return chord || ''
  const rootMatch = chord.replace(/\/.*$/, '').match(/^[A-G][#b]?/)
  if (!rootMatch) return chord
  const rootChroma = Note.chroma(rootMatch[0])
  const keyChroma = Note.chroma(key)
  if (rootChroma == null || keyChroma == null) return chord
  const interval = (rootChroma - keyChroma + 12) % 12
  return INTERVAL_TO_DEGREE[interval] || chord
}

export function getSectionProgression(section) {
  if (!section?.lyrics) return []
  const out = []
  for (const line of section.lyrics) {
    for (const pair of parseChordProLine(line.text)) {
      if (pair.chord && pair.chord !== out[out.length - 1]) {
        out.push(pair.chord)
      }
    }
  }
  return out
}

export function parseChordProLine(text) {
  if (!text) return []
  const song = parser.parse(text)
  const line = song.lines[0]
  if (!line) return []
  return line.items
    .filter(item => item.chords != null || item.lyrics != null)
    .map(item => ({
      chord: item.chords || '',
      lyric: item.lyrics || '',
    }))
}

export function extractSectionChords(section) {
  if (!section?.lyrics) return []
  const seen = new Set()
  const out = []
  for (const line of section.lyrics) {
    for (const pair of parseChordProLine(line.text)) {
      if (pair.chord && !seen.has(pair.chord)) {
        seen.add(pair.chord)
        out.push(pair.chord)
      }
    }
  }
  return out
}

export function findActiveLineIndex(lyrics, currentTime) {
  if (!Array.isArray(lyrics) || lyrics.length === 0) return -1
  let active = -1
  for (let i = 0; i < lyrics.length; i++) {
    if (lyrics[i].t != null && lyrics[i].t <= currentTime) active = i
    else break
  }
  return active
}
