import { Navigate, Route, Routes } from "react-router"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>Main APP</h1> */}
            <Navbar />
            <hr />
            {/* El orden importa */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                {/* wilecard o comodin para cuando no existen las anteriores */}
                {/* <Route path="/*" element={<LoginPage />} /> */}
                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>

        </UserProvider>
    )
}
