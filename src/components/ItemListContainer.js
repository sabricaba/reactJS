import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <>
            <p>{props.title}</p>
            <ItemCount initial={1} stock={5} />
        </>
    );
};

export default ItemListContainer;