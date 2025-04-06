import { useState } from 'react'

export default function Leaderboard() {
  const [filter, setFilter] = useState({
    city: '',
    gender: '',
    month: '2025-04',
  })

  const [ranking, setRanking] = useState([
    { id: 1, username: 'Lina_ly', city: 'Lyon', score: 4.95, gender: 'Miss' },
    { id: 2, username: 'Zak_93', city: 'Paris', score: 4.91, gender: 'Mister' },
    { id: 3, username: 'Cam_13', city: 'Marseille', score: 4.88, gender: 'Miss' },
  ])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">🏆 Classement</h1>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <select
          className="border p-2 rounded"
          value={filter.city}
          onChange={(e) => setFilter({ ...filter, city: e.target.value })}
        >
          <option value="">Toutes les villes</option>
          <option value="Paris">Paris</option>
          <option value="Lyon">Lyon</option>
          <option value="Marseille">Marseille</option>
        </select>

        <select
          className="border p-2 rounded"
          value={filter.gender}
          onChange={(e) => setFilter({ ...filter, gender: e.target.value })}
        >
          <option value="">Tous genres</option>
          <option value="Miss">Miss</option>
          <option value="Mister">Mister</option>
        </select>

        <input
          type="month"
          className="border p-2 rounded"
          value={filter.month}
          onChange={(e) => setFilter({ ...filter, month: e.target.value })}
        />
      </div>

      <div className="bg-white shadow rounded-lg p-4 max-w-3xl mx-auto">
        {ranking.map((user, index) => (
          <div key={user.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
            <div>
              <p className="font-semibold">
                #{index + 1} {user.username}
              </p>
              <p className="text-sm text-muted">{user.city} • {user.gender}</p>
            </div>
            <p className="text-yellow-500 font-bold text-lg">⭐ {user.score}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

