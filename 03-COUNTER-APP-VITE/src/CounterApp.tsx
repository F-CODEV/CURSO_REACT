import { useState } from "react";



export const CounterApp = ({ value }: CounterAppProps) => {

    const [counter, setCounter] = useState(value);
    // ? Si se ocupa el event
    const handleAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // setCounter(counter + 1);
        // ? Donde c es el valor actual de counter
        setCounter((c) => c + 1);

    }
    // ? Forma corta porque no se usa el event
    const handleSubtract = () => setCounter((c) => c - 1);
    const handleReset = () => setCounter(value);


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            {/* <button onClick={(event) => handleAdd(event)}>+1 */}
            {/* Forma Corta */}
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export interface CounterAppProps {
    value: number
}
