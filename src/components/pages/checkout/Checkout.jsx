import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import {collection, addDoc, updateDoc, doc} from "firebase/firestore"
import { update } from 'firebase/database';


const Checkout = () => {

    const [user, setUser] = useState({
        name: "",
        telefono: "",
        email: "",
    });

    const { cart, getTotalAmount, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let total = getTotalAmount();

        const order = {
            buyer: user,
            items: cart,
            total,
        };

        let refCollection = collection(db, "orders");
        addDoc(refCollection, order).then((res) => {
            setOrderId(res.id);
            clearCart();
        }).catch((error) => {
        }).finally(() => {
            setIsLoading(false);
        })

        order.items.forEach((elemento) => {
            updateDoc(doc(db , "Producto", elemento.id), {
                stock: elemento.stock - elemento.quantity,
            });
        });
    };

        const handleChange = (e) => {
            const { value, name } = e.target;
            setUser({ ...user, [name]: value });
        };
    
        if (isLoading) {
            return <h2>cargando....</h2>;
        }

    return (
        <div>
            {
                orderId ? (
                <h1>El numero de orden es: {orderId}</h1>
                ) : ( 
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="name" onChange={handleChange} name="name"/>
                        <input type="text" placeholder="telefono" onChange={handleChange} name="telefono"/>
                        <input type="text" placeholder="email" onChange={handleChange} name="email"/>
                        <button>Comprar</button>
                        {/* el button no utiliza type="submit" debido a que esta dentro de un form */}
                    </form>
                ) 
            }

        </div>
    );
}

export default Checkout