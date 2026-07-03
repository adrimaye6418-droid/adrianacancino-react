import React from "react";
import { Link } from "react-router-dom";
import formulario from "./Formulario";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartView = () => {
    const {cart, clearCart, removeItem, totalPrice, totalQty} = useContext(CartContext);
    return (
        <div>
            <h1>Carrito de compras </h1>
                <div>
                    {
                        cart.map((compra) => (
                        <div key={compra.id}style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '2rem' }}>
                          <img src={compra.img} alt={compra.name} style={{ width: '10rem', height: '100px', objectFit: 'cover' }} />
                            <span>{compra.name}</span>
                            <span>Cantidad: {compra.quantity}</span>
                            <span>Precio: ${compra.price}</span>
                            <button className="btn btn-danger" onClick={() => removeItem(compra.id)}>Eliminar</button>
                        </div>

                        ))
                    }
                </div>
                <span style={{textAlign:'center'}}>Total a pagar: ${totalPrice()}</span>
                <div>
                <span style={{textAlign:'center'}}>Unidades Totales: {totalQty()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', padding: '2rem' }}>
                    <button className="btn btn-danger" onClick={() => clearCart()}>Vaciar carrito</button>
                    <Link to="/formulario" className="btn btn-success">Finalizar compra</Link>
                </div>
        </div>
    )
}

export default CartView