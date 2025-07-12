// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">Bienvenido a Workflow Platform</h1>
      <div className="space-x-4">
        <Link href="/auth/login">
          <a className="px-4 py-2 bg-blue-500 text-white rounded">Iniciar Sesión</a>
        </Link>
        <Link href="/auth/register">
          <a className="px-4 py-2 bg-green-500 text-white rounded">Registrarse</a>
        </Link>
      </div>
    </div>
  );
}
