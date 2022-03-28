import Item from "./Item"

const ItemList = (props) => {
    return(
        <div className="divBody">
            {props.product.map((element) => {
                return (
                    <Item 
                    nombre={element.nombre}
                    precio={element.precio}
                    imagen={element.imagen}
                    id={element.id}
                    />
                )}
            )}
        </div>
    )
}

export default ItemList;