import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'fcodev',
        email: 'fcodev@mail.com'
    });
    const { username, email } = formState;

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        // ? Propiedades computadas
        setFormState((f) => ({ ...f, [name]: value }))
    }
    // ?  Si no tiene dependencias solo se ejecuta la primera vez
    useEffect(() => {
        // console.log('Primero');

    }, [])
    // ? Se romienda un effect por cada accion
    // ? Se ejecuta cada que su dependencia cambia
    useEffect(() => {
        // console.log('Form cambio');

    }, [formState])

    useEffect(() => {
        // console.log('Email cambio');

    }, [email])



    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <input type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
            />
            <input type="text"
                className="form-control mt-2"
                placeholder="email@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {username === 'fcodev2' && <Message />}
        </>
    )
}
