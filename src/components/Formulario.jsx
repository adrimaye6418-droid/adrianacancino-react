import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import { useForm } from 'react-hook-form'

const Formulario = () => {
  const [orderId, setOrderId] = useState('')
  const {cart, totalPrice, clearCart} = useContext(CartContext)
  const {register, handleSubmit, formState:{errors}, getValues}=useForm()
  const [loading, setLoading] = useState(false)

  const terminarCompra = (data)=>{
    console.log(data);
  const {name, address, email, ciudad}=data

    setLoading(true)
      let orden = {
          cliente: {name, address, email, ciudad},
          carrito:cart,
          total: totalPrice(),
          fecha:serverTimestamp(),
      }

      const orderColl = collection(db, "orders")
         addDoc(orderColl, orden)
          .then((res)=> {
          clearCart()
          setOrderId(res.id)
      })

      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
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
      
          <form className='p-4 border rounded shadow-sm bg-light' onSubmit={handleSubmit(terminarCompra)}>
            <input className='form-control' type='text' placeholder='Ingresa nombre y apellido completo'  name='name' {...register("name", {required:true, minLength:3})}  />
            {errors?.name?.type === "required" && <span style={{color:'red'}}>Complete este campo</span>}
            {errors?.name?.type === "minLength" && <span style={{color:'red'}}>El nombre debe contener mínimo 3 caracteres</span>}
            
            <input className="form-control" type="text" placeholder="Dirección" name='address' {...register("address", {required:true, minLength:3, maxLength:34})}/>
            {errors?.address?.type === "required" && <small style={{color:'red'}}>Complete este campo</small>}
            {errors?.address?.type === "minLength" && <small style={{color:'red'}}>El nombre debe tener mas de 3 caracteres</small>}
            {errors?.address?.type === "maxLength" && <small style={{color:'red'}}>La direccion es demasiado larga</small>}
            
            <input className="form-control" type="text" placeholder="Ciudad" name='ciudad' {...register("ciudad", {required:true, minLength:3, maxLength:20})}/>
            {errors?.ciudad?.type === "required" && <small style={{color:'red'}}>Complete este campo</small>}
            {errors?.ciudad?.type === "minLength" && <small style={{color:'red'}}>El nombre debe tener mas de 3 caracteres</small>}
            {errors?.ciudad?.type === "maxLength" && <small style={{color:'red'}}>La direccion es demasiado larga</small>}
            
            <input className="form-control" type="email" placeholder="Correo electrónico" name='mail' {...register("mail", {required:true, minLength:3})} />
            {errors?.mail?.type === "required" && <small style={{color:'red'}}>Complete este campo</small>}
            
            <input className="form-control" type="email" placeholder="Repetir correo electrónico" name='secundmail'  />
            <button  type="submit" className='btn btn-success' disabled={loading} >{loading ? 'Cargando compra...' : 'Terminar compra'}</button>
        </form>
        
    </div>
    }


    </>

  )
}

export default Formulario;

