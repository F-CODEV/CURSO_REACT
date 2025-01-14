import { useState } from "react"
import { UserContext } from "./UserContext"


// const user = {
//     id: 123,
//     name: 'Francisco',
//     email: 'fcodev@mail.com'
// }

export interface UserProviderI {

    user?: UserI,
    setUser: React.Dispatch<React.SetStateAction<UserI | undefined>>
}

export interface UserI {
    id: number,
    name: string,
    email: string,
}


// * Provider: proveer toda la info que el userContext da al arbol de componentes
export const UserProvider = (children) => {
    const [user, setUser] = useState<UserI>()
    return (
        <UserContext.Provider
            value={{ user, setUser }}
            {...children}
        >

        </UserContext.Provider>
    )
}
