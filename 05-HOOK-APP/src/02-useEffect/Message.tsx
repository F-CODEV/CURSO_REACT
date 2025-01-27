import { useEffect, useState } from "react";



export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    // ? Podemos ejecutar algo cuando el componente
    // ? Se muestra o destruye
    useEffect(() => {
        // console.log('Montado');
        const onMouseMove = ({ x, y }: globalThis.MouseEvent) => {
            // const coords = { x, y };
            // console.log(coords);
            setCoords({ x, y })


        }
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            // console.log('Des Montado');
            // ! Si no se demonta ERROR
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])


    return (
        <>
            <h3>Usuario ya existe</h3>
            <code>{JSON.stringify(coords)}</code>
        </>
    )
}
