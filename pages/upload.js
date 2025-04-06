import { useState } from 'react'

export default function Upload() {
  const [formData, setFormData] = useState({
    username: '',
    city: '',
    gender: '',
    image: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulation : tu pourras connecter Firebase ici plus tard
    console.log('Données soumises :', formData)
    alert('Photo envoyée !')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">📤 Poster ta candidature</h2>

        <input
          type="text"
          name="username"
          placeholder="Ton pseudo"
          className="w-full p-2 mb-3 border rounded"
          required
          onChange={handleChange}
        />

        <select name="city" required onChange={handleChange} className="w-full p-2 mb-3 border rounded">
          <option value="">Choisis ta ville</option>
          <option value="Paris">Paris</option>
          <option value="Lyon">Lyon</option>
          <option value="Marseille">Marseille</option>
        </select>

        <select name="gender" required onChange={handleChange} className="w-full p-2 mb-3 border rounded">
          <option value="">Genre</option>
          <option value="Miss">Miss</option>
          <option value="Mister">Mister</option>
        </select>

        <input
          type="file"
          name="image"
          accept="image/*"
          required
          onChange={handleChange}
          className="w-full mb-4"
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-pink-600 transition"
        >
          Envoyer ma photo
        </button>
      </form>
    </div>
  )
}


