import { useState } from 'react'
import { validateSong } from '../lib/schema'

export default function AddSongModal({ onClose, onAdd }) {
  const [jsonText, setJsonText] = useState('')
  const [error, setError] = useState(null)
  const [preview, setPreview] = useState(null)

  function handleParse() {
    try {
      const data = JSON.parse(jsonText)
      const result = validateSong(data)
      if (result.valid) {
        setPreview(data)
        setError(null)
      } else {
        setPreview(null)
        setError(result.errors.join(', '))
      }
    } catch (e) {
      setPreview(null)
      setError('Invalid JSON: ' + e.message)
    }
  }

  function handleConfirm() {
    if (preview) {
      onAdd(preview)
      onClose()
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
    }}>
      <div style={{
        background: '#1a1a2e', borderRadius: '12px', padding: '1.5rem',
        width: '90%', maxWidth: '600px', maxHeight: '80vh', overflow: 'auto',
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Add Song</h2>
        <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.75rem' }}>
          Paste JSON from AI song analysis
        </p>
        <textarea
          value={jsonText}
          onChange={e => setJsonText(e.target.value)}
          rows={10}
          placeholder='{"title": "...", "artist": "...", ...}'
          style={{ fontFamily: 'monospace', fontSize: '0.8rem', marginBottom: '0.75rem' }}
        />
        {error && <p style={{ color: '#ff6b6b', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{error}</p>}
        {preview && (
          <div style={{ background: '#2a2a3e', padding: '0.75rem', borderRadius: '6px', marginBottom: '0.75rem' }}>
            <strong>{preview.title}</strong> — {preview.artist} ({preview.key}, {preview.bpm} BPM)
            <br />
            <span style={{ fontSize: '0.8rem', color: '#888' }}>{preview.sections.length} sections</span>
          </div>
        )}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <button onClick={onClose}>Cancel</button>
          {!preview && <button onClick={handleParse} style={{ background: '#4ecdc4', color: '#000' }}>Parse</button>}
          {preview && <button onClick={handleConfirm} style={{ background: '#4ecdc4', color: '#000' }}>Add Song</button>}
        </div>
      </div>
    </div>
  )
}
