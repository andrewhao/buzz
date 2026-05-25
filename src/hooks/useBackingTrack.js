import { useRef, useCallback, useState } from 'react'

export default function useBackingTrack() {
  const ctxRef = useRef(null)
  const [active, setActive] = useState(false)
  const [tempo, setTempo] = useState(120)

  const initContext = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    return ctxRef.current
  }, [])

  const playKick = useCallback((ctx, time) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.frequency.setValueAtTime(150, time)
    osc.frequency.exponentialRampToValueAtTime(50, time + 0.1)
    gain.gain.setValueAtTime(0.3, time)
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(time)
    osc.stop(time + 0.15)
  }, [])

  const playSnare = useCallback((ctx, time) => {
    const bufferSize = ctx.sampleRate * 0.1
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
    }
    const source = ctx.createBufferSource()
    source.buffer = buffer
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.2, time)
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1)
    source.connect(gain)
    gain.connect(ctx.destination)
    source.start(time)
  }, [])

  const startLoop = useCallback((chords = [], bpm = 120) => {
    const ctx = initContext()
    if (ctx.state === 'suspended') ctx.resume()

    const beatDuration = 60 / bpm
    let running = true
    let beatCount = 0
    let timerId = null

    function schedule() {
      if (!running) return
      const now = ctx.currentTime
      for (let i = 0; i < 4; i++) {
        const t = now + i * beatDuration
        if ((beatCount + i) % 4 === 0) playKick(ctx, t)
        if ((beatCount + i) % 2 === 1) playSnare(ctx, t)
      }
      beatCount = (beatCount + 4) % 16
      timerId = setTimeout(schedule, beatDuration * 4 * 1000 * 0.9)
    }

    schedule()
    setActive(true)
    setTempo(bpm)

    return () => {
      running = false
      setActive(false)
      if (timerId) clearTimeout(timerId)
    }
  }, [initContext, playKick, playSnare])

  const stop = useCallback(() => {
    setActive(false)
  }, [])

  return { active, tempo, startLoop, stop }
}
