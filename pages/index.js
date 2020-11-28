import React, {useState, useContext} from 'react'
import Head from 'next/head'
import Hero from '../comps/hero'
import Header from '../comps/header'
import styled from 'styled-components'
import Banner from '../comps/Banner'
import Content from '../comps/content'
import ImageContent from '../comps/ImageContent'
import {MyContext} from '../context'


const RootContainer = styled.div`
`;

const SiteContainer = styled.main`
  background-color: ${props=>props.styletheme ? "#FFFFFF" : "#161616"};
  box-sizing: border-box;
  transition: all 0.2s ease-in;

  
`;
export default function Home() {
  const context = useContext(MyContext)
  return (

     <RootContainer>
       <Head>
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
       </Head>
        <Header></Header>
        <SiteContainer styletheme={context.lightmode}>
          <Hero>
          </Hero>
          <Banner 
          text={"Send me a text or call and we can start right away!"}
          >  
          </Banner>
          {/* <Content></Content>
          <ImageContent img={"/kickboxing.jpg"}></ImageContent>
          <ImageContent img={"/kickboxing.jpg"} Left={true}></ImageContent>
          <ImageContent img={"/kickboxing.jpg"}></ImageContent>
          <Banner 
          text={"What are you Waiting For? Start working with Us Today!"}
          >
          </Banner> */}
        </SiteContainer>
     </RootContainer>

  )
}
