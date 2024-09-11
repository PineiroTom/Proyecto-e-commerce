import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";


function App (){
  return (
    <div>
        <Navbar/>
        <ItemListContainer greeting="Hola bichito"/>
    </div>
  )
}

export default App;