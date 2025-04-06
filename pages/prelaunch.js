import { useEffect, useState } from 'react'

export default function Prelaunch() {
  const [countdown, setCountdown] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const launchDate = new Date('2025-04-20T12:00:00') // 🔁 modifie si besoin
    const interval = setInterval(() => {
      const now = new Date()
      const diff = launchDate - now
      if (diff <= 0) {
        setCountdown('C’est le moment !')
        return
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setCountdown(`${days}j ${hours}h ${minutes}m ${seconds}s`)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Email enregistré :', email)
    setSubscribed(true)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="text-4xl font-bold text-primary mb-2">Pick Battle</h1>
      <p className="text-lg text-gray-700 mb-6">La compétition photo débarque dans ta ville</p>
      <div className="text-2xl font-semibold mb-6 text-dark">
        Lancement dans : <span className="text-primary">{countdown}</span>
      </div>

      {!subscribed ? (
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Ton email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded-lg w-64"
          />
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-pink-600">
            Reste informé
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold mt-4">Tu es inscrit. Prépare-toi !</p>
      )}

      <p className="text-xs text-gray-400 mt-10">© 2025 Pick Battle</p>
    </div>
  )
}


