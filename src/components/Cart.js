import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { serverTimestamp, setDoc, collection, doc } from 'firebase/firestore';
import db from '../utilitis/fireBaseConfig';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

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
        <Link to="/"><Button variant="outline-dark">Seguir comprando</Button></Link>
            {
                (test.cartList.length > 0) 
                ? <Button variant="outline-dark" onClick={test.clear}>Borrar carrito</Button>
                : <p>El carrito esta vacio</p>
            }
            {test.cartList.length > 0 &&
                test.cartList.map(item => (
                    <div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.imagen} />
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{item.nombre}</ListGroupItem>
                                <ListGroupItem>Precio: {item.precio}</ListGroupItem>
                                <ListGroupItem>Cantidad: {item.qty}</ListGroupItem>
                            </ListGroup>
                            <Button variant="outline-dark" onClick={() => test.removeItem(item.id)}>Eliminar producto</Button>
                        </Card.Body>
                        </Card>
                    </div>
            ))}
            {test.cartList.length > 0 &&
                <div>
                    <Card className="text-center">
                    <Card.Header as="h3">Total carrito</Card.Header>
                    <Card.Body> 
                        <Card.Text>
                        Subtotal: {test.totales()}
                        </Card.Text>
                        <Card.Text>
                        Impuestos: {test.impuestos()}
                        </Card.Text>
                        <Card.Title>Total a pagar: {test.totalFinal()}</Card.Title>
                        <Button variant="outline-dark" onClick={createOrder}>Crear orden de compra</Button>
                    </Card.Body>
                    </Card>
                </div>
            }
        </>
    );
};

export default Cart;