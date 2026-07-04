import { createContext, useState } from "react";


export const CartContext = createContext()
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            setCart(cart.map(prod => {
                if (prod.id === item.id) {return {...prod, quantity: prod.quantity + qty}}
                else {return prod}}));
        } else {setCart([...cart, {...item, quantity: qty}])}
    }
    const clearCart = () => {setCart([])}
    const removeItem = (id) => {setCart(cart.filter(prod => prod.id !== id))}
    const isInCart = (id) => {return cart.some(prod => prod.id === id)}
    const totalPrice = () => {return cart.reduce((total, prod) => total += (prod.price * prod.quantity), 0);}
    const totalQty = () => {return cart.reduce((total, prod) => total += prod.quantity, 0);}

    return (
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, totalPrice, totalQty}}>
           {children}
        </CartContext.Provider>
    )
}

