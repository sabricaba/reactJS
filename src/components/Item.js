import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = (props) => {
    const onAddAlert = (counter) => {
        alert(`Usted agrego ${counter} unidades al carrito`)    
    }

    console.log({props})

    return (
        <div>
            <h1>{props.nombre}</h1>
            <p>Precio: {props.precio}</p>
            <img src={props.imagen}></img>
            <Link to={`/item/${props.id}`}><button>Ver descripción</button></Link>
            <ItemCount initial={1} stock={5} onAdd={onAddAlert}/>
        </div>
    )
};

export default Item;