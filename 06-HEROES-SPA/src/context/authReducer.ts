import { types } from "../types/types";




export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            // ...state, para solo modificar las propiedades que requiero
            //  y dejar las demas igual
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        case types.logout:
            return {
                logged: false,
            }
        default:
            return state;
    }
}