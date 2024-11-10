import React from 'react';

function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-bold text-lg">Contactos</h2>
                        <p>Email: <a href="mailto:scissors@gmail.com" className="text-cyan-400 hover:underline">scissors@gmail.com</a></p>
                        <p>Tel: <a href="tel:+56982390862" className="text-cyan-400 hover:underline">+56982390862</a></p>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Links importantes</h2>
                        <ul>
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
