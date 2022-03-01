import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "../utilitis/productos";


const ItemDetailConteiner = () => {
    const [producto3, setProducto3] = useState(null);

    const {idProduct} = useParams();

    useEffect(() => {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (true){
                        resolve();
                    }
                }, 2000);
            })
            .then(() => setProducto3(productos.find(item => item.id === idProduct)))
            .catch((error) => alert(error));
    }, [idProduct])

    if (!producto3) return <p>Cargando...</p>

    return(
        <div>
            <ItemDetail
            id={producto3.id}
            nombre={producto3.nombre}
            precio={producto3.precio}
            imagen={producto3.imagen}
            descripcion={producto3.descripcion}
            />
        </div>
    )
};

export default ItemDetailConteiner;