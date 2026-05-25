import { noteAtFret, noteToIndex, intervalToNashville } from './notes'

export const FRET_COUNT = 16
export const STRING_COUNT = 6

export const CAGED_SHAPES = {
  'E-form': { rootString: 5, frets: [0, 2, 2, 1, 0, 0] },
  'A-form': { rootString: 4, frets: [0, 0, 2, 2, 2, 0] },
  'C-form': { rootString: 2, frets: [0, 3, 2, 0, 1, 0] },
  'D-form': { rootString: 3, frets: [0, 0, 0, 2, 3, 2] },
  'G-form': { rootString: 5, frets: [3, 2, 0, 0, 0, 3] },
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
  const intervalMap = Object.fromEntries(scaleIntervals.map(i => [(rootIdx + i) % 12, i]))
  return getFretboardNotes().map(p => {
    const noteIdx = noteToIndex(p.note)
    const interval = intervalMap[noteIdx]
    return {
      ...p,
      inScale: scaleNoteIndices.has(noteIdx),
      isRoot: noteIdx === rootIdx,
      nashville: interval != null ? intervalToNashville(interval, scaleIntervals) : '',
    }
  })
}

export function getCagedPositionNotes(rootNote, formName) {
  const shape = CAGED_SHAPES[formName]
  if (!shape) return []
  const rootIdx = noteToIndex(rootNote)
  const positions = []
  for (let s = 0; s < STRING_COUNT; s++) {
    const fret = shape.frets[s]
    if (fret > 0) {
      const note = noteAtFret(s, fret)
      positions.push({ string: s, fret, note, isRoot: note === rootNote })
    }
  }
  return positions
}
