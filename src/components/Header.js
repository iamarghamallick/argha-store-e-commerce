import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'

const Header = () => {
    return (
        <MainHeader>
            <NavLink to={"/"}>
                <img src="./images/logo.png" alt="logo" style={{ "height": "6rem" }} />
            </NavLink>
            <Nav />
        </MainHeader>
    )
}

const MainHeader = styled.header`
    padding: 0 5rem;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default Header