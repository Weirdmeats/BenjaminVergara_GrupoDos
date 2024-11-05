const Products = [
    //celulares
    {
        id: 1,
        name: 'Smartphone A',
        price: 250000,
        description: 'El Smartphone A cuenta con una pantalla de 6.5 pulgadas y una cámara trasera de 48 MP, ideal para capturar imágenes nítidas y vibrantes. Con un procesador de alto rendimiento, garantiza un uso fluido en todas tus aplicaciones.',
        stock: 0,
        img: 'https://home.ripley.cl/store/Attachment/WOP/D191/2000400542153/2000400542153_2.jpg',
        category: 'celulares',
        colors: ['Negro', 'Blanco', 'Azul']
    },
    {
        id: 2,
        name: 'Smartphone B',
        price: 310000,
        description: 'El Smartphone B ofrece una experiencia multimedia excepcional con su pantalla AMOLED y sonido envolvente. Su batería de larga duración y carga rápida te mantienen conectado durante todo el día.',
        stock: 5,
        img: 'https://www.abcdin.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw48826d03/images/large/27359779.jpg?sw=1200&sh=1200&sm=fit',
        category: 'celulares',
        colors: ['Rojo', 'Verde', 'Amarillo']
    },
    {
        id: 3,
        name: 'Smartphone C',
        price: 400000,
        description: 'El Smartphone C es perfecto para los amantes de la fotografía, con su cámara de 108 MP y múltiples modos de fotografía. Su diseño elegante y su potente procesador lo hacen ideal para gamers.',
        stock: 0,
        img: 'https://img.pccomponentes.com/articles/31/310897/1848-samsung-galaxy-note-20-ultra-5g-12-256gb-mystic-black-libre.jpg',
        category: 'celulares',
        colors: ['Negro', 'Gris']
    },
    {
        id: 4,
        name: 'Smartphone D',
        price: 550000,
        description: 'El Smartphone D combina estilo y funcionalidad. Con su pantalla de 6.7 pulgadas y tecnología de pantalla completa, ofrece una visualización impresionante. Su sistema de inteligencia artificial optimiza el rendimiento de la cámara y la duración de la batería.',
        stock: 5,
        img: 'https://m.media-amazon.com/images/I/71wFAKrdnWL._AC_SL1500_.jpg',
        category: 'celulares',
        colors: ['Blanco', 'Negro']
    },
    {
        id: 5,
        name: 'Smartphone E',
        price: 600000,
        description: 'El Smartphone E está diseñado para quienes buscan rendimiento y durabilidad. Con su robusta carcasa y resistencia al agua, es perfecto para aventuras al aire libre. Su gran capacidad de almacenamiento permite guardar tus aplicaciones y archivos sin preocupaciones.',
        stock: 5,
        img: 'https://m.media-amazon.com/images/I/71hB8cEDLYL._AC_UF894,1000_QL80_.jpg',
        category: 'celulares',
        colors: ['Azul', 'Rojo']
    },
    //powerbanks
    {
        id: 51,
        name: 'Powerbank A',
        price: 20000,
        description: 'Powerbank de 10000mAh con carga rápida, ideal para mantener tus dispositivos móviles cargados en cualquier lugar.',
        stock: 15,
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTztiBvRomSb8iumCpcaX3uH4AclzOR-cIhVJuEeGXJCau1hMLdXcge9JMPDhlzgtCU-orsNG3ITDLcfHH1mdEcMesG_GIaikRNW_Z-p6io7DIOTM_FXz2g2cQ&usqp=CAE',
        category: 'powerbanks', 
        colors: ['Negro', 'Rojo']
    },
    {
        id: 52,
        name: 'Powerbank B',
        price: 25000,
        description: 'Powerbank de 15000mAh, ofrece carga rápida y un diseño compacto, perfecto para viajes.',
        stock: 10,
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSh1Dyf_pOka7pPB9OZnqTXA62aVA8zA5t_ixqKWyqecd79CwaGosHgkhan2AijDYrh-Y0CskKW9ZysL1QJ5xIqkPrDUA-kgqCTT1kIVypttdMGHC43hZWB&usqp=CAE',
        category: 'powerbanks', 
        colors: ['Blanco', 'Azul']
    },
    {
        id: 53,
        name: 'Powerbank C',
        price: 30000,
        description: 'Powerbank de 20000mAh, con múltiples salidas USB y tecnología de carga rápida. Ideal para usuarios intensivos.',
        stock: 5,
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXdUVY0VrubWdgmP7D1GlgKdRBwljikusq-wPmHJrNFcLFzaJKGokffb5z3JnlGU46YCKvxwgXc3NwsRxxkNi98J-SYXUbMLPj1YHb4fEOi0IMuzMk8QV0&usqp=CAE',
        category: 'powerbanks', 
        colors: ['Verde', 'Negro']
    },
    {
        id: 54,
        name: 'Powerbank D',
        price: 30000,
        description: 'Powerbank de 20000mAh, con múltiples salidas USB y tecnología de carga rápida. Ideal para usuarios intensivos.',
        stock: 5,
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSCQf0ANhkvsSTR_c_7-J4W2KwtbD_vJVhekqcwJknymxAvM6PH10HP0pnYxt6FzgGgCrLClQ8bPd9eVbCcv5H8WlzwIcOckL_mXr00m4wscxdvgUvN8Jn&usqp=CAE',
        category: 'powerbanks', 
        colors: ['Verde', 'Negro']
    },
    {
        id: 55,
        name: 'Powerbank E',
        price: 30000,
        description: 'Powerbank de 20000mAh, con múltiples salidas USB y tecnología de carga rápida. Ideal para usuarios intensivos.',
        stock: 5,
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_-HPsvglj-UR5uHbAxAGm-Ta2XLAxDvXtpUGEwBYaKXgaCVinTcMgnSQqbU0-bL2WOm9cDl2YNlYyBC-1bN4pxYLR8mDb_Gvw3rKWMTO7k7xeZPq4d1LW&usqp=CAE',
        category: 'powerbanks', 
        colors: ['Verde', 'Negro']
    },
    {
        id: 56,
        name: 'Powerbank F',
        price: 30000,
        description: 'Powerbank de 20000mAh, con múltiples salidas USB y tecnología de carga rápida. Ideal para usuarios intensivos.',
        stock: 5,
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrUGhds4E5hMW9A6gl9Q9Fwf0tc_ESRrmo_aaKzuq6I4t0EgYarqVzSLEaq3SwAbDimpaxDVfPZgUWjL7vwVKZrvs_m9PVYxIIraBKSABYOaqh4l_mQfdx&usqp=CAE',
        category: 'powerbanks', 
        colors: ['Verde', 'Negro']
    },
    //cargadores
    {
        id: 201,
        name: 'Cargador A',
        price: 30000,
        description: 'Cargador rápido compatible con múltiples dispositivos, ideal para uso diario.',
        stock: 10,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhSMfFwMKlP9-BkxtmNJmBzE5Rmvwp_GVsFWAD1Vd2OK2WtJAlibASQ57psfDMKQK3jndj5td_vc2AFDAgfolxifsbq3_zY4D01Xw-QDS8m-qq03SK13wg&usqp=CAE',
        category: 'cargadores', 
        colors: ['Blanco', 'Negro']
    },
    {
        id: 202,
        name: 'Cargador B',
        price: 35000,
        description: 'Cargador con tecnología de carga rápida, compatible con dispositivos USB-C.',
        stock: 8,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRR4e_8GL3IxhDS1xlU7lpobUGSuBqaScN0T-S4PKX847zmVUt6FrC5bENsEEWzlCu6jMRI2Iqkk3pV_TwkcNDxG0mnlOVXYPlJ5V3i1Ehrm7sqcZ8p3sdm&usqp=CAE',
        category: 'cargadores', 
        colors: ['Blanco', 'Gris']
    },
    {
        id: 203,
        name: 'Cargador C',
        price: 40000,
        description: 'Cargador de alta potencia, ideal para tabletas y dispositivos de carga intensiva.',
        stock: 5,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHfVAbm9BXCH5a3Vv6hZtPsO-qP-P8alTcbLehlZcXqErdktbmripzsU9lvtAtSx0dnct5g_oQVLuo8ZRReGXIYZXt_9-4rl5hOdB4D9a5z_Rk7vU3fOx7&usqp=CAE',
        category: 'cargadores', 
        colors: ['Negro', 'Rojo']
    },
    {
        id: 204,
        name: 'Cargador D',
        price: 45000,
        description: 'Cargador portátil, ideal para llevar en viajes y mantener tus dispositivos cargados.',
        stock: 3,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzKLoRASFe66bDPpnEBlFVQSWfHQ_8ZBX6Ndu6C7RN8BhPBc04ZkMXFzYF47ZtJFdD-t4T9Ua0MIRy3DBz8y5Zf-rn99NtpZXlZbNJ4Qz2hzorVi3pyZicICA&usqp=CAE',
        category: 'cargadores', 
        colors: ['Blanco', 'Azul']
    },
    {
        id: 205,
        name: 'Cargador E',
        price: 50000,
        description: 'Cargador con múltiples puertos, perfecto para cargar varios dispositivos a la vez.',
        stock: 2,
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS0mATmu1RdDtcPMCzf5l65uvPlPhodO7mUA9EtUb1Hp1rvvMjruy9XOzFYqhuneSAGH6PwN7p5uwGK2Tb7PiFo8pCrELjT-sWLwm1cMidmEAy3n02tWqwV&usqp=CAE',
        category: 'cargadores', 
        colors: ['Negro', 'Blanco']
    },
    {
        id: 206,
        name: 'Cargador F',
        price: 55000,
        description: 'Cargador rápido y compacto, ideal para el hogar y la oficina.',
        stock: 1,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRpXnwkkmirwPo1KfiHcqwL1tEkoCGj2UlSBVEjqgEwFrZfwmKKkA5W6DZlfeOYVJUDsYsKgIyaGWuZFvc79u7kiwJPGZ46J0x_ICfQyB15cahS5x13F_VFPg&usqp=CAE',
        category: 'cargadores', 
        colors: ['Gris', 'Rojo']
    }
];

export default Products;

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(Products);
        }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = Products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = Products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};
//servicios
const Services = [
    
    {
        id: 1001,
        name: 'Paquete Internet Satelital A',
        price: 50000,
        description: 'Paquete que incluye servicio de Internet satelital con velocidad de hasta 10 Mbps, ideal para zonas rurales.',
        stock: 1,
        img: 'https://www.elcalbucano.cl/wp-content/uploads/2021/12/I.-Satelital-scaled.jpg',
        category: 'paquete' 
    },
    {
        id: 1002,
        name: 'Paquete Internet Satelital B',
        price: 70000,
        description: 'Paquete que incluye servicio de Internet satelital con velocidad de hasta 20 Mbps, ideal para streaming y trabajo remoto.',
        stock: 0,
        img: 'https://wibo.mx/wp-content/uploads/2018/05/dreamstime_s_12731635-compressor.jpg',
        category: 'paquete'
    },
    {
        id: 1051,
        name: 'Paquete Fibra Óptica A',
        price: 60000,
        description: 'Paquete que incluye servicio de Internet por fibra óptica con velocidad de hasta 100 Mbps, ideal para hogares y pequeñas empresas.',
        stock: 1,
        img: 'https://static.movistar.cl/og/fibra.jpg',
        category: 'paquete' 
    },
    {
        id: 1052,
        name: 'Paquete Fibra Óptica B',
        price: 90000,
        description: 'Paquete que incluye servicio de Internet por fibra óptica con velocidad de hasta 200 Mbps, ideal para usuarios intensivos.',
        stock: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RyjhLAtOMY_RGzSEis0fRas95gC80K-NMsWhqv8zr3LhIoqXwHXeap8O5KF1juynX_I&usqp=CAU',
        category: 'paquete'
    },
    {
        id: 1101,
        name: 'Paquete Básico',
        price: 100000,
        description: 'Paquete que incluye Internet satelital y teléfono fijo, ideal para familias.',
        stock: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RyjhLAtOMY_RGzSEis0fRas95gC80K-NMsWhqv8zr3LhIoqXwHXeap8O5KF1juynX_I&usqp=CAU',
        category: 'paquete' 
    },
    {
        id: 1102,
        name: 'Paquete Avanzado',
        price: 150000,
        description: 'Paquete que incluye Internet por fibra óptica y televisión, ideal para el entretenimiento.',
        stock: 1,
        img: 'https://www.formacionytecnologia.com/wp-content/uploads/2023/03/curso-internet.jpg',
        category: 'paquete' 
    }
];


export const getServices = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(Services);
        }, 2000);
    });
};

export const getServiceById = (id) => {
    return new Promise((res) => {
        const serviceFiltrado = Services.find((service) => service.id === parseInt(id));
        setTimeout(() => {
            res(serviceFiltrado);
        }, 2000);
    });
};

export const getServiceByCategory = (category) => {
    return new Promise((res) => {
        const serviciosFiltrados = Services.filter((service) => service.category === category);
        setTimeout(() => {
            res(serviciosFiltrados);
        }, 2000);
    });
};
