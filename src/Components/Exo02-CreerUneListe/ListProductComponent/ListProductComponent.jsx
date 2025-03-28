import styles from "./ListProductComponent.module.css"

function ListProductComponent() {
  // Liste de produits pré-définie
  const Products = [
    { name: "Ordinateur Portable", description: "Puissant et léger", price: 1299.99, onSale: true },
    { name: "Casque Audio", description: "", price: 199.49, onSale: false },
    { name: "Smartphone", description: "Écran AMOLED 120Hz", price: 899.99, onSale: true },
    { name: "Tablette", description: "", price: 499.99, onSale: false },
  ]

  const listProducts = Products.map((product, index) => {
    return (
      <li key={index} className={styles.productItem}>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productDescription}>{product.description}</p>
        {product.onSale
          ?
          <p className={"salePrice"}>🔥 {product.price.toFixed(2)} €</p>
          :
          <p>{product.price.toFixed(2)} €</p>
        }
      </li>
    )
  })

  return (
    <>
      <h2>🛒 Liste des produits</h2>
      <ul className={styles.productListContainer}>
        {listProducts}
      </ul>
    </>
  )
}

export default ListProductComponent