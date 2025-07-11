// pages/dashboard.js

import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Dashboard() {
  const { role } = useRouter().query;

  // Evita prerender sin el parámetro `role`
  if (!role) {
    return (
      <ProtectedRoute roles={['admin', 'colaborador', 'cliente']}>
        <div className="flex items-center justify-center h-screen">
          Cargando dashboard…
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute roles={['admin', 'colaborador', 'cliente']}>
      <div className="p-6">
        <h1 className="text-2xl mb-4">
          Dashboard – {role.charAt(0).toUpperCase() + role.slice(1)}
        </h1>
        {role === 'admin' && <TaskForm />}
        <TaskList role={role} />
      </div>
    </ProtectedRoute>
  );
}
