import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    // ? Se puede usar un memo para evitar que se vuelva a renderizar
    // ? si el valor no cambia
    const lastPath = `${pathname}${search}`;
    // ? O podemos usar un useEffect con la dependencia de lastPath
    logged && localStorage.setItem('lastPath', lastPath);

    return (logged)
        ? children
        : <Navigate to="/login" />
}
