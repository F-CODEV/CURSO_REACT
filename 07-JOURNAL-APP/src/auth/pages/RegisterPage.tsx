import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
    // sx style, tenemos acceso al theme que definimos
    // xs tamaño de la pantalla
    return (
        <AuthLayout title="Crear cuenta">
            <form >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo" type="text"
                            placeholder="Jhon Doe"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo" type="email"
                            placeholder="mail@email.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña" type="password"
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            {/* Se expande a todo el tamaño del padre */}
                            <Button variant="contained" fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>


                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link
                            component={RouterLink}
                            color="inherit"
                            to="/auth/login"
                        >
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>



    )
}
