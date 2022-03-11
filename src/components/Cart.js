import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { serverTimestamp, setDoc, collection, doc } from 'firebase/firestore';
import db from '../utilitis/fireBaseConfig';

const Cart = () => {

    const test = useContext (CartContext);

    const createOrder = () => {
        let order = {
            buyer: {
                email: "berta@dinamita.com.ar",
                name: "Berta Dinamita",
                phone: "3416237820"
            },
            date: serverTimestamp(),
            items: test.cartList.map((it) => {
                return {
                    id: it.id,
                    price: it.precio,
                    nombre: it.nombre,
                    qty: it.qty
                };
            }),
            total: test.totalFinal(),
        };

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef
        }

        createOrderInFirestore()
        .then((result) => {
            alert("Tu orden ha sido recibida correctamente " + result.id);
            test.clear();
        })
        .catch(error => console.log(error));
    }

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
                    <button onClick={createOrder}>Create order</button>
                </div>
            }
        </>
    );
};

export default Cart;