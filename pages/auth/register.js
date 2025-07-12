// pages/auth/register.js
import { useState } from "react";
import { useRouter } from "next/router";
import { registerWithEmail } from "../../services/authService";

export default function RegisterPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const router                  = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerWithEmail(email, password);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error al registrar usuario: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl mb-6 text-center">Crear Cuenta</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-6 border rounded"
          required
        />
        <button type="submit" className="w-full py-2 bg-green-500 text-white rounded">
          Crear cuenta
        </button>
      </form>
    </div>
  );
}
