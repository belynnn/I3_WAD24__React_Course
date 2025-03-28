import WelcomeComponent from "../../Components/Exo01-CreerUnComposant/WelcomeComponent/WelcomeComponent.jsx"
import TitleComponent from "../../Components/TitleComponent/TitleComponent.jsx"

function Exercice1Page() {
  return (
    <>
      <TitleComponent title={"Exercice 1 - Créer un composant"}/>

      <WelcomeComponent nom={"Lancelot"} age={8} />
      <WelcomeComponent nom={"Xena"} age={8} />
      <WelcomeComponent nom={"Calynn"} age={6} />
      <WelcomeComponent nom={"Poupou"} />
      <WelcomeComponent age={5}/>
    </>
  )
}

export  default Exercice1Page