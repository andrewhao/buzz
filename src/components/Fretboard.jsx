import React, { useMemo } from 'react'
import { getPositionNotes, STRING_COUNT, FRET_COUNT } from '../lib/fretboard'
import { noteToIndex, MODES } from '../lib/notes'

const FRET_SPACING = 45
const STRING_SPACING = 20
const PADDING = 30
const DOT_RADIUS = 7

export default function Fretboard({ song, currentSectionIndex, showPentatonic }) {
  const section = song?.sections?.[currentSectionIndex]
  const key = song?.key || 'C'

  const scaleIntervals = showPentatonic ? [0, 2, 4, 7, 9] : MODES.Ionian
  const notes = useMemo(() => getPositionNotes(key, scaleIntervals), [key, showPentatonic])

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
            strokeWidth={2.2 - s * 0.2}
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

        {notes.filter(p => p.inScale).map((p, i) => (
          <circle
            key={`note-${p.string}-${p.fret}`}
            cx={noteX(p.fret)}
            cy={noteY(p.string)}
            r={DOT_RADIUS}
            fill={p.isRoot ? '#ff6b6b' : '#4ecdc4'}
            opacity={0.85}
          />
        ))}

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
