import { useState, useCallback } from 'react'
import YouTubePlayer from './YouTubePlayer'
import ChordChart from './ChordChart'
import Fretboard from './Fretboard'
import SectionNavigator from './SectionNavigator'
import BackingTrack from './BackingTrack'

export default function PracticeView({ song, onBack }) {
  const [sectionIndex, setSectionIndex] = useState(0)
  const [showPentatonic, setShowPentatonic] = useState(false)

  const handleSectionClick = useCallback((i) => {
    setSectionIndex(i)
  }, [])

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button onClick={onBack} style={{ background: 'transparent', color: '#888' }}>
          ← Back to Library
        </button>
        <h1 style={{ fontSize: '1.1rem' }}>{song.title}</h1>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
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
        <YouTubePlayer youtubeId={song.youtubeId} />
        <ChordChart
          song={song}
          currentSectionIndex={sectionIndex}
          onSectionClick={handleSectionClick}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <SectionNavigator
          sections={song.sections}
          currentIndex={sectionIndex}
          onSelect={handleSectionClick}
        />
        <BackingTrack song={song} currentSectionIndex={sectionIndex} />
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
