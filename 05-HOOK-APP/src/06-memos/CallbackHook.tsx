import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

// * useCallback para memorizar  funciones

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    // ? Memorizamos la funcion
    // ? Si la funcion tien propiedades se colocan en value sino vacio
    const increment = useCallback(
        (value: number) => {
            setCounter((c) => c + value)
        },
        [],
    )
    // ! El useEffect no sirve para memorizar funciones
    // useEffect(() => {
    //     increment();
    // }, [increment])



    // ? Las funciones y objetos SIEMPRE apuntan a posiciones de memoria DIFERENTES
    // const increment = () => {
    //     setCounter((c) => c + 1)
    // }
    return (
        <>
            <h1>useCallback Hook: {counter} </h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    )
}
