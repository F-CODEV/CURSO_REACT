import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
    logged: false,
    user: null,
}

const init = () => {
    const local = localStorage.getItem('user');
    if (local === null) {
        return { logged: false, user: null };
    }
    const user = JSON.parse(local);
    return { logged: true, user };
}

export const AuthProvider = ({ children }) => {

    // Manejo de estado puede ser reducer o useState
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name: string) => {
        const user = {
            id: 'ABC',
            name: name,
        };
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
            type: types.login,
            payload: user
        });
    }

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({
            type: types.logout
        });
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
