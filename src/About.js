import React from 'react'
import HeroSection from './components/HeroSection'
import styled from 'styled-components'

const About = () => {
    const data = {
        name: "Argha E-Commerce"
    }

    return <Wrapper>
        <HeroSection myData={data} />
    </Wrapper>
}

const Wrapper = styled.section`
    /* background-color: ${({ theme }) => theme.colors.bg}; */
    /* width: 100vw; */
`

export default About