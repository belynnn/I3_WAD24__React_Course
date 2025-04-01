import { useState } from "react"
import InputFieldComponent from "../InputFieldComponent/InputFieldComponent.jsx"
import OperationSelectorComponent from "../OperationSelectorComponent/OperationSelectorComponent.jsx"
import ResultDisplayComponent from "../ResultDisplayComponent/ResultDisplayComponent.jsx"
import ResetCountComponent from "../../Exo03-CréerUnCompteur/ResetCountComponent/ResetCountComponent.jsx"
import styles from "./NumberCruncherComponent.module.css"

const NumberCruncherComponent = () => {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operation, setOperation] = useState("+")
  const [result, setResult] = useState("0")
  const resetForm = () => {
      setNum1("")
      setNum2("")
      setOperation("+")
      setResult("0")
  }

  const calculateResult = () => {
    if (num1 === "" || num2 === "") return
    let n1 = parseFloat(num1)
    let n2 = parseFloat(num2)
    let res = 0

    switch (operation) {
      case "+":
        res = n1 + n2
        break
      case "-":
        res = n1 - n2
        break
      case "*":
        res = n1 * n2
        break
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Erreur"
        break;
      default:
        res = "Erreur"
    }

    setResult(res)
  }

  return (
    <div>
        <div>
          {/* Indiquer le nombre 1 */}
          <InputFieldComponent value={num1} onChange={setNum1} placeholder="Nombre 1 " />
          {/* Sélectionner l'opérateur */}
          <OperationSelectorComponent operation={operation} onChange={(e) => setOperation(e.target.value)} />
          {/* Indiquer le nombre 2 */}
          <InputFieldComponent value={num2} onChange={setNum2} placeholder=" Nombre 2 " />
        </div>

        <div>
          {/* Afficher le résultat du calcul */}
          <ResultDisplayComponent result={result} />
        </div>

        <div>
          {/* Lancer le calcul */}
          <button className={styles.button} onClick={calculateResult}>Calculer</button>
          {/* Réinitialiser le formulaire */}
          <ResetCountComponent onReset={resetForm} />
        </div>
    </div>
  )
}

export default NumberCruncherComponent