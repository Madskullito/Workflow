// pages/profile.js
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { app } from "../lib/firebase"; // Ajusta la ruta si la tienes en otro sitio

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const [whatsapp, setWhatsapp] = useState("");
  const db = getFirestore(app);

  useEffect(() => {
    if (!loading && user) {
      // lee el número de whatsapp del doc user/{uid}
      getDoc(doc(db, "users", user.uid))
        .then(snap => {
          if (snap.exists()) {
            setWhatsapp(snap.data().whatsapp || "");
          }
        });
    }
  }, [user, loading, db]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "users", user.uid), { whatsapp });
      alert("Número de WhatsApp actualizado");
    } catch (err) {
      console.error(err);
      alert("Error al guardar: " + err.message);
    }
  };

  if (loading) return <p>Cargando perfil…</p>;
  if (!user)   return <p>No estás autenticado.</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h1 className="text-2xl mb-4">Mi Perfil</h1>
      <p className="mb-2"><strong>Email:</strong> {user.email}</p>
      <form onSubmit={handleSave}>
        <label className="block mb-2">
          Número de WhatsApp para notificaciones:
        </label>
        <input
          type="text"
          placeholder="+52 1 55 1234 5678"
          value={whatsapp}
          onChange={e => setWhatsapp(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}
