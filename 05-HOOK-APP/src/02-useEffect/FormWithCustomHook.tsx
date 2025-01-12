import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;


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
            <input type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="btn btn-primary mt-2"
                onClick={onResetForm}
            >Borrar</button>

        </>
    )
}
