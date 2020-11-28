import react, {useContext} from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import {MyContext} from '../../context';

const BannerContainer = styled.div`
    background-color: ${props=>props.styletheme ? "#f7f9fa" : "#121212"};   
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 733px) {
        font-size: 16px;
        width: 100%;
        height: 150px;
    }
    .typeBanner {
        color: #b6bec2;
        font-weight: bold;
        @media (max-width: 733px) {
            font-size: 16px;
            width: 100%;
        }
    }
`;

const BannerText = styled.div`
    width: 80%;
    text-align: center;
    
`;

const Banner = ({text, display}) => {
    const context = useContext(MyContext)
    return (
        <BannerContainer styletheme={context.lightmode}>
            <BannerText> 
                <Typography variant="h4"  component="h4" className={"typeBanner"}>
                 {text}
                </Typography>
                
            </BannerText>
                
        </BannerContainer>
    )   
}

Banner.defaultProps = {
    text: "Techniques that we will be using were pioneered by $21.7M spent in social media marketing testing.",
}

export default Banner;