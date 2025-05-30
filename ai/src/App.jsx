import { useState } from 'react'

export default function App() {
  const [prompt,  setPrompt]  = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading]  = useState(false)
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
  const MODEL   = 'gemini-2.0-flash'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setLoading(true)
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`
      const payload = {
        contents: [
          { parts: [{ text: prompt }] }
        ]
      }

      const res  = await fetch(url, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })
      const data = await res.json()
      console.log('raw Gemini response:', data)

      if (!res.ok) {
        setResponse(`Error ${res.status}: ${data.error?.message || res.statusText}`)
      } else if (data.candidates?.length > 0) {
        // Aquí extraemos y concatenamos todo .parts[].text
        const candidate = data.candidates[0].content
        const text = candidate.parts.map(p => p.text).join('')
        setResponse(text)
      } else {
        setResponse(JSON.stringify(data, null, 2))
      }
    } catch (err) {
      console.error(err)
      setResponse(`Network or CORS error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
  <div className="container">
    <h1>Gemini Prompt Console</h1>
    <form onSubmit={handleSubmit}>
      <textarea
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Escribe tu prompt..."
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
    {response && (
      <div className="response-box">
        <h2>Respuesta:</h2>
        <pre>{response}</pre>
      </div>
    )}
  </div>
)

}
