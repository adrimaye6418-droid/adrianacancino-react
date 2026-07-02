import React from 'react'
import CartView from './CartView'
import EmptyCart from './EmptyCart'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'



const CartContainer = () => {
    const {cart}= useContext(CartContext)
return (
    <>
        {cart.length > 0 ? <CartView /> : <EmptyCart />}
    </>
    )
}


export default CartContainer