import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>CounterWithCustomHook: {counter} </h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={(e) => increment(2)}
            >+1</button>
            <button className="btn btn-primary"
                onClick={reset}
            >Reset</button>
            <button className="btn btn-primary"
                onClick={(e) => decrement(3)}
            >-1</button>
        </>
    )
}