import { useState } from "react";

interface CounterState {
    counter1: number,
    counter2: number,
    counter3: number,
}

const initialState = {
    counter1: 10,
    counter2: 20,
    counter3: 30,
}

export const CounterApp = () => {
    const [{ counter1, counter2, counter3 }, setCounter] = useState<CounterState>(initialState);
    return (
        <>
            <h1>Counter1: {counter1} </h1>
            <h1>Counter2: {counter2} </h1>
            <h1>Counter3: {counter3} </h1>
            <hr />
            <button
                onClick={(event) => setCounter((c) =>
                ({
                    ...c,
                    counter1: c.counter1 + 1,
                })
                )

                }
                className="btn"
            >+1</button>
        </>
    )
}
