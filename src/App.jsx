import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from './components/Pages/Productos/Productos';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Inicio from './components/Pages/Inicio/Inicio';
import Contactos from './components/Pages/Contactos/Contactos';
import Servicios from './components/Pages/Servicios/Servicios';
import Carrito from './components/Pages/Carrito/Carrito';
function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path='/products/:productId' element={<ItemDetail />} />
                        <Route path="/services/:serviceId" element={<ItemDetail />} />

                        <Route path="/contactos" element={<Contactos />} />
                        <Route path="/servicios" element={<Servicios />} />

                        <Route path="/carrito" element={<Carrito />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
export default App;
