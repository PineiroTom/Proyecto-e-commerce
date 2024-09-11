
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-nav">
        {/* {logo el nobmre de la empresa} */}
        <h3>CocaCola</h3>
        {/* {al medio un listado de categorias clickeables} */}
        <ul>
            <li>Gaseosas</li>
            <li>Bebidas energeticas</li>
            <li>Agua saborizada</li>
        </ul>
        {/* {widget del carrito} */}
        <CartWidget/>
    </div>
  )
}

export default Navbar