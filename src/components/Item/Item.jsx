export default function Item({ id, name, price, img }) {
  return (
    //muestra informacion del producto
      <div className="flex flex-col items-center mx-2 my-4 p-4 bg-[#f0f0f0] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 sm:mx-4 sm:my-6 md:my-8 md:p-6 lg:my-10">
          <img src={img} alt="Imagen de Producto" className="w-[100px] h-[100px] rounded-full sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]" />
          <h3 className="text-[20px] font-semibold my-2 tracking-[1px] capitalize text-[#1e293b] hover:text-[#ff5c8a] sm:text-[22px] md:text-[24px]">
              {name}
          </h3>
          <h4 className="text-[18px] font-medium mb-3 text-[#4b5563] sm:text-[20px]">{price}</h4>
      </div>
  );
}
