import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

export default function Register() {
  const [email,setEmail]=useState('');const [password,setPassword]=useState('');
  const { signup } = useAuth(); const router=useRouter();
  const handle=async e=>{e.preventDefault();try{await signup(email,password);router.push('/dashboard?role=cliente');}catch(err){console.error(err);}};

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handle} className="p-6 bg-white rounded shadow w-96">
        <h2 className="text-2xl mb-4">Registro</h2>
        <input required type="email"placeholder="Email"value={email}onChange={e=>setEmail(e.target.value)}className="w-full p-2 mb-4 border rounded"/>
        <input required type="password"placeholder="Contraseña"value={password}onChange={e=>setPassword(e.target.value)}className="w-full p-2 mb-4 border rounded"/>
        <button type="submit"className="w-full p-2 bg-green-500 text-white rounded">Crear cuenta</button>
      </form>
    </div>
