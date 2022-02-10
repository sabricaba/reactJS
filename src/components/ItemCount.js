
import {useState} from "react";

const ItemCount = (props) => {

    const [addCart, setAddCart] = useState(props.initial);

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

    return(
        <div className="addCart"> 
            <button onClick={increment}>Add</button>
            <label>{addCart}</label>
            <button onClick={decrement}>Delete</button>
            <button onClick={()=>props.onAdd(addCart)}>Add to Cart</button>
        </div>
    );

}

export default ItemCount;