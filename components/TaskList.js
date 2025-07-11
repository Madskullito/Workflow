export default function TaskList({ tasks }) {
  if (!tasks.length) {
    return <p className="p-4 text-gray-500">No hay tareas aún.</p>;
  }

  return (
    <ul className="mt-4 space-y-3">
      {tasks.map(task => (
        <li key={task.id} className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-gray-700">{task.description}</p>
          <p className="mt-1 text-sm text-gray-500">
            Asignado a: {task.collaboratorId}
          </p>
        </li>
      ))}
    </ul>
  );
}
