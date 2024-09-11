import ProductCard from "../../common/productCard/ProductCard"

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h1>Lista de productos</h1>
      <div>
        <ProductCard titulo="CocaCola" cant={2.25} />
        <ProductCard titulo="Fanta" cant={1.5}/>
      </div>
      <h4>{greeting}</h4>
    </div>
  )
}

export default ItemListContainer