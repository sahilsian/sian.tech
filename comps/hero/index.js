import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Typed from 'react-typed';
import Button from '@material-ui/core/Button';
import Lottie from 'react-lottie';
import animationData from '../../public/web-design.json'
import {MyContext} from '../../context';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

const HeroContainer = styled.section`
    margin: 0 auto;
    width: 100%;
    max-width: 80%;
    padding: 120px 20px;
   
    @media (max-width: 733px) {
        max-width: 95%;
    }

    .mobile-title {
        @media (max-width: 733px) {
            font-size: 28px;
        }
    }

    .mobile-des {
        @media (max-width: 733px) {
            font-size: 18px;
            width: 100%;
        }
    }
`;

const ContentContainer = styled.div`
    display: flex;
    
    @media (max-width: 1530px) {
        flex-direction: column-reverse;
    }
`;

const TextContainer = styled.div`
    flex: 2;
    width: 100%;
    height: 100%;
    color: ${props=>props.styletheme ? "#121037" : "#FFFFFF"};
    .bold {
        font-weight: bold;
    }
    .gold {
        color: #04AA51;
    }

     
    .popover {
    }


    .textarea {
        margin-top: 20px;
        @media (max-width: 733px) {
            
        }
    }
    @media (max-width: 1530px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
`;

const ImageContainer = styled.div`
    flex: 1.4;
    display: flex
    @media (max-width: 1530px) {
        margin: 0;
    }
    margin-top: -60px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 280px;
    align-items: center;
    .number {
    }
`;

const Num = styled.span`
    color: ${props=>props.styletheme ? "#121037" : "#FFFFFF"};
`;

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

const Hero = () => {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        function onScroll() {
          let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
          if (currentPosition > scrollTop) {
            setAnchorEl(null);
          } 
          setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }
    
        window.addEventListener("scroll", onScroll);
        return window.addEventListener("scroll", onScroll);
      }, [scrollTop]);

    const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
    };
    const context = useContext(MyContext)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        var copyText = document.getElementById("num").firstChild.data;

        console.log(copyText)
         var fullLink = document.createElement('textarea');
         document.body.appendChild(fullLink);
         fullLink.value = copyText
         fullLink.select();
         fullLink.setSelectionRange(0, 99999); /*For mobile devices*/
         document.execCommand("copy");
         fullLink.remove();
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <HeroContainer>
            <ContentContainer>
                <TextContainer styletheme={context.lightmode}>
                    <Typography className={"textarea bold mobile-title"} variant="h2"  component="h2">
                        Let me help you with
                    </Typography>
                    <Typography className={"bold gold typed mobile-title"} variant="h2"  component="h2">
                        <Typed 
                            strings={['Creating Websites', "Logos and Graphics", 'Mobile Apps']}
                            typeSpeed={30}
                            backSpeed={40}
                            backDelay={2200}
                            loop
                        />
                    </Typography>
                    <Typography className={"textarea mobile-des"} variant="h5"  component="h5" >
                    <strong>Hey! I'm Sahil</strong> and I can help digitalize & modernize your next startup. Contact me for your next logo, website or mobile app. 
                    </Typography>
                    <ButtonContainer className={"textarea"}>
                    <Button aria-describedby={id} className={".button"} size={"large"} onClick={handleClick} variant="contained" color="primary">
                    CALL OR TEXT
                    </Button>
                    <Popover
                    disableScrollLock={ true}
                    className={"popover"}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                    
                >
                    <Typography className={classes.typography}>Copied to Clipboard.</Typography>
                </Popover>
                    <Num styletheme={context.lightmode} id={"num"} className={"number"}>
                    778-242-1896
                    </Num>
                    </ButtonContainer>
                </TextContainer>
                <ImageContainer>
                    <Lottie 
                    options={defaultOptions}
                    width={"80%"}
                    height={"100%"}
                    ></Lottie>
                </ImageContainer>
            </ContentContainer>
        </HeroContainer>
    )   
}

export default Hero;