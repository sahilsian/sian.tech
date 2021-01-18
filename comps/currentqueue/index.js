import React from 'react';
import styled from 'styled-components';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-image: url(${props=>props.pic ? props.pic : "https://cdn.discordapp.com/avatars/555221466522714113/4e4823523a7cda7b07ffc378b431e09c.png?size=1024"});
    background-size: cover;
    box-shadow: 1px 1px 10px #000000;
    position: relative;
    margin-left: -10px;
`;

const Status = styled.div`
    position: absolute;
    background-color: #43b581;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    bottom: 0;
    right: 0;
    box-shadow: 1px 1px 4px #000000;
`;

const Wrapper = styled.div`
    display: flex;
    width: auto;
    align-items: center;
`;

const GradientDrop = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    
    
    .last {
        background: #ffffff !important;
    }
`;

const Increase = styled.span`
    color: #fff;
    margin: 0px 15px;
    display: flex;
    align-items: center;
    background-color: #8193b2;
    padding: 4px 12px;
    font-weight: bold;
    border-radius: 100px;
    box-shadow: 1px 1px 10px #000000;
    font-size: 12px;
`;

const pfp = [
    'https://cdn.discordapp.com/avatars/725583125823881317/da3a9d0c87f287b0217642738619025e.jpg?size=128',
    'https://cdn.discordapp.com/avatars/651138419644170247/057997110e608eb21efd0b5cab56c7b3.jpg?size=128',
    'https://cdn.discordapp.com/avatars/292054583813865473/5bdb0062c77256af2550cbb844078700.jpg?size=128',
    'https://cdn.discordapp.com/avatars/462405309365747712/d3dd5439b90c4c82fdaaf87e5263ea96.jpg?size=128',
    'https://cdn.discordapp.com/embed/avatars/3.png',
    'https://cdn.discordapp.com/avatars/439914813192404992/e8be69b6599ebdb6c3e1d7fbf35cc3fd.jpg?size=128',
    'https://cdn.discordapp.com/embed/avatars/2.png',
    'https://cdn.discordapp.com/avatars/659113201568579596/c4064ca4732c67fd205c8a1f85236dc4.jpg?size=128',
    'https://cdn.discordapp.com/embed/avatars/0.png',
    'https://cdn.discordapp.com/avatars/533411112452882432/d1789ba1ef9b15d7b5ebc6aa4ea6c1f6.jpg?size=128'
  ]


const CurrentQueueIcon = ({}) => {
    return (
        <Wrapper>
            
            {pfp.map((i) => {
                return (
                    <IconContainer pic={i}>
                        <GradientDrop></GradientDrop>
                    </IconContainer>
                )
            })

            }
            
            

            <Increase>
               <AddRoundedIcon style={{ fontSize: 17 }} /> 3000 Others
            </Increase>
        </Wrapper>
        
    )
}

export default CurrentQueueIcon 