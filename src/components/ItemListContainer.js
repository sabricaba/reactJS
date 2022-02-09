import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    const onAddAlert = (counter) => {
        alert(`Usted agrego ${counter} unidades al carrito`)    
    }

    return (
        <>
            <p>{props.title}</p>
            <ItemCount initial={1} stock={5} onAdd={onAddAlert}/>
        </>
    );
};

export default ItemListContainer;