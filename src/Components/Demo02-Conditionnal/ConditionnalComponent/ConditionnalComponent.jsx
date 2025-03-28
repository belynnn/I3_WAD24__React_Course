function ConditionnalComponent({param = "valeur"}) {
  // Condition sans le paramètre
  if(!param) {
    return(
      <h1>Sans param {param}</h1>
    )
  }
  // Condition avec le paramètre
  else{
    return(
      <>
        {/*ternaire pour l'affichage du code */}
        {param === "information" ? <h1>vrai</h1> : <h1>faux</h1>}
      </>
    )
  }
}

export default ConditionnalComponent