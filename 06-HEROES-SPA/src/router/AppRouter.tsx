import { Route, Routes } from "react-router"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />
                {/*  OTRA FORMA */}
                {/* <Route path="login/*" element={
                    <Routes>
                        <Route path="/*" element={<LoginPage />} />
                    </Routes>
                } /> */}
                {/* <Route path="login" element={<LoginPage />}> </Route> */}
                {/* Revsio si esta autenticado */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
                {/* Cualquier ruta que no sea login */}
                {/* <Route path="/*" element={<HeroesRoutes />}> </Route> */}

            </Routes>
        </>
    )
}
