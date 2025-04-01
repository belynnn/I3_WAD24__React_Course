const ResultDisplayComponent = ({ result }) => {
    return (
      <>
          <label htmlFor={result}> Résultat </label>
          <input type="text" value={result} readOnly placeholder="Résultat" />
      </>
    )
}

export default ResultDisplayComponent