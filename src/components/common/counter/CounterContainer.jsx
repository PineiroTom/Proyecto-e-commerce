import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({onAdd, stock, totalItems}) => {
    const [contador, setContador] = useState(totalItems);

    const sumar = () => {
    if (contador < stock){
        setContador(contador + 1);
        } else {
            alert("No hay stock disponible");
        }
    };

    const restar = () => {
    if (contador > 1){
        setContador(contador - 1);
        } else {
            alert("No podes elegir menos de 1 item")
        }
    };

    let childProps = {
        contador,
        sumar,
        restar,
        onAdd,
    };

    return <Counter {...childProps}/>;
};

export default CounterContainer;
