import "./productCard.css";

const ProductCard = ({titulo,cant}) => {
  return (
    <div>
        <h2>{titulo}</h2>
        <h3>{cant}</h3>
        <button>ver detalle</button>
    </div>
  )
}

export default ProductCard