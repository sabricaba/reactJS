import { createContext, useState } from "react"

export const CartContext = createContext ()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (props, counter) => {
        if (isInCart(props.id)) {
            setCartList(prevState => {
                const existingItem = prevState.find(item => item.id === props.id);
                existingItem.qty = existingItem.qty + counter;
                return prevState
            })
        } else {
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
    }

    const removeItem = (id) => {
        setCartList(prevState => {
            return prevState.filter((i) => i.id !== id)
        })
    };

    const clear = () => {
        setCartList([])
    };

    const isInCart = (id) => {
        if (cartList.find((i) => i.id == id)) return true
        return false
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;