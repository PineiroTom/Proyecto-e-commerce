import React from 'react'
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
    
    const limpiarConAlert = () => {
        Swal.fire({
            title: "Seguro queres limpiar el carrito?",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Si, limpiar",
            denyButtonText: `No, dejar como estaba`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                clearCart();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Se limpio el carrito",
                });
            } else if (result.isDenied) {
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: "El carrito no fue limpiado",
                });
            }
        });
    }

    return (
        <div style={{padding: "50px"}}>
        <h1>Carriten</h1>
        {
            cart.map((product) => {
                return <div key={product.id}>
                    <h2>Titulo {product.title}</h2>
                    <h3>Precio {product.price}</h3>
                    <h3>Cantidad {product.quantity}</h3>
                    <h3>Subtotal : {product.price * product.quantity}</h3>
                    <Button variant="contained" onClick={() => deleteProductById(product.id)}>
                        Eliminar
                    </Button>
                </div>
            })
        }

        {total > 0 && (
            <Button sx={{ marginTop: 20 }} variant="contained" onClick={limpiarConAlert}>
            Limpiar carrito
            </Button>
        )}

        <Link to="/checkout">
            <Button sx={{ marginTop: 20 }} variant="contained">
                Finalizar compra
            </Button>
        </Link>

        {total > 0 ? (
            <h2>El total a pagar es : $ {total}</h2>
        ) : (
            <h2>No tenes productos en el carrito</h2>
        )}
    </div>
    );
};

export default Cart