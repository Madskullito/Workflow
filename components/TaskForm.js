import { useState } from 'react';
import { createTask } from '../services/taskService';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [collab, setCollab] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    await createTask({ title, description: desc, collaboratorId: collab });
    setTitle(''); setDesc(''); setCollab('');
    alert('Tarea creada y enviada');
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl mb-2">Crear tarea</h2>
      <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 mb-2 border rounded" required/>
      <textarea placeholder="Descripción" value={desc} onChange={e => setDesc(e.target.value)} className="w-full p-2 mb-2 border rounded" required/>
      <input placeholder="UID colaborador" value={collab} onChange={e => setCollab(e.target.value)} className="w-full p-2 mb-2 border rounded" required/>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Enviar</button>
    </form>
