const TodoItem = ({ task, toggleComplete, removeTask}) => {
  return (
    <div
      className={`task ${task.completed ? "completed" : ""}`}
      style={{
        borderLeft: task.priority === "Urgent" ? "4px solid red" :
          task.priority === "Normal" ? "4px solid blue" :
          task.priority === "Low" ? "4px solid darkblue" : ""
      }}
    >
      <h4>{task.title} {task.priority === "Urgent" && <span style={{ color: "red" }}>(Urgent)</span>}</h4>
      <p>{task.description}</p>

      <button onClick={() => toggleComplete(task.id)} disabled={task.completed}>
        {task.completed ? "Terminated" : "Terminate"}
      </button>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  )
}

export default TodoItem