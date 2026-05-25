import { useState, useCallback } from 'react'
import SongLibrary from './components/SongLibrary'
import PracticeView from './components/PracticeView'
import { loadSongs, saveSongs } from './lib/storage'

export default function App() {
  const [screen, setScreen] = useState('library')
  const [currentSong, setCurrentSong] = useState(null)
  const [customSongs, setCustomSongs] = useState(loadSongs)

  const handleSelectSong = useCallback((song) => {
    setCurrentSong(song)
    setScreen('practice')
  }, [])

  const handleAddSong = useCallback((song) => {
    setCustomSongs((prev) => {
      const updated = [...prev, song]
      saveSongs(updated)
      return updated
    })
  }, [])

  const handleBack = useCallback(() => {
    setScreen('library')
    setCurrentSong(null)
  }, [])

  if (screen === 'practice' && currentSong) {
    return <PracticeView song={currentSong} onBack={handleBack} />
  }

  return (
    <SongLibrary
      onSelectSong={handleSelectSong}
      onAddSong={handleAddSong}
      customSongs={customSongs}
    />
  )
}
