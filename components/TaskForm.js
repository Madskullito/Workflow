import { useState } from 'react';

export default function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [collaboratorId, setCollaboratorId] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, description, collaboratorId });
    setTitle('');
    setDescription('');
    setCollaboratorId('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <input
        className="w-full p-2 mb-2 border rounded"
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <textarea
        className="w-full p-2 mb-2 border rounded"
        placeholder="Descripción"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />

      <input
        className="w-full p-2 mb-4 border rounded"
        type="text"
        placeholder="UID del Colaborador"
        value={collaboratorId}
        onChange={e => setCollaboratorId(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Crear y Asignar
      </button>
    </form>
  );
}

