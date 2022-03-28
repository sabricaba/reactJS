import {useState} from "react";
import Button from 'react-bootstrap/Button';

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
            <Button variant="outline-dark" onClick={increment}>Add</Button>
            <label>{addCart}</label>
            <Button variant="outline-dark" onClick={decrement}>Delete</Button>
            <Button variant="outline-dark" onClick={()=>props.onAdd(addCart)}>Add to Cart</Button>
        </div>
    );

}

export default ItemCount;