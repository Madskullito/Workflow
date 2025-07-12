// pages/profile.js
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { db } from '../services/firebase'
import { doc, updateDoc } from 'firebase/firestore'

export default function ProfilePage() {
  const { user, loading } = useAuth()
  const [phone, setPhone] = useState('')
  const [photo, setPhoto] = useState('')
  const [message, setMessage] = useState('')

  if (loading) return <p>Cargando tu rol…</p>
  if (!user) return <p>No estás autenticado.</p>

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref = doc(db, 'users', user.uid)
    await updateDoc(ref, { phone, photo })
    setMessage('Perfil actualizado.')
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Mi Perfil</h1>
      {message && <p className="text-green-600 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">N.º de WhatsApp</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">URL de Foto</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Guardar Perfil
        </button>
      </form>
    </div>
  )
}
