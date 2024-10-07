
import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
import { categories } from "./categories";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container-nav">
        {/* {logo el nobmre de la empresa} */}
        <Link to="/"><h3>CocaCola</h3></Link>
        {/* {al medio un listado de categorias clickeables} */}
        <ul>
          {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
          ))}
            {/* <li>Gaseosas</li>
            <li>Bebidas energeticas</li>
            <li>Agua saborizada</li> */}
        </ul>
        {/* {widget del carrito} */}
        <Link to="/cart">
          <CartWidget/>
        </Link>
    </div>
  )
}

export default Navbar