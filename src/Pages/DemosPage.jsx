import { Link } from "react-router-dom"
import TitleComponent from "../Components/TitleComponent/TitleComponent.jsx"

function DemosPage() {
  const exercises = [
    { path: "/demos/demo-1", label: "Démo 1 : Conditionnel" },
    { path: "/demos/demo-2", label: "Démo 2 : Liste" },
    { path: "/demos/demo-3", label: "Démo 3 : State" },
  ]

  return (
    <>
      <TitleComponent title={"Liste des démonstrations"}/>

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

export default DemosPage