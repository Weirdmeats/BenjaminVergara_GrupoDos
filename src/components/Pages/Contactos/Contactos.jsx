import React from 'react';
import Footer from '../../Footer/Footer';

function Contactos() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-slate-100 py-10'>
      <h1 className='text-3xl font-bold mb-4'>Contacto</h1>
      <p className='text-lg text-center mb-6 px-4 md:px-8'>
        Si tienes alguna pregunta o necesitas más información sobre nuestros servicios, no dudes en ponerte en contacto con nosotros.
      </p>
     

      
      <Footer />
    </div>
  );
}

export default Contactos;
