import { Link } from "react-router-dom";

const Item = (props) => {

    console.log({props})

    return (
        <div>
            <h1>{props.nombre}</h1>
            <p>Precio: {props.precio}</p>
            <img src={props.imagen}></img>
            <Link to={`/item/${props.id}`}><button>Ver descripción</button></Link>
        </div>
    )
};

export default Item;