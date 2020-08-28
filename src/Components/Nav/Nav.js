import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import HeaderLogo from '../../Assets/Logo/HeaderLogoAirbnb.svg'
import NavButton from '../Button/NavButton/NavButton'

function Nav() {
    return (
        <NavWrapper>
            <LogoImg src={HeaderLogo} alt="logo Airbnb" />
            <NavItems>
                <Paragraph>Torne-se um anfitrião</Paragraph>
                <Link to="/">
                    <NavButton>Entrar</NavButton>
                </Link>                
            </NavItems>
        </NavWrapper>
    )
}

export default Nav

const NavWrapper = styled.nav`
    max-width: 1200px;
    width: 90%; 
    height: 100%;   

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;    
`

const LogoImg = styled.img`
    max-width: 100px;
`

const NavItems = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Paragraph = styled.p`
    font-size: 10px;
    margin-right: ${({ theme: { sizes } }) => sizes.small};
`
