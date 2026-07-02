import React from 'react';

const Formulario = () => {
  return (
    <div>
        <h2>Formulario de Contacto</h2>
        <input type="text" placeholder="Nombre completo" name='nombre-completo' className='form-control'/>
        <input type="email" placeholder="Correo Electrónico" className='form-control'/>
        <textarea placeholder="Mensaje" className='form-control'></textarea>
        <button className='btn btn-primary'>Enviar</button>
    </div>
  );
};


export default Formulario;
