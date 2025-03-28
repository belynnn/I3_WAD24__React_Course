import "./CollectionComponent.css"

function CollectionComponent() {
  // Liste des noms pour le traitement
  const names = ["John" , "Doe" , "Jane"]

  // Mapping pour chaque élément on renvoie quelque chose
  const listItems = names.map(
    (name, index) => {
      return (
          <li key={index}>{name}</li>
      )
    })

  // Résultat de la function
  return (
    <>
      <h3>Liste des noms</h3>
      <ul>{listItems}</ul>
    </>
  )
}

export default CollectionComponent;