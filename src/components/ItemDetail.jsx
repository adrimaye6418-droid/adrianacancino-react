import React from "react"
import ItemCount from "./ItemCount"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"


const ItemDetail = ({detail}) => {

    const [purchase, setPurchase] = useState(false);

    const {cart, addItem} = useContext(CartContext)
    
        const onAdd = (count) => {
        addItem(detail, count)
        setPurchase(true)
    }


    return (
        <div style={{
            textAlign: "center",
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            gap: "10px",
            }}> 
            <h2>Detalle del Producto</h2>
            <img src={detail.img} alt={detail.name} style={{width: "300px"}} />
            <h3>{detail.name}</h3>
            <p>{detail.description}</p>
            <p>Precio: ${detail.price}</p>
            <p>Stock disponible: {detail.stock}</p>
            {purchase ? <Link className="btn btn-success" to="/cart" >Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd} />}
        </div>
    )
}   

export default ItemDetail