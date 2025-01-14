import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);



    return (
        <>
            <h1>Login</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button className="btn btn-primary"
                onClick={(e) => setUser({
                    id: 123,
                    name: 'Francisco',
                    email: 'fcodev@mail.com'
                })}
            >Establecer usuario</button>
        </>
    )
}
