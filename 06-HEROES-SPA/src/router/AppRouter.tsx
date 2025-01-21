import { Route, Routes } from "react-router"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path="login" element={<LoginPage />}> </Route>
                {/* Cualquier ruta que no sea login */}
                <Route path="/*" element={<HeroesRoutes />}> </Route>

            </Routes>
        </>
    )
}
