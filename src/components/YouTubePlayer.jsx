import { useEffect } from 'react'
import useYouTube from '../hooks/useYouTube'

export default function YouTubePlayer({ youtubeId, playerId = 'youtube-player' }) {
  const { initPlayer, ready } = useYouTube(playerId)

  useEffect(() => {
    if (youtubeId) {
      initPlayer(youtubeId)
    }
  }, [youtubeId, initPlayer])

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#000', borderRadius: '8px', overflow: 'hidden' }}>
      <div
        id={playerId}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      {!youtubeId && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
          No YouTube link configured
        </div>
      )}
    </div>
  )
}
