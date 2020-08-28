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

        min-height: 100vh;
        width: 100vw;
        overflow-x: hidden;

        background: ${({ theme: { colors } }) => colors.white};

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export default GlobalStyle