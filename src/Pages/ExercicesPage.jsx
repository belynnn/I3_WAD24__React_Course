import { Link } from "react-router-dom"
import TitleComponent from "../Components/TitleComponent/TitleComponent.jsx"
import './Exercices/Exercices.css'

function ExercicesPage() {
  const exercises = [
    { path: "/exercises/exercice-1", label: "Exercice 1 : Mon premier composant" },
    { path: "/exercises/exercice-2", label: "Exercice 2 : Créer une liste de produits" },
    { path: "/exercises/exercice-3", label: "Exercice 3 : Créer un compteur" },
    { path: "/exercises/exercice-4", label: "Exercice 4 : Créer une calculatrice" },
  ]

  return (
    <>
      <TitleComponent title={"Liste des exercices"}/>

      <section className={"exo-list-container"}>
        <ul className={'exo-list'}>
          {exercises.map((exo, index) => (
            <li className={'exo-list-items'} key={index}>
              <Link to={exo.path} className={'exo-list-item-link'}>{exo.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default ExercicesPage