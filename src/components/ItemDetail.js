import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    const onAddAlert = (counter) => {
        alert(`Usted agrego ${counter} unidades al carrito`)    
    }
    
    return (
        <div>
            <h1>{props.nombre}</h1>
            <p>Precio: {props.precio}</p>
            <p>Descripción: {props.descripcion}</p>
            <img src={props.imagen}></img>
            <ItemCount initial={1} stock={10} onAdd={onAddAlert}/>
        </div>
    )
};

export default ItemDetail;