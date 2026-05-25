import { useEffect, useRef, useState, useCallback } from 'react'

let apiLoaded = false
let loadPromise = null

function loadYouTubeAPI() {
  if (apiLoaded) return Promise.resolve()
  if (loadPromise) return loadPromise
  loadPromise = new Promise((resolve) => {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    tag.onload = () => {
      window.onYouTubeIframeAPIReady = () => {
        apiLoaded = true
        resolve()
      }
    }
    document.body.appendChild(tag)
  })
  return loadPromise
}

export default function useYouTube(playerId) {
  const playerRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const initPlayer = useCallback(async (videoId) => {
    await loadYouTubeAPI()
    if (playerRef.current) {
      playerRef.current.destroy()
    }
    playerRef.current = new window.YT.Player(playerId, {
      videoId,
      height: '100%',
      width: '100%',
      playerVars: { autoplay: 0, controls: 1 },
      events: {
        onReady: () => setReady(true),
        onStateChange: (e) => {
          setPlaying(e.data === window.YT.PlayerState.PLAYING)
        },
      },
    })
  }, [playerId])

  const seekTo = useCallback((time) => {
    playerRef.current?.seekTo(time, true)
  }, [])

  const play = useCallback(() => {
    playerRef.current?.playVideo()
  }, [])

  const pause = useCallback(() => {
    playerRef.current?.pauseVideo()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const t = playerRef.current.getCurrentTime()
        if (t > 0) setCurrentTime(t)
      }
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return { initPlayer, ready, playing, currentTime, seekTo, play, pause, playerRef }
}
