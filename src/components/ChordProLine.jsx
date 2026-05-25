import { useMemo } from 'react'
import { parseChordProLine, chordToNashville } from '../lib/chordpro'

export default function ChordProLine({ text, active, nashville, songKey }) {
  const pairs = useMemo(() => {
    const parsed = parseChordProLine(text)
    if (!nashville) return parsed
    return parsed.map(p => ({ ...p, chord: p.chord ? chordToNashville(p.chord, songKey) : p.chord }))
  }, [text, nashville, songKey])
  const isChordOnly = pairs.length > 0 && pairs.every(p => !p.lyric.trim())

  const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: isChordOnly ? 'center' : 'flex-end',
    gap: isChordOnly ? '1.5rem' : 0,
    padding: '0.4rem 0.6rem',
    borderRadius: '6px',
    background: active ? 'rgba(78, 205, 196, 0.15)' : 'transparent',
    border: active ? '1px solid rgba(78, 205, 196, 0.5)' : '1px solid transparent',
    transition: 'background 0.1s, border-color 0.1s',
    minHeight: '2.2rem',
  }

  if (isChordOnly) {
    return (
      <div style={wrapperStyle}>
        {pairs.filter(p => p.chord).map((pair, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'monospace',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: active ? '#4ecdc4' : '#8ed7d1',
            }}
          >
            {pair.chord}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div style={wrapperStyle}>
      {pairs.map((pair, i) => (
        <span
          key={i}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            whiteSpace: 'pre',
          }}
        >
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: pair.chord ? (active ? '#4ecdc4' : '#8ed7d1') : 'transparent',
              lineHeight: 1,
              minHeight: '0.9rem',
            }}
          >
            {pair.chord || ' '}
          </span>
          <span
            style={{
              fontSize: '0.95rem',
              color: active ? '#fff' : '#bbb',
              lineHeight: 1.3,
            }}
          >
            {pair.lyric}
          </span>
        </span>
      ))}
    </div>
  )
}
