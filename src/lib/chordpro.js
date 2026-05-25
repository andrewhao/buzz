import ChordSheetJS from 'chordsheetjs'

const parser = new ChordSheetJS.ChordProParser()

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
