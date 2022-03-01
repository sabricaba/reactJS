import { createContext, useState } from "react"

export const CartContext = createContext ()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (props, counter) => {
        if (isInCart(props.id)) {
            console.log({item: props})
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
        if (cartList.find((i) => i.id === id)) return true
        return false
    }

    const totalItem = (id) => {
        let total = cartList.map(item => item.id).indexOf(id);
        return cartList[total].costItem * cartList[total].qtyItem;
    }

    const totales = () => {
        let totales2 = cartList.map(item => totalItem(item.id));
        return totales2.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const impuestos = () => {
        return totales * 0.21;
    }

    const totalFinal = () => {
        return totales - impuestos;
    }


    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart, totales, totalFinal, impuestos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;