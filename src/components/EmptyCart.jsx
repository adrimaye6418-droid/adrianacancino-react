import React from "react";
import { Link } from "react-router-dom";


const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <h2>Tu carrito está vacío</h2>
            <p>Agrega productos para continuar con la compra.</p>
            <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
        </div>
    )
}

export default EmptyCart