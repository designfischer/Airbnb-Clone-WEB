import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    height: 80px;
    width: 100%;
    overflow-x: hidden;

    background: ${({ theme: { colors } }) => colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
`