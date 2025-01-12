import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterations: number = 5000) => {
    for (let index = 0; index < iterations; index++) {
        console.log('Iterando....');
    }
    return `${iterations}`;
}



// * Con memo solo cuando counter cambie se vuelve a renderiza Small
export const MemoHook = () => {
    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);
    // ? Memoriza un valor
    // ? Solo cambia cuando counter cambia
    // ? Entonces al cambiar show no cambia counter
    const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr />
            <h4>{memorizeValue} </h4>
            <button className="btn btn-primary"
                onClick={() => increment()}
            > +1 </button>
            <button className="btn btn-outline-primary"
                onClick={() => setShow((s) => !s)}
            >
                Show/Hide  {JSON.stringify(show)}

            </button>
        </>
    )
}
