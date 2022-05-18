import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline } from '@mui/material'
import { blue, purple } from '@mui/material/colors'
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
