import Link from 'next/link'
import { useState } from 'react'
import { FaBell, FaHome, FaUser, FaTrophy, FaUpload } from 'react-icons/fa'

export default function Navbar() {
  const [unread, setUnread] = useState(2) // Simule les notifs non lues

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Pick Battle</h1>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/home" className="hover:text-primary flex items-center gap-1">
              <FaHome /> <span className="hidden sm:inline">Accueil</span>
            </Link>
          </li>
          <li>
            <Link href="/upload" className="hover:text-primary flex items-center gap-1">
              <FaUpload /> <span className="hidden sm:inline">Upload</span>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard" className="hover:text-primary flex items-center gap-1">
              <FaTrophy /> <span className="hidden sm:inline">Classement</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-primary flex items-center gap-1">
              <FaUser /> <span className="hidden sm:inline">Profil</span>
            </Link>
          </li>
          <li className="relative">
            <Link href="/notifications" className="hover:text-primary flex items-center gap-1">
              <FaBell />
              {unread > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
                  {unread}
                </span>
              )}
              <span className="hidden sm:inline">Notifications</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

