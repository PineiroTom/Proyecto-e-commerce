import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
//import { products } from '../../../productsMocks'
import { useParams } from "react-router-dom";
import { CartContext } from '../../../context/CartContext';
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection,doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const { addToCart, getTotalQuantityById } = useContext(CartContext);
    
    const {id} = useParams()

    let totalItems = getTotalQuantityById(id);

    useEffect(() => {
        let productsCollection = collection(db, "Producto");
        let refDoc = doc(productsCollection, id);
        getDoc(refDoc).then((res) => {
            setItem({ ...res.data(), id: res.id });
        });
    }, [id]);

    const onAdd = (quantity) => {
        let productoCarrito = {...item, quantity};
        addToCart(productoCarrito);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Se agrego al carrito",
            showConfirmButton: false,
            timer: 1500,
        })

    };

    return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems}/>
}

export default ItemDetailContainer