import { useState, useEffect } from 'react'

export default function Profile() {
  const [myPhotos, setMyPhotos] = useState([
    {
      id: '1',
      imageUrl: '/default1.jpg',
      city: 'Paris',
      score: 4.8,
      title: 'Miss Paris – Mars 2025',
    },
    {
      id: '2',
      imageUrl: '/default2.jpg',
      city: 'Paris',
      score: 4.6,
      title: null,
    },
  ])

  const [favorites, setFavorites] = useState([
    {
      id: '3',
      imageUrl: '/default3.jpg',
      city: 'Lyon',
      username: 'Lina_ly',
    },
  ])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">👤 Mon Profil</h1>

      <h2 className="text-xl font-semibold mb-3">📸 Mes participations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {myPhotos.map((photo) => (
          <div key={photo.id} className="bg-white rounded shadow p-4">
            <img src={photo.imageUrl} alt="Ma photo" className="w-full h-48 object-cover mb-2 rounded-lg" />
            <p className="text-sm text-muted">Ville : {photo.city}</p>
            <p className="text-sm text-yellow-500 font-bold">⭐ Score : {photo.score}</p>
            {photo.title && <p className="mt-2 text-green-600 font-semibold">{photo.title}</p>}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-3">❤️ Mes favoris</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((fav) => (
          <div key={fav.id} className="bg-white rounded shadow p-4">
            <img src={fav.imageUrl} alt="Favori" className="w-full h-48 object-cover mb-2 rounded-lg" />
            <p className="text-sm">Utilisateur : {fav.username}</p>
            <p className="text-sm text-muted">Ville : {fav.city}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

