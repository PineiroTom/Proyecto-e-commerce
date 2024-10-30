import { useState, useEffect } from "react";
import { products } from "../../../productsMocks";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import {collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); 

  const { categoryName } = useParams(); 

  useEffect(() => {
    let productsCollection = collection(db, "Producto")

    let consulta = productsCollection;

    if (categoryName) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", categoryName)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta).then((res) => {
      let array = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });

      setItems(array);
    });
  }, [categoryName]);
  
  return <ItemList items={items} />;
};

export default ItemListContainer;


// const filteredProducts = products.filter(
//   (product) => product.category === categoryName
// );
// const getProducts = new Promise((res, rej) => {
//   let isLogued = true;
//   if (isLogued) {
//     res(categoryName ? filteredProducts : products);
//   } else {
//     rej({ message: "algo salio mal" });
//   }
// });

// getProducts
//   .then((response) => {
//     setTimeout(() => {
//       setItems(response);
//     }, 1000);
//   })
//   .catch((error) => {
//     ("entro en el catch ", error);
//   });