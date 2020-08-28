import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`   
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme: { fontFamily } }) => fontFamily}, sans-serif;
        color: ${({ theme: { colors } }) => colors.blackDark};
    }
`

export default GlobalStyle