import ProtectedRoute from '../components/ProtectedRoute';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { role } = useRouter().query;

  if (!role) {
    return (
      <ProtectedRoute roles={['admin','colaborador','cliente']}>
        <div className="flex items-center justify-center h-screen">
          Cargando dashboard…
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute roles={['admin','colaborador','cliente']}>
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
