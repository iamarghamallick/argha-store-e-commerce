import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PageNavigation = ({ category, title }) => {
    return (
        <Wrapper>
            <h3><NavLink to='/'>Home</NavLink> / {category} / {title}</h3>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

export default PageNavigation