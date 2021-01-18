import React, {useState} from 'react'
import styled from 'styled-components'
import List from "@material-ui/core/List"
import { ListItem, ListItemText, ListItemIcon, Drawer } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover'
import MoodIcon from '@material-ui/icons/Mood';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { useRouter } from 'next/router'

const SiteHeader = styled.header`
    margin-bottom: 10em;
`;

const HeaderContainer = styled.div`
    width: 100%;
    padding: 12px 16px;
    max-width: 1300px;
    color: #FFF;
    margin: 0 auto;
    display: flex;
    
    align-items: center;
    @media (min-width: 600px) {
        min-height: 64px;
    }

    .header-logo {
        flex-grow: 1;
    }

    .header-seperator {
        flex-grow: 1;
    }

    .header-list {
        display: flex;
        align-items: center;
        padding: 0px 12px;
    }

    .header-item {
        width: 100%;

        
    }

    .header-box {
        border-radius: 8px;
        &:hover {
            color: #627597;
            transition: 0.3s color ease;
        }
    }

`;

const Img = styled.img`
    width: auto;
    max-width: 56px;
`;

const DiscordLogo = styled.img`
    width: auto;
    max-width: 24px;
`;

const Tech = styled.a`
    font-weight: bold;
    font-style: italic;
    font-size: 1.5em;
    cursor: pointer;
    transition: 0.2s all ease;

    &:hover {
        opacity: 0.7;
        transition: 0.2s all ease;
    }
`;

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
      const router = useRouter()
    return (
        <SiteHeader>

            <HeaderContainer>
                <div className="header-logo">
                    <Tech onClick={()=> {
                        router.push("/")
                    }}>SIAN.TECH</Tech>
                </div>
                <div className="header-seperator"></div>
                    <List className={"header-list"}>
                        <ListItem className={"header-box"} button>
                            <ListItemText primary={"Portfolio"} onClick={()=> {
                                router.push("/portfolio")
                            }} className={"header-item"}></ListItemText>
                        </ListItem>
                        {/* <ListItem className={"header-box"} button>
                            <ListItemText primary={"About"}>
                                
                            </ListItemText>

                        </ListItem>
                        <ListItem className={"header-box"} button>
                            <ListItemText primary={"Minnie"}>
                                <ListItemIcon />
                            </ListItemText>
                        </ListItem> */}
                        

                        
                        
                    </List>
                {/* <Button startIcon={<MoodIcon />} size={"large"} variant="outlined" color="secondary">
                LOGIN
                </Button> */}
            </HeaderContainer>

        


        </SiteHeader>
    )
}

export default Header