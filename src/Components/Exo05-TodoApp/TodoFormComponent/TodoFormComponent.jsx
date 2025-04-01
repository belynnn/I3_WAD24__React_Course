import {useState} from "react";

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(0)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) {
      setError('Le titre de la tâche est obligatoire')

      return
    }
    setError('')
    addTask({ id: Date.now(), title, description, priority, completed: false })
    setTitle('')
    setDescription('')
    setPriority('Normal')

  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title of the task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ borderColor: error ? "red" : "" }}
          className="input"
        />

        <label htmlFor="title">Description</label>
        <textarea
          placeholder="Description (optionnal)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
        />

        <label htmlFor="title">Priority</label>
        <select className="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Basse">Basse</option>
          <option value="Low">Low</option>
          <option value="Urgent">Urgent</option>
        </select>

        <button type='submit'>Add task</button>
      </form>
    </>
  )
}

export default TodoForm