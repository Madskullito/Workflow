import { useState } from 'react'
import { addTask } from '../services/taskService'

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [collab, setCollab] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await addTask({ title, description, collaboratorId: collab })
    onAdd()
    setTitle('')
    setDescription('')
    setCollab('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        placeholder="UID del Colaborador"
        value={collab}
        onChange={e => setCollab(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Crear y Asignar
      </button>
    </form>
  )
}
