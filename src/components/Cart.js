import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";

const Cart = () => {

    const test = useContext (CartContext);

    return(
        <>
        <Link to="/"><button>Seguir comprando</button></Link>
            {
                (test.cartList.length > 0) 
                ? <button onClick={test.clear}>Borrar carrito</button>
                : <p>El carrito esta vacio</p>
            }
            {test.cartList.length > 0 &&
                test.cartList.map(item => (
                    <div>
                        <img src={item.imagen} alt=""></img>
                        <p>Nombre: {item.nombre} </p>
                        <p>Precio: {item.precio} c/uno</p>
                        <p>Cantidad: {item.qty}</p>
                        <button onClick={() => test.removeItem(item.id)}>Eliminar producto</button>
                    </div>
            ))}
            {test.cartList.length > 0 &&
                <div>
                    <p>Subtotal: {test.totales()}</p>
                    <p>Impuestos: {test.impuestos()}</p>
                    <h2>Total: {test.totalFinal()}</h2>
                </div>
            }
        </>
    );
};

export default Cart;