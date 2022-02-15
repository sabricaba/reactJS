import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const productos = [
    {id:1, nombre:"Alimento para gato", precio:1550, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0g8eGxjj7CvakIVDcT9yAA8GPnP9NKN2KQ&usqp=CAU"},
    {id:2, nombre:"Alimento para perro", precio:1675, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHVfUlFiBVU4kGe_MQhcvHy9wn8fnNXhbKg&usqp=CAU"},
    {id:3, nombre:"Baños para perro", precio:1075, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAPMcd1wvI3UtpHkGfbBbuIuMhkq998sGSQ&usqp=CAU"},
    {id:4, nombre:"Servicio veterinaria", precio:1350, imagen: "http://1.bp.blogspot.com/-pL78OThyv_c/Ve4OnTZWF4I/AAAAAAAAAAM/Gx73N1UKfA4/s1600/perrogato.jpg"},
    {id:5, nombre:"Premios", precio:550, imagen:"https://i1.wp.com/pawsomedoglife.com/wp-content/uploads/2019/08/Pawsome-BLog-Premios-Caseros-Calabaza.jpg?fit=700%2C900&ssl=1"},
    {id:6, nombre:"Juguetes", precio:1950, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgs9XfTSdDAA1vYEz7dq4FoQ-aAAFQ-oW5AA&usqp=CAU"}
];


const ItemListContainer = (props) => {
    const [product2, setProduct2] = useState([]);

    useEffect(() => {
        function makeRequest() {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (true){
                        resolve();
                    } else {
                        reject("404: Error not found")
                    }
                }, 2000);
            })
            .then(() => setProduct2(productos))
            .catch((error) => alert(error));
        }

        makeRequest();
    }, [])

    return (
        <>
            <p>{props.title}</p>
            <ItemList product={product2}/>
        </>
    );
};

export default ItemListContainer;