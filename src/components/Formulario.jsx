import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

const Formulario = () => {
  const [buyer, setBuyer] = useState({})
  const [orderId, setOrderId] = useState("")
  const { cart, totalPrice, clearCart } = useContext(CartContext)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const buyerData = (e) => {
    setBuyer(
      {
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const terminarCompra = (e) => {
    e.preventDefault()

    if(!buyer.name || !buyer.address || !buyer.ciudad || !buyer.mail || !buyer.secundmail) {
      setError('Por favor complete todos los campos del formulario.')
      return
    } else if(buyer.mail !== buyer.secundmail) {
      setError('Los correos electrónicos no coinciden.')
      return
    } else {
        setError(null)
        setLoading(true)

    let orden = {
      cliente: buyer,
      carrito: cart,
      total: totalPrice(),
      fecha:serverTimestamp(),
    }

    const orderColl = collection(db, "orders")
      addDoc(orderColl, orden)
        .then((res) => {
          clearCart()
          setOrderId(res.id)
         })

        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
        }

  }

    if(!cart.length && !orderId){
      return <EmptyCart/>
      }

  return (
    <>
    {
      orderId
      ? <div>
      <h1>Gracias por su compra.</h1>
      <h2>Su número de orden es: {orderId}</h2>
      <Link className='btn btn-primary' to="/">Volver al inicio</Link>
      </div>
      : <div>
      <h1 className='text-center mb-4'>Por favor, complete el siguiente formulario para finalizar su compra.</h1>
      {error && <span style={{color: 'red'}}>{error}</span>}
          <form className='p-4 border rounded shadow-sm bg-light' onSubmit={terminarCompra}>
            <input className="form-control" type="text" placeholder="Nombre completo" name='name' onChange={buyerData} />
            <input className="form-control" type="text" placeholder="Dirección" name='address' onChange={buyerData}/>
            <input className="form-control" type="text" placeholder="Ciudad" name='ciudad'onChange={buyerData} />
            <input className="form-control" type="email" placeholder="Correo electrónico" name='mail' onChange={buyerData} />
            <input className="form-control" type="email" placeholder="Repetir correo electrónico" name='secundmail' onChange={buyerData} />
            <button  type="submit" className='btn btn-success' disabled={loading} >{loading ? 'Cargando compra...' : 'Terminar compra'}</button>
        </form>
        
    </div>
    }



    </>

  )
}


export default Formulario;
