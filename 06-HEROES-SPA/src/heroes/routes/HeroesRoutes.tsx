import { Navigate, Route, Routes } from "react-router"
import { Navbar } from "../../ui/components/Navbar"
import { DcPage } from "../pages/DcPage"
import { Hero } from "../pages/Hero"
import { MarvelPage } from "../pages/MarvelPage"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />}> </Route>
                    <Route path="dc" element={<DcPage />}> </Route>
                    <Route path="search" element={<SearchPage />}> </Route>
                    {/* Ruta con parametro */}
                    <Route path="hero/:id" element={<Hero />}> </Route>

                    {/* HERO BY ID */}
                    <Route path="/" element={<Navigate to="/marvel" replace />} > </Route>
                </Routes>
            </div>
        </>
    )
}
