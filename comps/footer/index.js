import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    width: 100%;
    border-top: 1px solid #eee; 
`;

const ContainerMargin = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 100px 30px;
`;

const Col = styled.div`
    flex: 1;
    padding: 0px 20px;
`;

const P = styled.a`
    width: 100%;
    display: block;
    transition: all 0.2s ease;
    padding: 12px 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
        transition: all 0.2s ease;
        background-color: #eee;
        
    }
`;

const Title = styled.p`
    margin: 0.5em 0px;
    font-size: 1.2em;
`;



const Footer = ({}) => {
    return (
        <Container>
            <ContainerMargin>
                
                <Title style={{fontWeight: "bold"}}>Sahil Sian</Title>
                <Title>sahilsianart@gmail.com</Title>
                <Title>778-952-6800</Title>
                
            </ContainerMargin>
            
        </Container>
    )
}

export default Footer;