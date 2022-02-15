import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const productos = [
    {id:1, descripcion: "", nombre:"Alimento para gato", precio:1550, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0g8eGxjj7CvakIVDcT9yAA8GPnP9NKN2KQ&usqp=CAU"},
    {id:2, descripcion: "", nombre:"Alimento para perro", precio:1675, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHVfUlFiBVU4kGe_MQhcvHy9wn8fnNXhbKg&usqp=CAU"},
    {id:3, descripcion: "", nombre:"Baños para perro", precio:1075, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAPMcd1wvI3UtpHkGfbBbuIuMhkq998sGSQ&usqp=CAU"},
    {id:4, descripcion: "", nombre:"Servicio veterinaria", precio:1350, imagen: "http://1.bp.blogspot.com/-pL78OThyv_c/Ve4OnTZWF4I/AAAAAAAAAAM/Gx73N1UKfA4/s1600/perrogato.jpg"},
    {id:5, descripcion: "", nombre:"Premios", precio:550, imagen:"https://i1.wp.com/pawsomedoglife.com/wp-content/uploads/2019/08/Pawsome-BLog-Premios-Caseros-Calabaza.jpg?fit=700%2C900&ssl=1"},
    {id:6, 
    descripcion: "¿Qué incluye? Selección de 7 productos adaptados al tamaño de tu mascota. Una caja con pelotas interactivas, juguetes temáticos, golosinas masticables, huesos, snacks 100% naturales, productos de higiene. ¡Generamos una experiencia única en cada compra!", 
    nombre:"Juguetes", 
    precio:1950, 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgs9XfTSdDAA1vYEz7dq4FoQ-aAAFQ-oW5AA&usqp=CAU"}
]

const ItemDetailConteiner = () => {
    const [producto3, setProducto3] = useState([]);

    useEffect(() => {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (true){
                        resolve();
                    } else {
                        reject("404: Error not found")
                    }
                }, 2000);
            })
            .then(() => setProducto3(productos[5]))
            .catch((error) => alert(error));
    }, [])

    return(
        <div>
            <ItemDetail
            nombre={producto3.nombre}
            precio={producto3.precio}
            imagen={producto3.imagen}
            descripcion={producto3.descripcion}
            />
        </div>
    )
};

export default ItemDetailConteiner;