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
