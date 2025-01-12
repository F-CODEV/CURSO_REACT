import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";



// * Con memo solo cuando counter cambie se vuelve a renderiza Small
export const Memorize = () => {
    const { counter, increment } = useCounter();

    const [show, setShow] = useState(true)
    return (
        <>
            <h1>Counter: <Small counter={counter} /> </h1>
            <hr />
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
