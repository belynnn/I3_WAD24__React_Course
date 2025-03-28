import {useState} from "react"
import AddCountComponent from "../AddCountComponent/AddCountComponent.jsx"
import ResetCountComponent from "../ResetCountComponent/ResetCountComponent.jsx"

function CountComponent({ incrementValue = 1 }) {
  const [state, setState] = useState(0)

  {/* Modifier l'état en incrémentant de 1 via le bouton */}
  const increment = () => setState(state + incrementValue)
  {/* Modifier l'état en réinitialisant l'état via le bouton reset */}
  const reset = () => setState(0)

  return (
    <>
      {/* Affichage de l'état */}
      <p>{state}</p>

      {/* Bouton pour incrémenter de 1 */}
      <AddCountComponent incrementValue={incrementValue} onIncrement={increment} />
      {/* Bouton pour reset */}
      {state !== 0 && <ResetCountComponent onReset={reset} />}
    </>
  )
}

export default CountComponent