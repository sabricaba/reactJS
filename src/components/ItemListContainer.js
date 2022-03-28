import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../utilitis/fireBaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = (props) => {
    const [product2, setProduct2] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        const makeRequest = async () => {
            const querySnapshot = await getDocs(collection(db, "productos"));
            const data = querySnapshot.docs.map( document =>({
                id: document.id,
                ...document.data()
            }))
            return idCategory ? data.filter(item => item.category === idCategory) : data;
        }
        makeRequest()
            .then(result => setProduct2(result))
            .catch(error => console.log(error));
    }, [idCategory])

    return (
        <>
            <p>{props.title}</p>
            <ItemList product={product2}/>
        </>
    );
};

export default ItemListContainer;