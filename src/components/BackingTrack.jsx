import { useCallback, useEffect, useRef } from 'react'
import useBackingTrack from '../hooks/useBackingTrack'

export default function BackingTrack({ song, currentSectionIndex }) {
  const { active, tempo, startLoop, stop } = useBackingTrack()
  const cleanupRef = useRef(null)

  const section = song?.sections?.[currentSectionIndex]

  const handleToggle = useCallback(() => {
    if (!active) {
      const chords = section?.chords || ['C']
      const cleanup = startLoop(chords, song?.bpm || 120)
      cleanupRef.current = cleanup
    } else {
      stop()
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = null
      }
    }
  }, [active, section, song?.bpm, startLoop, stop])

  useEffect(() => {
    return () => {
      if (cleanupRef.current) cleanupRef.current()
    }
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <button
        onClick={handleToggle}
        style={{
          background: active ? '#ff6b6b' : '#4ecdc4',
          color: '#000',
          fontWeight: 600,
          padding: '0.4rem 0.8rem',
          fontSize: '0.8rem',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {active ? '⏹ Stop' : '▶ Drums'}
      </button>
      {active && <span style={{ fontSize: '0.8rem', color: '#888' }}>{tempo} BPM</span>}
    </div>
  )
}
