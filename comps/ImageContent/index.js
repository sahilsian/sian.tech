import react from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import FacebookIcon from '@material-ui/icons/Facebook';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import EmailIcon from '@material-ui/icons/Email';
import ReplayIcon from '@material-ui/icons/Replay';
import { Description } from '@material-ui/icons';

const BackContainer = styled.section`
    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 200px;
    margin: 0 auto;
    background: #f7f9fa;
    padding: 50px 0px;
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 80%;
    height: 100%;
    min-height: 200px;
    margin: 0 auto;
    padding: 150px 20px;
    display: flex;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: ${props=>props.row ? "row-reverse" : "row"};

`;

const Image = styled.div`
    flex: 1;
    position: relative;
`;

const Title = styled.div`
    flex: 1;

    .title {
        font-weight: bold;
        margin-bottom: 15px;
    }
`;

const MainImage = styled.img`
    width: auto;
    max-width: 100%;
    position: absolute;
    top: -80px;
    right: ${props=>props.right ? "none" : "-220px"};
    left: ${props=>props.left ? "-220px" : "none"};
    border-radius: 20px;
    -webkit-box-shadow: -5px 10px 27px 4px rgba(0,0,0,0.2);
    -moz-box-shadow: -5px 10px 27px 4px rgba(0,0,0,0.2);
    box-shadow: -5px 10px 27px 4px rgba(0,0,0,0.2);
`;

const ImageContent = ({Left, img, title, Description}) => {

    return (
        <BackContainer>
            <ContentContainer>
                <Wrapper row={Left}>
                    <Title>
                        <Typography className="title" variant="h3" component="h3">
                            {title}
                        </Typography>
                        <Typography  variant="p" className={"body"} component="p">
                            {Description}
                        </Typography> 
                    </Title>
                    
                    <Image>
                        <MainImage src={img} right={Left} left={Left}></MainImage>
                    </Image>
                </Wrapper>
            </ContentContainer>
        </BackContainer>
    )
}

ImageContent.defaultProps  = {
    title: "Lorem Ipsum Dollar",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

export default ImageContent