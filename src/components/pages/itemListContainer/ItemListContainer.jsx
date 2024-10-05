import CounterContainer from "../../common/counter/CounterContainer";
import ProductCard from "../../common/productCard/ProductCard"
import { useState } from "react";
import PruebaGrid from "../../common/pruebaGrid/PruebaGrid";

const ItemListContainer = ({greeting}) => {
  let precio = 1200;
  const [productos, setProductos] = useState(null);
  return (
    <div>
        <h1>Listado de productos</h1>
        <div>
          <ProductCard titulo="CocaCola" precio={precio} />
          <ProductCard titulo="Sprite" precio={1000} />
        </div>
      {/* Aca pinto el greeting */}
        <CounterContainer/>
        <PruebaGrid/>
        <h4>{greeting}</h4>
    </div>
  )
}

export default ItemListContainer