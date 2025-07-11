import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';

export default function Profile() {
  const { user, role } = useAuth();
  const [phone, setPhone] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    // TODO: fetch de Firestore si tienes perfil guardado
    // Ejemplo:
    // const docRef = doc(db,'users',user.uid,'profile','meta');
    // const snap = await getDoc(docRef);
    // if (snap.exists()) { setPhone(snap.data().phone); setPhotoURL(snap.data().photoURL); }
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    // TODO: guardar en Firestore bajo users/{uid}/profile/meta
    alert('Perfil actualizado');
  };

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mi Perfil</h1>
      <form onSubmit={handleSave} className="space-y-6">
        <div className="flex flex-col items-center">
          <img
            src={photoURL || `https://ui-avatars.com/api/?name=${user.email}&size=128`}
            alt="Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          <input
            type="url"
            placeholder="URL de tu foto"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Número de WhatsApp</label>
          <div className="flex items-center border rounded">
            <span className="px-3 text-gray-500">📞</span>
            <input
              type="tel"
              placeholder="+52XXXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => window.location.href = '/dashboard'}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-secondary text-white rounded hover:bg-green-700"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}
