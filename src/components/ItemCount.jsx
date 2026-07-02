import React from 'react'
import {useState, useEffect} from 'react'


//Usar en los articulos, para sumar o restar cantidad de productos a comprar, o para sumar o restar cantidad de personas a una reserva, etc.    
    const ItemCount = ({stock, onAdd}) => {
        const [count, setCount] = useState(0);
    
        const decrement = () => {
            if (count > 0) {
                setCount(count - 1);
            }
        };
        const increment = () => {
            if (count < stock) {
        
            setCount(count + 1);
    }
}
        const purchase = () => {
          onAdd(count);
        };

        return (
        <div>
            <div>
            <button className="btn btn-danger" onClick={decrement} disabled={count <= 0}>
                -
            </button>
            <span className="text-center btn">{count}</span>
            <button className="btn btn-success" onClick={increment}>
                +
            </button>
            </div>
            <button className="btn btn-primary" onClick={purchase} disabled={count === 0 || stock === 0}>Comprar</button>
        </div>
    );
};

export default ItemCount;