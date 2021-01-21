import React from 'react'
import styled from 'styled-components'
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import Fade from 'react-reveal/Fade';
import { Button } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Particles from 'react-particles-js';
import Footer from '../footer';

const Content = styled.div`
    width: 100%;
`;

const Margin = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
    padding: 70px 15px;

    
`;

const ExtendedMargin = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0px auto;
    padding: 50px 0px;
`;

const ComingSoonBox = styled.div`
    width: 100%;
    max-width: 950px;
    margin: 0px auto;
    border-radius: 8px;
    border: 1px solid #eeeeee;
    box-shadow: 1px 1px 5px #eeeeee;
    padding: 30px 70px;
    display: flex;
    background-color: #fff;

    
    
`;

const Heading = styled.p`
    color: #8193b2;
    font-size: 1.5em;
    margin: 0;
    line-height: 100%;
`;

const SubHeading = styled.p`
    color: #040d21;
    font-size: 1.5em;
    margin: 0;
    font-weight: bold;
    display: inline;
    margin-right: 5px;
`;

const FlexText = styled.div`
    flex: 1;
    padding: 0px 10px;
    @media screen and (max-width: 787px) {
        text-align: center;
    }
    
`;

const FlexImage = styled.div`
    flex: 1;
    padding: 0px 10px;
    display: flex;
    @media screen and (max-width: 787px) {
        display: none;
    }
`;

const P = styled.p`
    font-size: 1em;
    color: #8193b2;
`;

const Avatar = styled.img`
    width: auto ;
    height: 150px;
    box-shadow: 1px 1px 5px #eeeeee;
    position: relative;

    @media screen and (max-width: 787px) {
        display: none;
    }
`;

const InterestWrap = styled.div`
    flex: 0.5;
    flex-direction: column;
    display: flex;
    align-items: flex-end;
    padding: 0px 20px;

    @media screen and (max-width: 787px) {
        display: none;
    }
`;

const Interest = styled.p`
    display: inline;
    color: #040d21;
    background-color: #fecdb9;
    padding: 5px 25px;
    border-radius: 10px;
    margin: 7px 0px;
    font-size: 0.75em;
    color: #ffffff;
    font-weight: bold;
    box-shadow: 1px 1px 5px #eeeeee;
`;

const Details = styled.div`
    width: 100%;
    padding: 50px 10px;
    display: flex;
    flex-direction: row-reverse;
    @media screen and (max-width: 787px) {
        text-align: center;
    }
`;

const DetailsImg = styled.div`
    flex: 1;
    margin: 0px 10px;
    @media screen and (max-width: 787px) {
        display: none;
    }
`;

const UserList = styled.div`
    flex: 1.5;
    margin: 0px 10px;
    
`;

const RoboDude = styled.img`
    width: auto;
    max-width: 200px;
    margin: auto;
    display: block;

    @media screen and (max-width: 787px) {
        display: none;
    }
`;

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-around;
`;

const Title = styled.p`
    color: #040d21;
    margin: 0.25em 0px;
    font-size: 2em;
    font-weight: bold;
`;

const ViewAll = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0px;
`;

const WoofName = styled.a`
    position: absolute;
    color: #fff;
    background-color: #8193b2;
    padding: 4px 9px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: bold;
    transform: rotate(-20deg);
    bottom: 0;
    right: -10px;
    box-shadow: 1px 1px 10px #eee;
`;

const NewHorizon = styled.div`
    width: 100%;
    background: linear-gradient(143deg, rgba(32,9,6,1) 0%, rgba(4,13,33,1) 35%, rgba(55,7,36,1) 100%);
    padding: 100px 0px;
`;

const NewHorizonMargin = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 50px 30px;
    margin: auto;
    border-radius: 100px;
`;

const HeadingHorizon = styled.p`
    color: #fff;
    font-size: 2.5em;
    font-weight: bold;
    margin: 1.3rem 0px;
    position: relative;
`;

const HeadingHorizonTwo = styled.p`
    color: #fff;
    font-size: 2.5em;
    font-weight: bold;
    margin: 1.3rem 0px;
    text-align: right;
`;

const HeadingHorizonSub = styled.p`
    font-size: 1.2em;
    color: #8193b2;
    max-width: 75%;
`;

const HeadingHorizonSubTwo = styled.p`
    font-size: 1.2em;
    color: #8193b2;
    max-width: 75%;
    text-align: right;
    margin-left: auto; 
`;

const DesignWrapper = styled.div`
    position: absolute;
    right: 250px;
    top: 150px;
`;

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid #8193b2;
    border-radius: 20px;
`;

const Line = styled.div`
    border: 1px solid #8193b2;
    height: 250px;
    width: 0px;
    margin-left: 9px;
`;

const Reaction = styled.img`
   width: 100%;
`;

const ReactionWrapper = styled.div`
    max-width: 400px;
    width: auto;
`;

const HorizontalLine = styled.div`
    border: 1px solid #8193b2;
    height: 0px;
    width: 550px;
    margin-left: 9px;
    position: absolute;
    left: -559px;
    bottom: 10px;
`;

const ReactionAndText = styled.div`
    display: flex;
    padding: 30px 0px;
`;

const ReactionPara = styled.p`
    color: #8193b2;
    max-width: 40%;

    span {
        color: #fff;
    }
`;

const ReactionParaTwo = styled.p`
    color: #8193b2;
    max-width: 40%;
    text-align: right;
    margin-left: auto;
    span {
        color: #fff;
    }
`;

const HorizonWrap = styled.div`
    margin-left: 70px;

`;

const HorizonWrapTwo = styled.div`
    margin-right: 70px;
    .right {
        max-width: 155px;
        display: block;
        margin-left: auto;
    }
`;

const CTA = styled.div`
    width: 100%;
    min-height: 100px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
`;

const CTAWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    background-color: #fff;
    margin: auto;
    padding: 100px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const CTAHeading = styled.p`
    color: #040d21;
    font-size: 2em;
    text-align: center;
    font-weight: bold;
    margin: 1em 0px;
`;

const DiceWallpaper = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.15;
`;

const PricingChart = styled.div`
    width: 100%;
    max-width: 300px;
    padding: 30px 40px;
    box-shadow: 1px 1px 10px #eee;
    background-color: #fff;
    position: relative;
    margin: 20px 20px;
    height: auto;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Tag = styled.span`
    position: absolute;
    top: -20px;
    left: -20px;
    color: #FFF;
    background-color: #8193b2;
    display: inline;
    padding: 8px 35px;
    font-weight: bold;
    box-shadow: 1px 1px 10px #aab9bf;
    border-radius: 4px;
`;

const PricingImage = styled.img`
    width: 100%;
    display: block;
    max-width: 120px;
    margin: 0px auto;
    
`;

const ViewMore = styled.p`
    margin: 0px;
    width: 100%;
    text-align: center;
    padding: 14px 0px;
    margin-top: 20px;
    border-top: 1px solid #eee;
    font-weight: 500;
`;

const HomeContent = ({}) => {
    return (
        <Content>
            
            <Margin>
            <Fade bottom>
                <ComingSoonBox>
                    <FlexText>
                        <Heading>Shoot me a Message on</Heading>
                        <SubHeading>LinkedIn.com</SubHeading> <ShareRoundedIcon style={{fontSize: '18px'}}></ShareRoundedIcon>
                        <P>I'm always looking to build connections whether you're another developer looking to collaborate or you're just seeking my skills!</P>
                        <Button href={"https://www.linkedin.com/in/sahil-sian-5305b7198/"} variant="outlined" color={"primary"}>See my LinkedIn Profile</Button>
                   </FlexText>

                    <FlexImage>
                        <InterestWrap>
                                
                        </InterestWrap>
                        <Avatar src="/linkedin.png">
                        </Avatar>
                   </FlexImage>
                </ComingSoonBox>
            </Fade>

                
            </Margin>
            <ExtendedMargin>
                <Details>
                    <DetailsImg>
                        <RoboDude src={"/sahil.svg"}></RoboDude>
                    </DetailsImg>
                    <UserList>
                        <Title>Some Assets that I Use</Title>
                        <P>Here are some of the major assets I use when developing & designing. Feel free to ask me more about my skillset anytime!</P>
                        <Wrap>
                            <PricingChart>
                                <Tag style={{backgroundColor: "#53c1de"}}>React & Native</Tag>
                                <PricingImage src={"/react.png"}></PricingImage>
                            </PricingChart>
                            <PricingChart>
                                <Tag style={{backgroundColor: "#fed93d"}}>HTML/CSS/JS</Tag>
                                <PricingImage src={"/html-css-js.png"}></PricingImage>
                            </PricingChart>
                            <PricingChart>
                                <Tag style={{backgroundColor: "#da1f26"}}>Adobe Suite</Tag>
                                <PricingImage src={"/creative-cloud.png"}></PricingImage>
                            </PricingChart>
                            <PricingChart style={{backgroundColor: "#eee"}}>
                                <Tag style={{backgroundColor: "#536b37"}}>Learning Node</Tag>
                                <PricingImage src={"/nodejs.png"}></PricingImage>
                            </PricingChart>
                            
                        </Wrap>
                        <ViewAll>
                            {/* <Fade bottom>
                                <Button size={"large"} variant="contained" color={"primary"}>Check out All our Servers!</Button>
                            </Fade> */}
                        </ViewAll>
                    </UserList>
                </Details>
            </ExtendedMargin>
            {/* <NewHorizon>
                <Particles style={{position: "absolute", opacity: "0.2"}} />
                <NewHorizonMargin>
                    <Fade left>
                    <HeadingHorizon>A New Horizon of Discord...</HeadingHorizon>
                    <HeadingHorizonSub>Dismegle is never before created on Discord. It takes the fun of random chatting from Omegle and transforms it into an interactive and rewarding experience that guarentees you to make a friend!</HeadingHorizonSub>
                    
                    <ReactionAndText>
                        <ReactionWrapper>
                            <Reaction src={"/reaction.png"}></Reaction>
                        </ReactionWrapper>
                        <HorizonWrap>
                        <ReactionPara>All you have to do to start is first click the reaction inside the <span>#get-queued</span> channel inside Dismegle</ReactionPara> 
                        <Button variant="outlined" color={"primary"}>Create Yours Now!</Button>
                        </HorizonWrap>
                    </ReactionAndText>
                    </Fade>
                </NewHorizonMargin>
                <NewHorizonMargin>
                    <Fade right>

                    <HeadingHorizonTwo>Everything is Controlled by Bots</HeadingHorizonTwo>
                        <HeadingHorizonSubTwo>Dismegle is literally controlled by a sequence of bots working together. Our dream for this server was to manage every single detail in the server with bots. The idea was simple, but it took a lot of hard work to pioneer a system that was never before seen on discord.</HeadingHorizonSubTwo>
                        
                        <ReactionAndText>
                            <HorizonWrapTwo>
                                <ReactionParaTwo><span>Dismegle Bot</span> is the bread and butter of our server. Dismegle needs it to run in order for the server to work.</ReactionParaTwo> 
                                <span class="right"><Button variant="outlined" color={"primary"}>See it in Action!</Button></span>
                            </HorizonWrapTwo>
                            <ReactionWrapper>
                                <Reaction src={"/dismegle.png"}></Reaction>
                            </ReactionWrapper>
                            
                        </ReactionAndText>
                    </Fade>
                    
                </NewHorizonMargin>
                <Particles style={{position: "absolute", opacity: "0.2"}} />
                <NewHorizonMargin>
                    <Fade left>
                    <HeadingHorizon>Inspired from Omegle</HeadingHorizon>
                    <HeadingHorizonSub>Dismegle is a combination of Discord and the popular random chatting site called Omegle. Our dedication came from creating a safer and more fun experience than Omegle and we succeded well! With over 3000 members in our server, it's easy to make a friend.</HeadingHorizonSub>
                    
                    <ReactionAndText>
                        <ReactionWrapper>
                            <Reaction src={"/chat.png"}></Reaction>
                        </ReactionWrapper>
                        <HorizonWrap>
                        <ReactionPara>Once you join a chatroom, a user will connect to you shortly. From there you can say <span>hi!</span></ReactionPara> 
                        <Button variant="outlined" color={"primary"}>Create Yours Now!</Button>
                        </HorizonWrap>
                    </ReactionAndText>
                    </Fade>
                </NewHorizonMargin>
            </NewHorizon> */}
            {/* <CTA>
                <CTAWrapper>
                    <CTAHeading>
                        Start Chatting Today! Sign up Now!
                    </CTAHeading>
                    <Button variant="contained" size={"large"} color={"primary"}>Sign up! It's Free</Button>
                </CTAWrapper>
            </CTA> */}
            <Footer></Footer>
        </Content>
    )
}

export default HomeContent