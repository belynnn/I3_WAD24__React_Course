import TitleComponent from "../../Components/TitleComponent/TitleComponent.jsx"
import NumberCruncherComponent from "../../Components/Exo04-CréerUneCalculatrice/NumberCruncherComponent/NumberCruncherComponent.jsx"
import "../../Components/Exo04-CréerUneCalculatrice/NumberCruncherComponent/NumberCruncherComponent.module.css"

function Exercice4Page() {
  return (
    <>
      <TitleComponent title="Exercise 4 - Manipuler des formulaires" />
      <h2>Créer une calculatrice</h2>
      <h3>Number Cruncher</h3>

      <NumberCruncherComponent />
    </>
  )
}

export  default Exercice4Page