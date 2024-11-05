import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './components/ShoppingCart/ShoppingCartContext.jsx'; 
import Productos from './components/Pages/Productos/Productos';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Inicio from './components/Pages/Inicio/Inicio';
import Contactos from './components/Pages/Contactos/Contactos';
import Servicios from './components/Pages/Servicios/Servicios';
import Cart from './components/Pages/Cart/Cart'; 

function App() {
    return (
        <BrowserRouter>
            <ShoppingCartProvider>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
                        <Routes>
                            <Route path="/" element={<Inicio />} />
                            <Route path="/productos" element={<Productos />} />
                            <Route path='/products/:productId' element={<ItemDetail />} />
                            <Route path="/services/:serviceId" element={<ItemDetail />} />
                            
                            <Route path="/contactos" element={<Contactos />} />
                            <Route path="/servicios" element={<Servicios />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </ShoppingCartProvider>
        </BrowserRouter>
    );
}

export default App;
