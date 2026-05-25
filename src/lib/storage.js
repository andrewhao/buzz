const STORAGE_KEY = 'worship-guitar-songs'

export function loadSongs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('Failed to load songs:', e)
    return []
  }
}

export function saveSongs(songs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(songs))
  } catch (e) {
    console.error('Failed to save songs:', e)
  }
}
