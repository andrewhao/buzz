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
