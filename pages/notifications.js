import { useState } from 'react'

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'Tu as reçu un vote pour ta photo !',
      read: false,
    },
    {
      id: 2,
      message: '🎉 Tu as remporté le titre de Mister Paris – Avril 2025 !',
      read: false,
    },
    {
      id: 3,
      message: 'Quelqu’un a ajouté ta photo à ses favoris ❤️',
      read: true,
    },
  ])

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">🔔 Notifications</h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 rounded shadow flex justify-between items-center ${
              notif.read ? 'bg-white' : 'bg-pink-50'
            }`}
          >
            <p>{notif.message}</p>
            {!notif.read && (
              <button
                onClick={() => markAsRead(notif.id)}
                className="text-sm text-blue-600 underline"
              >
                Marquer comme lu
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

