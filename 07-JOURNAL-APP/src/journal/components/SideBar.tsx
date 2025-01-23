import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export interface SideBarProps {
    drawerWidth: number
}
export const SideBar = ({ drawerWidth }: SideBarProps) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer
                variant="permanent" //temporary si queremos ocultarlo de manera condicional
                open
                // open={true} para forma larga
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Francisco
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {['Enero', 'Febrero', 'Marzo', 'Abril'].map((e) => {
                        return <ListItem key={e} disablePadding>
                            <ListItemButton >
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container >
                                    <ListItemText

                                        primary={e}
                                        secondary={"Nostrud dolore aliqua mollit officia amet sit enim Lorem eiusmod cupidatat."}
                                    />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    })}
                </List>

            </Drawer>

        </Box>
    )
}
