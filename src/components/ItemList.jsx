import React from "react"
import Item from "./Item"



const ItemList = ({data}) => {

    return (
        <div 
            style={{
                display: "flex",
                flexWrap: "wrap", 
                justifyContent: "space-around", 
                alignItems: "center"
                }}
        >
            {data.length === 0 ? (
                <p>Cargando productos...</p>
            ):(
            data.map((prod) => (
                <Item key={prod.id} prod={prod} />
            ))
        )}
        </div>
    )
    }
   
    export default ItemList;