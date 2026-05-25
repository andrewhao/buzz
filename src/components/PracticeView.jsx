import { useState, useCallback, useEffect, useRef } from 'react'
import YouTubePlayer from './YouTubePlayer'
import ChordChart from './ChordChart'
import Fretboard from './Fretboard'
import SectionNavigator from './SectionNavigator'
import BackingTrack from './BackingTrack'

export default function PracticeView({ song, onBack }) {
  const [sectionIndex, setSectionIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [showPentatonic, setShowPentatonic] = useState(false)
  const [showNashville, setShowNashville] = useState(false)
  const seekRef = useRef(null)

  const handleSeekReady = useCallback((seekFn) => {
    seekRef.current = seekFn
  }, [])

  const handleTimeUpdate = useCallback((time) => {
    setCurrentTime(time)
    const sections = song.sections
    for (let i = sections.length - 1; i >= 0; i--) {
      if (time >= sections[i].startTime) {
        setSectionIndex(i)
        return
      }
    }
    setSectionIndex(0)
  }, [song.sections])

  const handleSectionClick = useCallback((i) => {
    setSectionIndex(i)
    if (seekRef.current && song.sections[i]?.startTime != null) {
      seekRef.current(song.sections[i].startTime)
    }
  }, [song.sections])

  const section = song.sections[sectionIndex]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button onClick={onBack} style={{ background: 'transparent', color: '#888' }}>
          ← Back to Library
        </button>
        <h1 style={{ fontSize: '1.1rem' }}>{song.title}</h1>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <label style={{ fontSize: '0.8rem', color: '#888', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <input
              type="checkbox"
              checked={showNashville}
              onChange={e => setShowNashville(e.target.checked)}
            />
            Nashville
          </label>
          <label style={{ fontSize: '0.8rem', color: '#888', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <input
              type="checkbox"
              checked={showPentatonic}
              onChange={e => setShowPentatonic(e.target.checked)}
            />
            Pentatonic
          </label>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '1rem',
      }}>
        <YouTubePlayer
          youtubeId={song.youtubeId}
          onSeekReady={handleSeekReady}
          onTimeUpdate={handleTimeUpdate}
        />
        <ChordChart
          song={song}
          currentSectionIndex={sectionIndex}
          currentTime={currentTime}
          showNashville={showNashville}
          onSectionClick={handleSectionClick}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <SectionNavigator
          sections={song.sections}
          currentIndex={sectionIndex}
          onSelect={handleSectionClick}
        />
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {section && (
            <span style={{ fontSize: '0.75rem', color: '#888' }}>
              {formatTime(section.startTime)}
            </span>
          )}
          <BackingTrack song={song} currentSectionIndex={sectionIndex} />
        </div>
      </div>

      <div style={{ marginTop: '0.5rem' }}>
        <Fretboard
          song={song}
          currentSectionIndex={sectionIndex}
          showPentatonic={showPentatonic}
        />
      </div>
    </div>
  )
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}
