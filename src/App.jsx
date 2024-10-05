import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { useState } from "react";


function App (){
  const [montarComponente, setMontarComponente] = useState(false);
  const montarYdesmontar = () => {
    setMontarComponente(!montarComponente);
  };
  const [saludo, setSaludo] = useState("hola");

  const cambiarSaludo = () => {
    if (saludo === "hola") {
      setSaludo("chau");
    } else {
      setSaludo("hola");
    }
  };
  return (
    <div>
        <Navbar/>
        {montarComponente ? <ItemListContainer greeting={saludo} /> : null}
        <button onClick={montarYdesmontar}>Montar/desmontar</button>
        <button onClick={cambiarSaludo}>Cambiar saludo</button>
    </div>
  )
}

export default App;