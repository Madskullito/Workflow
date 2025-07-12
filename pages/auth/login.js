import { useState } from 'react'
import { login, loginWithGoogle } from '../../services/authService'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl mb-4">Iniciar Sesión</h1>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded mb-2"
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={loginWithGoogle}
          className="w-full p-2 bg-red-500 text-white rounded"
        >
          Continuar con Google
        </button>
      </form>
    </div>
  )
}

