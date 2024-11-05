//Importaciones necesarias
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//se importa el archivo asyncmock para tener una base de datos
import { getProductByCategory } from "../../data/asyncMock";
//itemlist para la lista de items
import ItemList from "../ItemList/ItemList";
//loading para la carga
import Loading from "../Loading/Loading";

export default function ProductsCategory() {
    //Declaración de estado
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams(); // se obtiene el id de la categoria desde los params

    //Efecto para cargar productos según la categoría
    useEffect(() => {
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]); //se vuelve a ejecutar si categoryId cambia

    return (
        <div className="container mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[1170px] py-4 px-2">
            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <Loading />
                </div>
            ) : (
                <ItemList products={products} /> //se pasa la lista de productos al componente ItemList
            )}
        </div>
    );
};
