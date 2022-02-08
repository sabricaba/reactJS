
import {useState} from "react";

const ItemCount = (props) => {

    const [addCart, setAddCart] = useState(props.initial);

    console.log(addCart)

    const increment = () => {
        if(addCart<props.stock) {
            setAddCart(addCart+1)
        };
    };

    const decrement = () => {
        if(addCart>props.initial){
            setAddCart(addCart-1)
        };
    };

    const onAdd = () => {
        if(addCart<props.stock) {
            console.log(`Usted agrego ${addCart} unidades al carrito`)
        }
    }


    return(
        <div className="addCart"> 
            <button onClick={increment}>Add</button>
            <label>{addCart}</label>
            <button onClick={decrement}>Delete</button>
            <button onClick={onAdd}>Add to Cart</button>
        </div>
    );

}

export default ItemCount;