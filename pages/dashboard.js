// pages/dashboard.js
import ProtectedRoute from '../components/ProtectedRoute';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, role, loading } = useAuth();

  // Mientras carga o no hay usuario, se muestra loader
  if (loading || !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        Cargando…
      </div>
    );
  }

  // Ya tenemos el role real: 'admin' | 'colaborador' | 'cliente'
  return (
    <ProtectedRoute roles={['admin','colaborador','cliente']}>
      <div className="p-6">
        <h1 className="text-2xl mb-4">
          Dashboard – {role.charAt(0).toUpperCase() + role.slice(1)}
        </h1>
        {/* Solo admin ve el formulario de asignar tareas */}
        {role === 'admin' && <TaskForm />}
        {/* Admin ve todas, colaboradores y clientes ven solo sus tareas */}
        <TaskList role={role} />
      </div>
    </ProtectedRoute>
  );
}
