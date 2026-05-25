export default function SectionNavigator({ sections, currentIndex, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
      {sections.map((s, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          style={{
            padding: '0.3rem 0.6rem',
            fontSize: '0.75rem',
            borderRadius: '4px',
            background: i === currentIndex ? '#4ecdc4' : '#2a2a3e',
            color: i === currentIndex ? '#000' : '#aaa',
            fontWeight: i === currentIndex ? 600 : 400,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {s.label}
        </button>
      ))}
    </div>
  )
}
