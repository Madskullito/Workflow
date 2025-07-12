export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className="border p-4 mb-2 rounded">
          <h3 className="font-semibold">{task.title}</h3>
          <p>{task.description}</p>
          <p className="text-sm text-gray-500">
            Asignado a: {task.collaboratorId}
          </p>
        </li>
      ))}
    </ul>
  )
}
