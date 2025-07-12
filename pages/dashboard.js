// pages/dashboard.js

import { useAuth } from '../context/AuthContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Dashboard() {
  const { user, role, loading } = useAuth();

  // 1) Mientras se verifica el estado de autenticación
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Cargando…
      </div>
    );
  }

  // 2) Si no hay usuario logueado, redirigimos al login
  if (!user) {
    // Esto va a ejecutarse solo en cliente
    if (typeof window !== 'undefined') window.location.href = '/auth/login';
    return null;
  }

  // 3) Cuando ya hay usuario pero aún no se ha leído el rol
  if (!role) {
    return (
      <div className="flex items-center justify-center h-screen">
        Cargando tu rol…
      </div>
    );
  }

  // 4) Si el rol no es ninguno de los permitidos
  if (!['admin', 'colaborador', 'cliente'].includes(role)) {
    return (
      <div className="flex items-center justify-center h-screen">
        Rol desconocido: {role}
      </div>
    );
  }

  // 5) Render final, ya con usuario y rol
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">
        Dashboard – {role.charAt(0).toUpperCase() + role.slice(1)}
      </h1>
      {role === 'admin' && <TaskForm />}
      <TaskList role={role} />
    </div>
  );
}
