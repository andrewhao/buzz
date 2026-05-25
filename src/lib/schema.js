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
      const label = s.label || `Section ${i + 1}`
      if (!s.label) errors.push(`Section ${i + 1}: missing label`)
      if (typeof s.startTime !== 'number') errors.push(`Section "${label}": missing startTime`)
      if (!Array.isArray(s.lyrics)) {
        errors.push(`Section "${label}": missing lyrics array`)
      } else {
        s.lyrics.forEach((line, j) => {
          if (typeof line !== 'object' || line === null) {
            errors.push(`Section "${label}" line ${j + 1}: must be an object`)
          } else {
            if (typeof line.t !== 'number') errors.push(`Section "${label}" line ${j + 1}: missing or invalid t`)
            if (typeof line.text !== 'string') errors.push(`Section "${label}" line ${j + 1}: missing or invalid text`)
          }
        })
      }
    })
  }
  return { valid: errors.length === 0, errors }
}
