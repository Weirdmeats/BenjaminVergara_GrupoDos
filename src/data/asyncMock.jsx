
const Products = [
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

const Services = [
    {
        id: 6,
        name: 'Internet Satelital Básico',
        price: 250000,
        description: 'Servicio de internet satelital básico ideal para hogares. Ofrece una velocidad de hasta 25 Mbps, perfecta para navegar y realizar videollamadas. Incluye instalación gratuita.',
        stock: 10,
        img: 'https://example.com/image1.jpg',
        category: 'internet satelital',
        speeds: ['25 Mbps', '5 Mbps de carga'],
        contractDuration: '12 meses'
    },
    {
        id: 7,
        name: 'Fibra Óptica Premium',
        price: 350000,
        description: 'Este servicio de fibra óptica proporciona velocidades de hasta 100 Mbps, ideal para familias con múltiples dispositivos. Incluye un router Wi-Fi de última generación y soporte técnico 24/7.',
        stock: 8,
        img: 'https://example.com/image2.jpg',
        category: 'fibra óptica',
        speeds: ['100 Mbps', '20 Mbps de carga'],
        contractDuration: '24 meses'
    },
    {
        id: 8,
        name: 'Internet Satelital Avanzado',
        price: 450000,
        description: 'Servicio de internet satelital avanzado con velocidad de hasta 50 Mbps, ideal para streaming y gaming. Incluye instalación y equipo gratuito. Ideal para zonas rurales.',
        stock: 5,
        img: 'https://example.com/image3.jpg',
        category: 'internet satelital',
        speeds: ['50 Mbps', '10 Mbps de carga'],
        contractDuration: '12 meses'
    },
    {
        id: 9,
        name: 'Fibra Óptica Familiar',
        price: 550000,
        description: 'Servicio de fibra óptica diseñado para familias grandes, con velocidades de hasta 200 Mbps. Incluye acceso a streaming 4K y instalación rápida y gratuita.',
        stock: 3,
        img: 'https://example.com/image4.jpg',
        category: 'fibra óptica',
        speeds: ['200 Mbps', '40 Mbps de carga'],
        contractDuration: '36 meses'
    },
    {
        id: 10,
        name: 'Paquete Internet + TV',
        price: 700000,
        description: 'Paquete completo que incluye internet de fibra óptica de 100 Mbps y acceso a canales de TV premium. Ideal para quienes buscan entretenimiento completo en casa. Incluye instalación gratuita y soporte técnico.',
        stock: 6,
        img: 'https://example.com/image5.jpg',
        category: 'paquete',
        speeds: ['100 Mbps', '20 Mbps de carga'],
        contractDuration: '24 meses'
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
        const service = Services.find((s) => s.id === parseInt(id));
        setTimeout(() => {
            res(service); 
        }, 2000);
    });
};


export const getServiceByCategory = (category) => {
    return new Promise((res) => {
        const filteredServices = Services.filter((s) => s.category === category);
        setTimeout(() => {
            res(filteredServices);
        }, 2000);
    });
};
