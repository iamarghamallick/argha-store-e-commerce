import React from 'react';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';

const Home = () => {
    const data = {
        name: "Argha Store"
    }

    return <Wrapper>
        <HeroSection myData={data} />
    </Wrapper>
}

const Wrapper = styled.section`
    /* background-color: ${({ theme }) => theme.colors.bg}; */
    /* width: 100vw; */
`
export default Home;