export default function ChordChart({ song, currentSectionIndex, onSectionClick }) {
  const section = song.sections[currentSectionIndex]

  return (
    <div>
      <div style={{ marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '0.75rem', color: '#888' }}>{song.artist}</span>
        <h2 style={{ fontSize: '1.25rem', margin: '0.25rem 0' }}>{song.title}</h2>
        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: '#aaa', flexWrap: 'wrap' }}>
          <span>Key: {song.key}</span>
          <span>BPM: {song.bpm}</span>
          {song.capo && <span>Capo: fret {song.capo}</span>}
          <span style={{ color: '#4ecdc4' }}>{section?.label}</span>
        </div>
      </div>

      <div style={{
        background: '#1a1a2e',
        borderRadius: '8px',
        border: '1px solid #2a2a3e',
        marginBottom: '0.75rem',
        padding: '0.75rem',
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {section?.chords.map((chord, i) => (
            <span key={i} style={{ color: '#4ecdc4', fontWeight: 600 }}>{chord}</span>
          ))}
        </div>
        {section?.lyrics && section.lyrics.length > 0 && (
          <div style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: '1.6', borderTop: '1px solid #2a2a3e', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
            {section.lyrics.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}
        {section?.cagedPosition && (
          <div style={{ fontSize: '0.7rem', color: '#666', marginTop: '0.5rem', borderTop: '1px solid #2a2a3e', paddingTop: '0.5rem' }}>
            {section.cagedPosition} &middot; {section.technique}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {song.sections.map((s, i) => (
          <button
            key={i}
            onClick={() => onSectionClick(i)}
            style={{
              textAlign: 'left',
              padding: '0.4rem 0.75rem',
              borderRadius: '6px',
              border: i === currentSectionIndex ? '2px solid #4ecdc4' : '1px solid transparent',
              background: i === currentSectionIndex ? '#2a2a4e' : '#1a1a2e',
              cursor: 'pointer',
              transition: 'all 0.15s',
              opacity: i <= currentSectionIndex ? 1 : 0.6,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: i === currentSectionIndex ? '#4ecdc4' : '#888' }}>
                {s.label}
              </div>
              <div style={{ fontSize: '0.65rem', color: '#555' }}>
                {formatTime(s.startTime)}
              </div>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#aaa' }}>
              {s.chords.join('  ')}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}
