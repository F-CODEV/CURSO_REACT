import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
export const purpleTheme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#262254',
        },
        secondary: {
            main: '#543884',
        },
        error: {
            main: red.A400,
        },
    },
});
