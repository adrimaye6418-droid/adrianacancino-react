import { createContext, useState } from "react";



// Crear y exportar el contexto del carrito

export const CartContext = createContext()

// Crear y exportar el proveedor del contexto del carrito

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // funciones que usen setCart para modificar el carrito, como agregar, eliminar o vaciar productos

    //agregar un producto al carrito comprobando si ya existe en el carrito, si existe, sumar la cantidad, si no existe, agregarlo al carrito

    const addItem = (item, qty) => {
        //console.log(item, qty);
        if (isInCart(item.id)) {
            setCart(
                cart.map(prod => {
                if (prod.id === item.id) {
                    return {...prod, quantity: prod.quantity + qty}
                }
                else {  
                return prod
                }
            })
            );
        } 
        else {
            setCart([...cart, {...item, quantity: qty}])
        }
    }
      //vaciar el carrito
    const clearCart = () => {
         setCart([])
    }
       //eliminar un producto del carrito por su id
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

     //comprobar si un producto ya existe en el carrito por su id (retorna true o false)
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }


        //retornar el precio total de los productos en el carrito (sumando el precio por la cantidad de cada producto)
    const totalPrice = () => {
        console.log(totalPrice)
        return cart.reduce((total, prod) => total += (prod.price * prod.quantity), 0);
    }

              //retornar la cantidad total de productos en el carrito (sumando las cantidades de cada producto)
    const totalQty = () => {
        return cart.reduce((total, prod) => total += prod.quantity, 0);
    }


    return (
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, totalPrice, totalQty}}>
           {children}
        </CartContext.Provider>
    )
}

