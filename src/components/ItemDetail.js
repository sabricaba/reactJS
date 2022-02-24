import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import { CartContext } from "./CartContext";

const ItemDetail = (props) => {
    const [itemCount, setItemCount] = useState(0)
    const test = useContext(CartContext);
    
    const onAddAlert = (counter) => {
        alert(`Usted agrego ${counter} unidades al carrito`);
        setItemCount (counter);
        test.addItem (props, counter);
    };
    
    return (
        <div>
            <h1>{props.nombre}</h1>
            <p>Precio: {props.precio}</p>
            <p>Descripción: {props.descripcion}</p>
            <img src={props.imagen}></img>
            {
            itemCount === 0
            ? <ItemCount stock = {10} initial = {itemCount} onAdd = {onAddAlert} />
            : <Link to={"/cart"}><CartButton /></Link>
            }
        </div>
    )
};

export default ItemDetail;