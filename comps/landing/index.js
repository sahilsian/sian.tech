import React from "react"
import styled from "styled-components"
import Header from "../header"
import CurrentQueueIcon from "../currentqueue"
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

const MainContainer = styled.div`
    @media (min-width: 768px) {
        height: 94vh;
        min-height: 760px;
        background: rgb(32,9,6);
        background: linear-gradient(143deg, rgba(32,9,6,1) 0%, rgba(4,13,33,1) 35%, rgba(55,7,36,1) 100%);
        border-radius: 0 0 40% 0%;
    }
`;


const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 0px 1em;
`;

const Hero = styled.div`
    width: 100%;
    padding: 0px 1em;
    position: relative;
    display: flex;
`;

const HeroMKTG = styled.div`
    width: auto;
    padding-bottom: 35px;
`;

const Heading = styled.h1`
    font-size: 3em;
    color: #ffffff;
    line-height: 100%;
    margin: 1.3rem 0px;

    span {
        color: #2e9dff;
    }
`;

const SubHeading = styled.p`
    color: #8193b2;
    font-size: 1.5em;
    margin: 1rem 0px;

`;

const CurrentQueue = styled.p`
    display: flex;
    justify-content: space-between;
    width: 90%;
`;

const Sahil = styled.img`
    width: auto;
    max-width: 300px;
    border-radius: 100%;
    margin: auto;
    display: block;

`;

const ImageWrapper = styled.div`
    position: relative;
    flex: 1;
`;



const Landing = () => {
    return (
        <MainContainer>
            <Container>
                <Header></Header>
                <Hero>
                    
                    <HeroMKTG>
                        <Heading><span>Hi, I'm Sahil!</span> Your Frontend Developer & Designer</Heading>
                        <SubHeading>Welcome to my development world! <span style={{color: "#ffffff"}}>I'm a Frontend Developer/Designer</span> & an Aspiring Fullstack Developer from British Columbia, Canada.</SubHeading>
                        <CurrentQueue>
                            
                            <Button size={"large"} variant="contained" color="primary">
                            Get in Touch!
                            </Button>
                        </CurrentQueue>
                    </HeroMKTG>
                    <ImageWrapper>
                        <Sahil src={"/sahil.jpg"}>
                        </Sahil>
                    </ImageWrapper>
                   
                </Hero>
            </Container>
        </MainContainer>
    )
}

export default Landing;