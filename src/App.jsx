
import React from 'react';
import Productos from './components/Pages/Productos/Productos.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ProductsCategory from './components/Category/Category';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Pages/Inicio/Inicio.jsx';
import Contactos from './components/Pages/Contactos/Contactos.jsx';
import Servicios from './components/Pages/Servicios/Servicios.jsx';





function App() {
  return (
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex items-center justify-center">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<Productos />} />
              <Route path='/category/:categoryId' element={<ProductsCategory />} />
              <Route path='/products/:productId' element={<ItemDetail />} />
              <Route path="/services/:serviceId" element={<ItemDetail />} />
              <Route path="/contactos" element={<Contactos />} />
              <Route path="/servicios" element={<Servicios />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App