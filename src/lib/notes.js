import { Note } from 'tonal'

const PITCH_CLASSES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export function noteToIndex(note) {
  const chroma = Note.chroma(note)
  return chroma != null ? chroma : -1
}

export function transpose(note, semitones) {
  const idx = noteToIndex(note)
  if (idx === -1) return note
  return PITCH_CLASSES[(idx + semitones + 12) % 12]
}

export function intervalBetween(a, b) {
  return (noteToIndex(b) - noteToIndex(a) + 12) % 12
}

export function getNotesInKey(root, scalePattern) {
  const rootIdx = noteToIndex(root)
  return scalePattern.map(half => PITCH_CLASSES[(rootIdx + half) % 12])
}

export const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11]
export const MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10]
export const MAJOR_PENTATONIC = [0, 2, 4, 7, 9]
export const MINOR_PENTATONIC = [0, 3, 5, 7, 10]

const NASHVILLE_MAJOR = ['1', '2', '3', '4', '5', '6', '7']

export function intervalToNashville(interval) {
  const degree = MAJOR_SCALE.indexOf(interval)
  if (degree === -1) return ''
  return NASHVILLE_MAJOR[degree] || ''
}

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
  return PITCH_CLASSES[(openIdx + fret) % 12]
}
