import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import { CartContext } from "./CartContext";
import Figure from 'react-bootstrap/Figure';

const ItemDetail = (props) => {
    const [itemCount, setItemCount] = useState(0)
    const test = useContext(CartContext);
    
    const onAddAlert = (counter) => {
        if(counter === 0) {
            alert(`Tiene que agregar unidades de este producto!`);
        } else {
            alert(`Usted agrego ${counter} unidades al carrito`);
            setItemCount (counter);
            test.addItem (props, counter);
        }
    };
    
    return (
        <div>
        <br />
        <Figure>
        <Figure.Image
            width={300}
            height={200}
            src={props.imagen}
        />
        <h5>
            {props.nombre}
        </h5>
        <Figure.Caption>
            Descripción del producto: {props.descripcion}
        </Figure.Caption>
        <Figure.Caption>
            Precio del producto: {props.precio}
        </Figure.Caption>
        </Figure>
            {
            itemCount === 0
            ? <ItemCount stock = {10} initial = {itemCount} onAdd = {onAddAlert} />
            : <Link to={"/cart"}><CartButton /></Link>
            }
        <br />
        </div>
    )
};

export default ItemDetail;