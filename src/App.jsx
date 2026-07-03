import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Card from './components/Card'
import Item from './components/Item'
import ItemList from './components/ItemList'
import Formulario from './components/Formulario'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Error from './components/Error';



function App() {
   return (
    
    <BrowserRouter>
    <CartProvider>
      <div className="App">
      <Navbar/>
         <Routes>
         <Route path='/' element={<Card />} />
         <Route path='/category/:type' element={<ItemListContainer/>} />
         <Route path='/item/:id' element={<ItemDetailContainer />} />
         <Route path='/cart' element={<CartContainer />} />
         <Route path='/formulario' element={<Formulario />} />
         <Route path='*' element={<Error />} />
        </Routes>
    </div>
    </CartProvider>
    </BrowserRouter>
  )

}
export default App
