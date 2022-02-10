import ItemCount from "./ItemCount";

const Item = (props) => {
    const onAddAlert = (counter) => {
        alert(`Usted agrego ${counter} unidades al carrito`)    
    }
    
    return (
        <div>
            <h1>{props.nombre}</h1>
            <p>Precio: {props.precio}</p>
            <img src={props.imagen}></img>
            <ItemCount initial={1} stock={5} onAdd={onAddAlert}/>
        </div>
    )
};

export default Item;