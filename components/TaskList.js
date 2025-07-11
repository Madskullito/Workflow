import { useEffect, useState } from 'react';
import { getAllTasks, getTasksByCollaborator } from '../services/taskService';
import { useAuth } from '../context/AuthContext';

export default function TaskList({ role }) {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const data =
        role === 'admin'
          ? await getAllTasks()
          : await getTasksByCollaborator(user.uid);
      setTasks(data);
    })();
  }, [role, user]);

  return (
    <div>
      <h2 className="text-xl mb-2">Listado de Tareas</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="p-2 border rounded">
            <h3 className="font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">Asignado a: {task.collaboratorId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

