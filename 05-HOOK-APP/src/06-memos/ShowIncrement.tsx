import React from "react";

export interface showIncrementProps {
    increment: (value: number) => void,
}

// ? El componente esta memorizado
export const ShowIncrement = React.memo(({ increment }: showIncrementProps) => {
    console.log('Me volvi a generar');

    return (
        <button className="btn btn-primary"
            onClick={(e) => increment(5)}
        >Incrementar</button>
    )
}

)
