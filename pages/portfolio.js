import React, {useState} from 'react'
import styled from 'styled-components'
import Header from '../comps/header'
import Head from 'next/head'
import Button from '@material-ui/core/Button';

const MainContainer = styled.div`
    min-height: 600px;
    background-size: cover;
    background-image: url("/code.jpg");
    background-color: #0f0c22ca;
    background-blend-mode: darken;
    position: relative;
    &:before {

    }
`;

const Main = styled.div`

`;


const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 0px 1em;
`;

const Title = styled.p`
    font-weight: bold;
    font-size: 3em;
    text-align: center;
    color: #fff;
    margin: 12px 0px;
`;

const Subtitle = styled.p`
    font-size: 2em;
    text-align: center;
    color: #8193b2;
    margin: 0;
`;

const Wave = styled.img`
    position: absolute;
    bottom: -20px;
`;

const MainMargin = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 50px 1em;
`;

const ElephantTitle = styled.p`
    font-size: 2em;
    color: #040d21;
    margin: 0.5em 0px;
    font-weight: bold;
`;

const ElephantText = styled.div`
    width: 100%;
    max-width: 600px;
`;

const ElephantWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: ${props=>props.padding ? "50px 0px" : "0px 0px"};
    flex-direction: ${props=>props.direction ? "row-reverse" : "row"};
`;

const ElephantSubtitle = styled.p`
    font-size: 1.2em;
    color: #8193b2;
    margin: 0.5em 0px;
    margin-bottom: 1.5em;
`;


const ElephantPhone = styled.img`
    width: auto;
    max-width: ${props=>props.width ? "250px" : "300px"};
    border-radius: 20px;
    @media screen and (max-width: 787px) {
        display: none;
    }
`;

const ElephantOpen = styled.div`
    background: rgb(32,9,6);
    background: linear-gradient(143deg, rgba(32,9,6,1) 0%, rgba(4,13,33,1) 35%, rgba(55,7,36,1) 100%);
    width: 100%;
    margin: 50px 0px;
    max-height: ${props=>props.height ? "auto" : "0px"};
    overflow: hidden;
    transition: 0.3s max-height ease;
    border-radius: 30px;
`;

const MarginOpen = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: 100px 0px;
`;

const ElephantPhoneOpen = styled.img`
    display: block;
    width: 100%;
    max-width: 370px;
    margin: auto;
    margin-bottom: 2em;
    
`;

const ElephantTitleOpen = styled.p`
    text-align: center;
    color: #FFF;
    font-weight: bold;
    font-size: 3em;
    margin: 0.3em 0px;
`;

const ElephantSubTitleOpen = styled.p`
    text-align: center;
    color: #8193b2;
    font-size: 1em;
    max-width: 80%;
    margin: 0.3em auto;
`;

const MyRole = styled.div`
    width: 100%;
    padding: 100px 15px;
`;

const MyRoleTitle = styled.p`
    color: #FFF;
    font-weight: bold;
    font-size: 2em;
    margin: 0.3em 0px;
`;

const MyRoleSubTitle = styled.p`
    color: #8193b2;
    font-size: 1em;
    margin: 0.3em 0px;
`;

const Screenshot = styled.img`
    width: auto;
    max-width: ${props=>props.width ? "300px" : "400px"};
    margin: 0px 40px;
    border-radius: 20px;
    @media screen and (max-width: 787px) {
        display: none;
    }
`;

const Link = styled.a`
    display: block;
    color: #057ae2;
`;

const Portfolio = ({Height}) => {
    const [elephant, setElephant] = useState(false);
    const [veginner, setVeginner] = useState(false)
    return (
        <Main>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" /> 
            </Head>

            <MainContainer>
                <Wave src={"/wave.svg"}>

                </Wave>
                <Container>
                    <Header>

                    </Header>

                    <Title>PORTFOLIO</Title>
                    <Subtitle>Browse my Professional Portfolio here</Subtitle>
                </Container>
            </MainContainer>
            <MainMargin>
                <ElephantWrapper>
                    <ElephantText>
                        <ElephantTitle>
                            Elephant App
                        </ElephantTitle>
                        <ElephantSubtitle>
                            Elephant is a mobile application that helps intellectually disabled users find educators for their interests. In our team, I was responsible for creating all client side interactions and translating UI designs into quality code.
                        </ElephantSubtitle>
                        {elephant
                        ?
                            <Button onClick={()=> {
                                setElephant(false)
                            }} size={"large"} variant="contained" color="primary">
                            View Less
                            </Button>
                        :
                            <Button onClick={()=> {
                                setElephant(true)
                            }}  size={"large"} variant="contained" color="primary">
                            View More
                            </Button>

                        }
                    </ElephantText>
                    <ElephantPhone src={"/elephant-phone.png"}>

                    </ElephantPhone>

                </ElephantWrapper>
                <ElephantOpen height={elephant}>
                    <MarginOpen>
                        <ElephantPhoneOpen src={"/Mockup.png"}>

                        </ElephantPhoneOpen>
                        <ElephantTitleOpen>
                            Meet Elephant
                        </ElephantTitleOpen>
                        <ElephantSubTitleOpen>
                        Elephant is an app designed to help families or individuals living with a disability in BC to connect with and hire a support worker who wants to make a difference in someone's life. Through these connections we hope to help make it easier for families and individuals to have more control over the hiring process of staff who will be working with you or your loved one. 
                        </ElephantSubTitleOpen>
                        <MyRole>
                            <ElephantWrapper padding>
                                <ElephantText>
                                    <MyRoleTitle>My Frontend Journey</MyRoleTitle>
                                    <MyRoleSubTitle>
                                        I was the teams lead front-end developer. I ensured all of our pages and components are built correctly and function without any errors. I was also responsible for merging the front-end of the app to the back-end.   
                                    </MyRoleSubTitle>
                                </ElephantText>
                                <Screenshot src={"/screenshot.png"}>

                                </Screenshot>
                            </ElephantWrapper>

                            <ElephantWrapper padding direction>
                                <ElephantText>
                                    <MyRoleTitle>React Native Development</MyRoleTitle>
                                    <MyRoleSubTitle>
                                        This project was my first React Native project and probably the largest so far. It was challenging at first, especially getting used to a new syntax in a short period of time. After doing extensive practicing, I was able to translate our initial UI designs efficiently using React Native.
                                    </MyRoleSubTitle>
                                </ElephantText>
                                <Screenshot width src={"/react.png"}>

                                </Screenshot>
                            </ElephantWrapper>

                        </MyRole>
                    </MarginOpen>
                </ElephantOpen>


                <ElephantWrapper direction>
                    <ElephantText>
                        <ElephantTitle>
                            Veginner Web App
                        </ElephantTitle>
                        <ElephantSubtitle>
                            Veginner is a mobile web application that helps users find diet foods from different countries. In the team, I contributed to this apps frontend user interface by translating the UI design we collaborated on. This app was actually one of the first out of many react apps i've written. 
                        </ElephantSubtitle>
                        {veginner
                        ?
                            <Button onClick={()=> {
                                setVeginner(false)
                            }} size={"large"} variant="contained" color="primary">
                            View Less
                            </Button>
                        :
                            <Button onClick={()=> {
                                setVeginner(true)
                            }}  size={"large"} variant="contained" color="primary">
                            View More
                            </Button>

                        }
                    </ElephantText>
                    <ElephantPhone width src={"/veginner.png"}>

                    </ElephantPhone>

                </ElephantWrapper>
                <ElephantOpen height={veginner}>
                    <MarginOpen>
                        <ElephantPhoneOpen src={"/veginner-logo.png"}>

                        </ElephantPhoneOpen>
                        <ElephantTitleOpen>
                            Meet Veginner
                        </ElephantTitleOpen>
                        <ElephantSubTitleOpen>
                        Veginner is a web application dedicated to helping new healthy lifestyle enthusiast find food from different cultures across the world. Those who use this app, can choose from 3 specific diets including: vegan, lacto-vegetarian and pescatarian. Then the user can select where they want their food to come from.
                        </ElephantSubTitleOpen>
                        <MyRole>
                            <ElephantWrapper padding>
                                <ElephantText>
                                    <MyRoleTitle>My Frontend Journey</MyRoleTitle>
                                    <MyRoleSubTitle>
                                        As the frontend developer, I was responsible for translating the UI of the application to code. I was also responsible for making sure all interactions were user friendly and managing all component states through each page.  
                                    </MyRoleSubTitle>
                                </ElephantText>
                                <Screenshot src={"/veginner-screenshot.png"}>

                                </Screenshot>
                            </ElephantWrapper>

                            

                        </MyRole>
                    </MarginOpen>
                </ElephantOpen>
                
            </MainMargin>
         </Main>
    )
}

export default Portfolio