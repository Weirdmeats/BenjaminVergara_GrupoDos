import { PulseLoader } from 'react-spinners';
//efecto cargando
export default function Loading() {
    return (
        <div className="flex justify-center items-center h-[50vh]">
            <PulseLoader color="#2D3A4B" size={20} />
        </div>
    );
}
