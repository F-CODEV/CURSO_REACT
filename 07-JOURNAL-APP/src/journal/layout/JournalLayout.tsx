import { Box, Toolbar } from "@mui/material";

import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";


export interface JournalLayoutProps {
    children: JSX.Element[] | JSX.Element

}
const drawerWidth = 240;

export const JournalLayout = ({ children }: JournalLayoutProps) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidth={drawerWidth} />
            <SideBar drawerWidth={drawerWidth} />
            <Box component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
