import React from 'react'
import styled from 'styled-components'

function NavButton({ children }) {
    return (
        <NavButtonStyle>
            {children}
        </NavButtonStyle>
    )
}

export default NavButton

const NavButtonStyle = styled.button`
    min-width: 75px;
    height: 30px;
    
    border-radius: 15px;
    cursor: pointer;
    border: solid .5px;
    border-color: #ccc;
    background: transparent;

    &:hover {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    }
`