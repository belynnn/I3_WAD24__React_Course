import TitleComponent from "../../Components/TitleComponent/TitleComponent.jsx";
import ConditionnalComponent from "../../Components/Demo02-Conditionnal/ConditionnalComponent/ConditionnalComponent.jsx";

function Demo1Page() {

  return (
    <>
      <TitleComponent title={"Démo bonus 1"}/>

      <ConditionnalComponent param={"information"}/>
      <ConditionnalComponent param={"valeur"}/>
      <ConditionnalComponent/>
    </>
  )
}

export  default Demo1Page;