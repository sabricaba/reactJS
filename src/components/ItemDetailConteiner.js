import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../utilitis/fireBaseConfig";


const ItemDetailConteiner = () => {
    const [producto3, setProducto3] = useState(null);

    const {idProduct} = useParams();

    useEffect(() => {
        const makeRequest = async () => {
            const docRef = doc(db, "productos", idProduct);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            } else {
            console.log("No such document!");
            }
        }
        makeRequest()
            .then(result => setProducto3(result))
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