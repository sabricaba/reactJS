import { createContext, useState } from "react"

export const CartContext = createContext ()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (props, counter) => {
        setCartList([
            ...cartList,
            {
            id: props.id,
            nombre: props.nombre,
            imagen: props.imagen,
            precio: props.precio,
            qty: counter
        }]);
    }

    const removeItem = (id) => {
        cartList = document.getElementById(id);
        cartList.removeItem();
    };

    const clear = () => {
        setCartList([])
    };

    const isInCart = () => {

    };

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;