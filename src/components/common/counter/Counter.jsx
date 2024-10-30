import { Button } from "@mui/material";

const Counter = ({ contador, sumar, restar, onAdd}) => {
    return (
        <div>
            <Button onClick={sumar}>
                Sumar
            </Button>
            <h1>{contador}</h1>
            <Button onClick={restar}>
                Restar
            </Button>
            <Button variant= "outlined" onClick={() => onAdd(contador)}>
                agregar al carrito
            </Button>
        </div>
    );
};

export default Counter;
