const difficultyColors = {
  beginner: '#4ecdc4',
  intermediate: '#ffd93d',
  advanced: '#ff6b6b',
}

export default function SongCard({ song, onClick }) {
  return (
    <button
      onClick={() => onClick(song)}
      style={{
        background: '#1a1a2e',
        border: '1px solid #2a2a3e',
        borderRadius: '10px',
        padding: '1rem',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'border-color 0.15s',
        width: '100%',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#4ecdc4'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a3e'}
    >
      <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{song.title}</h3>
      <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>{song.artist}</p>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{song.key}</span>
        <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{song.bpm} BPM</span>
        <span
          style={{
            fontSize: '0.7rem',
            color: difficultyColors[song.difficulty] || '#888',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {song.difficulty}
        </span>
      </div>
    </button>
  )
}
