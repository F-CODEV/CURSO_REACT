import { useRef } from "react";

// * useRef nos permite mantener la referencia
// * para que cuando la referencia cambie no se vuelva a renderizar


export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>((<input />).type);

    const onClick = () => {
        // console.log(inputRef);
        // inputRef.current.select();
        inputRef.current.focus();

    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control" />

            <button className="btn btn-primary mt-2"
                onClick={onClick}
            >Set Focus</button>
        </>
    )
}
