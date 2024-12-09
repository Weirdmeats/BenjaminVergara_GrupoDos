import React from 'react';
function Footer() {
    return (
        //creación del footer con tailwind
        <footer className="bg-slate-950 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
                    {/*contactos */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="font-bold text-lg text-center md:text-left">Contactos</h2>
                        <p className="text-center md:text-left">Email: <a href="mailto:scissors@gmail.com" className="text-cyan-400 hover:underline">scissors@gmail.com</a></p>
                        <p className="text-center md:text-left">Tel: <a href="tel:+56982390862" className="text-cyan-400 hover:underline">+56982390862</a></p>
                    </div>
                    {/*links */}
                    <div>
                        <h2 className="font-bold text-lg text-center md:text-left">Links importantes</h2>
                        <ul className="text-center md:text-left space-y-2">
                            <li><a href="#" className="text-cyan-400 hover:underline">Términos de privacidad</a></li>
                            <li><a href="#" className="text-cyan-400 hover:underline">ⓇCopyright 2024</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
