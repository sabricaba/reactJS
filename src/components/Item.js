import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = (props) => {

    console.log({props})

    return (
            <Card style={{ width:'20%' }} >
                <Card.Img variant="top" src={props.imagen} style={{ height:'200px' }} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>Precio: {props.precio}</Card.Text>
                    <Link to= {`/item/${props.id}`}><Button variant="outline-dark">Ver descripción</Button></Link>
                </Card.Body>
            </Card>
    )
};

export default Item;