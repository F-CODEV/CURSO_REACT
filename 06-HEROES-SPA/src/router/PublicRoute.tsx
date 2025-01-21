import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') ?? '/';

    return (!logged)
        ? children
        : <Navigate to={lastPath} />
}
