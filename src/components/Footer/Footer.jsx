import React from 'react';

function Footer() {
  return (
    <footer className='bg-slate-950 text-white py-6 md:py-10 fixed min-w-full bottom-0'>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">

          {/* Contactos */}
          <div className="flex-1 mb-6 lg:mb-0 lg:flex lg:justify-start">
            <div>
              <h2 className='font-bold text-lg md:text-xl lg:text-2xl'>Contactos</h2>
              <p className='text-sm md:text-base lg:text-lg'>Correo electrónico: 
                <a href="mailto:scissors@gmail.com" className="text-cyan-400 hover:underline">
                  scissors@gmail.com
                </a>
              </p>
              <p className='text-sm md:text-base lg:text-lg'>Número telefónico: 
                <a href="tel:+56982390862" className="text-cyan-400 hover:underline">
                  +56982390862
                </a>
              </p>
            </div>
          </div>

          {/* Links importantes */}
          <div className="flex-1 mb-6 lg:mb-0 lg:flex lg:justify-center">
            <div>
              <h2 className='font-bold text-lg md:text-xl lg:text-2xl'>Links importantes</h2>
              <ul className='space-y-2'>
                <li>
                  <a href="#" className="text-cyan-400 hover:underline">Términos de privacidad</a>
                </li>
                <li>
                  <a href="#" className="text-cyan-400 hover:underline">ⓇCopyright 2024</a>
                </li> 
              </ul>
            </div>
          </div>

          {/* Otra sección */}
          <div className="flex-1 lg:mb-0 lg:flex lg:justify-end">
            <div>
              <h2 className='font-bold text-lg md:text-xl lg:text-2xl'>Otra Sección</h2>
              <p className='text-sm md:text-base lg:text-lg'>Correo electrónico: 
                <a href="mailto:scissors@gmail.com" className="text-cyan-400 hover:underline">
                  scissors@gmail.com
                </a>
              </p>
              <p className='text-sm md:text-base lg:text-lg'>Número telefónico: 
                <a href="tel:+56982390862" className="text-cyan-400 hover:underline">
                  +56982390862
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
