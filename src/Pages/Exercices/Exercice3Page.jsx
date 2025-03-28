import TitleComponent from "../../Components/TitleComponent/TitleComponent.jsx"
import CountComponent from "../../Components/Exo03-CréerUnCompteur/CountComponent/CountComponent.jsx";

function Exercice3Page() {
  return (
    <>
      <TitleComponent title="Exercise 3 - Utiliser le State" />
      <h2>Créer un compteur</h2>

      <CountComponent incrementValue={1} />
    </>
  )
}

export  default Exercice3Page