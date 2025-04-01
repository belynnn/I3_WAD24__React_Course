import TodoItem from "../TodoItemComponent/TodoItemComponent.jsx"

const TodoList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <>
      {/* Si la longueur de la liste des tâches est strictement égale à 0, afficher "Aucune tâche", si non, afficher la liste des tâches */}
      {tasks.length === 0 ? <p>Aucune tâche</p> : tasks.map(task => (
        <TodoItem key={task.id} task={task} toggleComplete={toggleComplete} removeTask={removeTask} />
      ))}
    </>
  )
}

export default TodoList