import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function IndexRedirect() {
  const router = useRouter()

  useEffect(() => {
    const launchDate = new Date('2025-04-20T12:00:00') // Change si besoin
    const now = new Date()
    if (now < launchDate) {
      router.replace('/prelaunch') // Redirige vers landing avant la date
    } else {
      router.replace('/home') // Redirige vers l'accueil après lancement
    }
  }, [])

  return null
}

