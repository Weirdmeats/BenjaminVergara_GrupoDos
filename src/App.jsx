import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from './components/Pages/Productos/Productos';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Inicio from './components/Pages/Inicio/Inicio';
import Contactos from './components/Pages/Contactos/Contactos';
import Servicios from './components/Pages/Servicios/Servicios';


function App() {
    return (
        <BrowserRouter>
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
                        </Routes>
                    </main>
                    <Footer />
                </div>
        </BrowserRouter>
    );
}

export default App;
