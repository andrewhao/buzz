import { useState, useMemo } from 'react'
import SongCard from './SongCard'
import AddSongModal from './AddSongModal'
import curatedSongs from '../data/curated'

export default function SongLibrary({ onSelectSong, onAddSong, customSongs }) {
  const [search, setSearch] = useState('')
  const [showAdd, setShowAdd] = useState(false)

  const allSongs = useMemo(() => [...curatedSongs, ...customSongs], [customSongs])

  const filtered = useMemo(() => {
    if (!search.trim()) return allSongs
    const q = search.toLowerCase()
    return allSongs.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.artist.toLowerCase().includes(q) ||
      s.key.toLowerCase().includes(q)
    )
  }, [search, allSongs])

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem' }}>🎸 Worship Guitar Practice</h1>
        <button onClick={() => setShowAdd(true)} style={{ background: '#4ecdc4', color: '#000', fontWeight: 600 }}>
          + Add Song
        </button>
      </div>

      <input
        type="text"
        placeholder="Search songs, artists, keys..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '1.5rem' }}
      />

      {filtered.length === 0 ? (
        <p style={{ color: '#888', textAlign: 'center', padding: '3rem' }}>
          No songs found. {customSongs.length === 0 ? 'Add one from YouTube!' : ''}
        </p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '0.75rem',
        }}>
          {filtered.map((song, i) => (
            <SongCard key={`${song.title}-${song.artist}-${i}`} song={song} onClick={onSelectSong} />
          ))}
        </div>
      )}

      {showAdd && (
        <AddSongModal onClose={() => setShowAdd(false)} onAdd={onAddSong} />
      )}
    </div>
  )
}
