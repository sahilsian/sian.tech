import react from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import FacebookIcon from '@material-ui/icons/Facebook';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import EmailIcon from '@material-ui/icons/Email';
import ReplayIcon from '@material-ui/icons/Replay';

const ContentContainer = styled.section`
    width: 100%;
    max-width: 80%;
    height: 100%;
    min-height: 200px;
    margin: 0 auto;
    padding: 150px 20px;
`;

const Heading = styled.div`
    text-align: center;
    width: 85%;
    color: #121037;
    margin: 0 auto;
    margin-bottom: 50px;
    .heading {
        font-weight: bold;
        display: inline;
    }
    
    .subtitle {
        display: block;
    }

    .gold-heading {
        color: #F9B934;
        display: inline;
    }

    .textarea {
        margin-top: 30px;
    }
`;

const Boxes = styled.div`
    display: flex;
    width: 100%;
    margin: 20px 0px;
`;

const Box = styled.div`
    flex: 1;
    border: 1px solid #3f51b540;
    min-height: 300px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px 0 rgba(23,70,161,.11);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    .title {
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .body {
        width: 90%;
        text-align: center;
    }
`;

const IconContainer = styled.div`
    background: #e8eaf6;
    width: 67pt;
    height: 67pt;
    border-radius: 24px;
    justify-content: center;
    display: flex;
    align-items: center;
`;

const Content = () => {
    return (
        <ContentContainer>
            <Heading>
                <Typography className={"heading"} variant="h3"  component="h3">
                    We are a Passionate and Results Driven Company that Puts your 
                </Typography>
                <Typography className={"heading gold-heading"} variant="h3"  component="h3">
                    {" "} Marital Arts Business First
                </Typography>
                <Typography variant="h5" className={"subtitle textarea"} component="h5">
                    We specialize exclusively in Martial Arts schools and know the exact systems to automate so that you receive a predictable and consistent flow of steady new leads.
                </Typography>
            </Heading>

            <Boxes>
                <Box>
                    <IconContainer>
                        <FacebookIcon style={{ fontSize: 55, color: "#3549b1" }} />
                        
                    </IconContainer>
                    <Typography  variant="h5" className={"title"} component="h5">
                            Social Media
                    </Typography>
                    <Typography  variant="p" className={"body"} component="p">
                    We build custom Facebook & Instagram ads for your business to target your future new dream clients. We put together the offer, ad set and images that are meant to speak directly to your ideal members. 
                    </Typography>
                </Box>
                <Box>
                    <IconContainer>
                        <EmailIcon style={{ fontSize: 55, color: "#3549b1" }} />
                    </IconContainer>
                    <Typography  variant="h5" className={"title"} component="h5">
                            Automation
                    </Typography>
                    <Typography  variant="p" className={"body"} component="p">
                    Once your new lead enters their information, we automate it so you will be notified via email and your new lead will be thanked by email and text. Their information will then be stored in a CRM to build up your email list.
                    </Typography>
                </Box>
            </Boxes>
            <Boxes>
                <Box>
                    <IconContainer>
                        <EmailIcon style={{ fontSize: 55, color: "#3549b1" }} />
                    </IconContainer>
                    <Typography  variant="h5" className={"title"} component="h5">
                        Email
                    </Typography>
                    <Typography  variant="p" className={"body"} component="p">
                        Once we have the new leads in your data base, we send them an automated email sequence to help them warm up to you and your studio. This is where we showcase how much value you can bring to them with the goal to get them to know, like and trust you enough to be a paying customer!
                    </Typography>
                </Box>
                <Box>
                    <IconContainer>
                        <ReplayIcon style={{ fontSize: 55, color: "#3549b1" }} />
                    </IconContainer>
                    <Typography  variant="h5" className={"title"} component="h5">
                        Retargeting
                    </Typography>
                    <Typography  variant="p" className={"body"} component="p">
                    Retargeting is defined as showing ads only to individuals who have interacted with your ads or page before which makes retargeting one of the most powerful and cost-effective ways to drive leads and conversions. 
                    </Typography>
                </Box>
            </Boxes>

        </ContentContainer>
    )   
}

export default Content;