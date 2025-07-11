import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('');
  const { login, loginWithGoogle } = useAuth(); const router = useRouter();

  const handle = async e => { e.preventDefault(); try { await login(email,password); router.push('/dashboard?role=cliente'); } catch(err){console.error(err);} };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handle} className="p-6 bg-white rounded shadow w-96">
        <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
        <input required type="email"placeholder="Email"value={email}onChange={e=>setEmail(e.target.value)}className="w-full p-2 mb-4 border rounded"/>
        <input required type="password"placeholder="Contraseña"value={password}onChange={e=>setPassword(e.target.value)}className="w-full p-2 mb-4 border rounded"/>
        <button type="submit"className="w-full p-2 bg-blue-500 text-white rounded mb-2">Entrar</button>
        <button type="button" onClick={loginWithGoogle} className="w-full p-2 bg-red-500 text-white rounded">Continuar con Google</button>
      </form>
    </div>
