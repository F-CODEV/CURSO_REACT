import React from "react";

export interface SmallProps {
    counter: number
}

// * Solo cuando el rendimiento se ve afectado

export const Small = React.memo(({ counter }: SmallProps) => {
    console.log('Me Volvi a dibujar :(');

    return (
        <small>{counter}</small>
    )
})
