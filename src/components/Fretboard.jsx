import { useMemo } from 'react'
import { getPositionNotes, STRING_COUNT, FRET_COUNT } from '../lib/fretboard'
import { MODES } from '../lib/notes'

const FRET_SPACING = 55
const STRING_SPACING = 28
const PADDING = 35
const DOT_RADIUS = 9

export default function Fretboard({ song, currentSectionIndex, showPentatonic }) {
  const section = song?.sections?.[currentSectionIndex]
  const key = song?.key || 'C'

  const scaleIntervals = showPentatonic ? [0, 2, 4, 7, 9] : MODES.Ionian
  const notes = useMemo(() => getPositionNotes(key, scaleIntervals), [key, showPentatonic])

  const width = PADDING * 2 + FRET_COUNT * FRET_SPACING
  const height = PADDING * 2 + (STRING_COUNT - 1) * STRING_SPACING

  function fretX(f) {
    return PADDING + f * FRET_SPACING
  }

  function noteX(f) {
    return fretX(f) + FRET_SPACING / 2
  }

  function stringY(s) {
    return PADDING + s * STRING_SPACING
  }

  const fretMarkers = [3, 5, 7, 9, 12, 15]

  return (
    <div style={{ overflowX: 'auto' }}>
      <svg width={width} height={height} style={{ display: 'block' }}>
        <rect width={width} height={height} fill="#1a1a2e" rx="8" />

        {Array.from({ length: FRET_COUNT + 1 }, (_, f) => (
          <line
            key={`fret-${f}`}
            x1={fretX(f)}
            y1={PADDING - 5}
            x2={fretX(f)}
            y2={height - PADDING + 5}
            stroke={f === 0 ? '#e0e0e0' : '#3a3a52'}
            strokeWidth={f === 0 ? 3 : 1}
          />
        ))}

        {Array.from({ length: STRING_COUNT }, (_, s) => (
          <line
            key={`string-${s}`}
            x1={fretX(0)}
            y1={stringY(s)}
            x2={fretX(FRET_COUNT)}
            y2={stringY(s)}
            stroke="#555"
            strokeWidth={2.2 - s * 0.2}
          />
        ))}

        {fretMarkers.map(f => (
          <circle
            key={`marker-${f}`}
            cx={noteX(f)}
            cy={f === 12 ? stringY(1.5) : height / 2}
            r={f === 12 ? 4 : 5}
            fill="#555"
          />
        ))}
        {fretMarkers.filter(f => f === 12).map(f => (
          <circle
            key={`marker-${f}-2`}
            cx={noteX(f)}
            cy={stringY(3.5)}
            r={4}
            fill="#555"
          />
        ))}

        {fretMarkers.map(f => (
          <text
            key={`label-${f}`}
            x={noteX(f)}
            y={PADDING - 12}
            textAnchor="middle"
            fill="#888"
            fontSize="10"
          >
            {f}
          </text>
        ))}

        {notes.filter(p => p.inScale).map((p, i) => (
          <g key={`note-${p.string}-${p.fret}`}>
            <circle
              cx={noteX(p.fret)}
              cy={stringY(p.string)}
              r={DOT_RADIUS + 2}
              fill={p.isRoot ? '#ff6b6b' : '#4ecdc4'}
              opacity={0.9}
            />
            <text
              x={noteX(p.fret)}
              y={stringY(p.string) + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              fontSize={p.nashville.length > 2 ? '7' : '8'}
              fontWeight={p.isRoot ? '700' : '400'}
              style={{ pointerEvents: 'none' }}
            >
              {p.nashville}
            </text>
          </g>
        ))}
      </svg>

      {section && (
        <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#888' }}>
          <strong>CAGED:</strong> {section.cagedPosition || 'N/A'}
          {section.voicingNotes && <span> &middot; {section.voicingNotes}</span>}
          {section.technique && <span> &middot; {section.technique}</span>}
        </div>
      )}
    </div>
  )
}
