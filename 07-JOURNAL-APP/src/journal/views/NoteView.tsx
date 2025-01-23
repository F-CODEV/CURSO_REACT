import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
    // El Box es como div
    //  Grid puede definir elementos internamente alineacion, etc.
    return (
        <Grid
            container direction="row"
            justifyContent="space-between" sx={{ mb: 1 }}
            alignItems="center"
        >
            <Grid item>
                <Typography fontSize={38} fontWeight="light">
                    28 de Agosto, 2025
                </Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"

                    minRows={5}
                />
            </Grid>
            <ImageGallery />

        </Grid>
    )
}
