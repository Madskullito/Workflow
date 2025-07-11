import { useState } from 'react';
import { createTask } from '../services/taskService';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [collaboratorId, setCollaboratorId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title, description, collaboratorId });
    setTitle('');
    setDescription('');
    setCollaboratorId('');
    alert('Tarea creada y enviada por WhatsApp');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl mb-2">Crear y Asignar Tarea</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="UID del Colaborador"
        value={collaboratorId}
        onChange={(e) => setCollaboratorId(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Crear y Asignar
      </button>
    </form>
  );
}
