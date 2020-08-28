import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        red: '#FF5A5F',
        green: '#00A699',
        white: '#FFFFFF',
        blackDark: '#050505',
        grayExtraLight: '#F5F5F5'
    },
    fontFamily: 'Montserrat',
    sizes: {
        extraSmall: '12px',
        small: '16px',
        medium: '24px',
        large: '36px'
    }
}

export default function Theme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}