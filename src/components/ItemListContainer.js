import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../utilitis/productos";

const ItemListContainer = (props) => {
    const [product2, setProduct2] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        function makeRequest() {
            if (idCategory === undefined) {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (true){
                        resolve();
                    } else {
                        reject("404: Error not found")
                    }
                }, 2000);
            })
            .then(() => setProduct2(productos)
            .catch((error) => alert(error)));
        } else {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (true){
                        resolve();
                    } else {
                        reject("404: Error not found")
                    }
                }, 2000);
            })
            .then(() => setProduct2(productos.filter(item => item.category === idCategory)))
            .catch((error) => alert(error));           
        }
        }

        makeRequest();
    }, [idCategory])

    return (
        <>
            <p>{props.title}</p>
            <ItemList product={product2}/>
        </>
    );
};

export default ItemListContainer;