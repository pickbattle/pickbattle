import { useEffect, useState } from 'react'

export default function Home() {
  const [cityFeed, setCityFeed] = useState([
    {
      id: '1',
      username: 'Camille_75',
      imageUrl: '/default1.jpg',
      city: 'Paris',
      score: 4.6,
    },
    {
      id: '2',
      username: 'Zak_lyon',
      imageUrl: '/default2.jpg',
      city: 'Lyon',
      score: 4.9,
    },
  ])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">🏙️ Concours par ville</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cityFeed.map((photo) => (
          <div key={photo.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={photo.imageUrl} alt="Photo de profil" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{photo.username}</h2>
              <p className="text-sm text-muted">Ville : {photo.city}</p>
              <p className="mt-2 text-yellow-500 font-bold">⭐ Score : {photo.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

