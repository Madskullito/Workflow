import { useEffect, useState } from 'react';
import { getAllTasks, getTasksByCollaborator } from '../services/taskService';
import { useAuth } from '../context/AuthContext';

export default function TaskList({ role }) {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const data = role === 'admin' ? await getAllTasks() : await getTasksByCollaborator(user.uid);
      setTasks(data);
    })();
  }, [role, user]);

  return (
    <div>
      <h2 className="text-xl mb-2">Tareas</h2>
      <ul className="space-y-2">
        {tasks.map(t => (
          <li key={t.id} className="p-2 border rounded">
            <strong>{t.title}</strong><p>{t.description}</p><small>Asignado: {t.collaboratorId}</small>
          </li>
        ))}
      </ul>
    </div>
