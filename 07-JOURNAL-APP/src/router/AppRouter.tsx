import { Route, Routes } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            {/* Login y Registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />
            {/* Journal APP  */}
            <Route path="/*" element={<JournalRoutes />} />
        </Routes>
    )
}