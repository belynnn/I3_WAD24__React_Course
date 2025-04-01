import {useState} from "react";
import TitleComponent from "../../Components/TitleComponent/TitleComponent.jsx"
import TodoForm from "../../Components/Exo05-TodoApp/TodoFormComponent/TodoFormComponent.jsx"
import TodoList from "../../Components/Exo05-TodoApp/TodoListComponent/TodoListComponent.jsx"
import "../../Components/Exo04-CréerUneCalculatrice/NumberCruncherComponent/NumberCruncherComponent.module.css"
import '../../Pages/Exercices/Exercices.css'
import TodoSection from "../../Components/Exo05-TodoApp/TodoSectionComponent.jsx";

function Exercice5Page() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState("all")

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "urgent") return task.priority === "Urgent"
    if (filter === "completed") return task.completed
    if (filter === "pending") return !task.completed
    return true
  })

  return (
    <>
      <TitleComponent title="Exercise 5 - Interaction entre composant" />
      <h2>Créer une application « Todo list »</h2>

      {/*<TodoSection />*/}

      <div className={"container"}>
        <h2>✅ TodoApp</h2>
        <TodoForm addTask={addTask} />  {/* ✅ Vérifie que addTask est bien passé ici */}
        <div>
          <button onClick={() => setFilter("all")}>Toutes</button>
          <button onClick={() => setFilter("urgent")}>Urgentes</button>
          <button onClick={() => setFilter("pending")}>En cours</button>
          <button onClick={() => setFilter("completed")}>Terminées</button>
        </div>
        <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} removeTask={removeTask} />
      </div>
    </>
  )
}

export  default Exercice5Page