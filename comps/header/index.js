import React, {useState, useContext, useCallback} from 'react'
import styled from 'styled-components'
import List from "@material-ui/core/List"
import { ListItem, ListItemText, ListItemIcon, Drawer } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover'
import {MyContext} from '../../context';
import Switch from '@material-ui/core/Switch';


const SiteHeader = styled.header`
    background: ${props=>props.styletheme ? "#FFFFFF" : "#121212"};
    border-bottom:  ${props=>props.styletheme ? "1px solid #eeeeee" : "1px solid #000000"};
`;

const HeaderContainer = styled.div`
    width: 100%;
    padding: 0px 16px;
    max-width: 1100px;
    color: ${props=>props.styletheme ? "#546e7a" : "#FFFFFF"};
    margin: 0 auto;
    display: flex;

    
    
    align-items: center;
    @media (min-width: 600px) {
        min-height: 64px;

    }

    @media (max-width: 733px) {
        .header-seperator {
            display: none;
        }

        width: 95%;

        .buttonMobile {
            font-size: 12px;
            display: none;
        }

        .header-logo {
            flex-grow: 3;
        }

        .header-item {
            span {
                text-align: right;
            }
            
        }
    }

    @media(max-width: 599px) {
        min-height: 80px;
    } 

    .header-logo {
        flex-grow: 1;
    }

    .header-seperator {
        flex-grow: 5;
    }

    .header-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        padding: 0px 15px;
    }

    .header-item {
        padding: 0px 8px;
        width: 100%;

        
    }

    .header-box {
        border-radius: 8px;
        &:hover {
            color: #1957bd;
        }
    }

`;

const Logo = styled.img`
    width: auto;
    max-width: 35px;
`;

const Header = () => {
    const context = useContext(MyContext)

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
      };

    const handleChange = (event) => {
        context.setLightmode(!context.lightmode)
    };

    return (
        <SiteHeader styletheme={context.lightmode}>

            <HeaderContainer styletheme={context.lightmode}>
                {context.lightmode
                ?
                <div className="header-logo">
                <Logo src={"./logo-sian-dark.svg"}></Logo>
                </div>
                :

                <div className="header-logo">
                <Logo src={"./logo-sian.svg"}></Logo>
                </div>

                }
               
                <div className="header-seperator"></div>
                    <List className={"header-list"}>
                        <ListItem className={"header-box"} button>
                            <ListItemText primary={"Home"}  className={"header-item"}></ListItemText>
                        </ListItem>
                        {/* <ListItem className={"header-box"} button>
                            <ListItemText primary={"About us"}>
                                <ListItemIcon />
                            </ListItemText>
                        </ListItem>
                        <ListItem className={"header-box"} button>
                            <ListItemText primary={"Contact"}>
                                <ListItemIcon />
                            </ListItemText>
                        </ListItem>
                        <ListItem  className={"header-box pricing"} button>
                            <ListItemText primary={"Pricing"}>
                                <ListItemIcon />
                            </ListItemText>
                        </ListItem> */}

                    
                    </List>
                    <Switch
                    checked={context.lightmode}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
            </HeaderContainer>

        


        </SiteHeader>
    )
}

export default Header