import React from 'react';
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import CallToAction from './CallToAction';
import {Link} from 'react-router-dom';

import animationData from '../../animations/landinganimation/data';
import CustomSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import WebsiteIcon from '../../assets/websiteIcon.svg';
import BackgroundImage from '../../assets/repeatingBackground.svg';
import infoBackground from '../../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
    animation:{
        maxWidth:"23em",
        minWidth:"18em",
        marginTop:"2em",
        marginLeft:"10%",
        [theme.breakpoints.down("xs")]:{
            maxWidth:"30em"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        backgroundColor : theme.palette.common.orange,
        borderRadius:"100px",
        height:45,
        width:145,
        marginRight:40,
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }
    },
    learnButtonHero:{
        ...theme.learnButton,
        fontSize:"0.9rem",
        height:45,
        width:145
    },
    herotextContainer:{
        minWidth:"21.5em",
        marginLeft:"1em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:"0"
        }
    },
    specialText:{
        fontFamily:"Pacifico",
        color:theme.palette.common.orange
    },
    icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("sm")]:{
            marginLeft:"0",
            marginTop:"2em"
        }
    },
    serviceContainer:{
        marginTop:"12em",
        [theme.breakpoints.down("sm")]:{
            padding:"25px"
        }
    },
    serviceButton:{
        ...theme.learnButton,
        fontSize:"0.7rem",
        height:40,
        width:120
    },
    revolutionImage:{
        backgroundImage:`url(${BackgroundImage})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%"
    },
    revolutionCard:{
        position:"absolute",
        boxShadow:theme.shadows[10],
        borderRadius:15,
        padding : "10em",
        [theme.breakpoints.down("sm")]:{
            padding:"8em 0em 8em 0em",
            borderRadius:"0"
        }
    },
    contactBackground:{
        backgroundImage:`url(${infoBackground})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%"
    },
    aboutUs:{
        [theme.breakpoints.down("sm")]:{
            alignItems:"center",
            marginLeft:"4em"
        }
    },
    contactUs:{
        [theme.breakpoints.down("sm")]:{
            alignItems:"center",
            marginLeft:"4em"
        }
    }
}));

export default function LandingPage(props){
    const classes = useStyles();
    const theme  = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop : true,
        autoplay : true,
        animationData : animationData,
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
    <Grid container direction="column">
        <Grid item>   {/*HERO CONTAINER*/}
          <Grid container justify = "flex-end" direction="row" alignItems="center">
               <Grid item xs className={classes.herotextContainer}>
                 <Typography align="center" variant="h2">
                    Bringing the west cost technology <br /> to the midWest
                 </Typography>
                 <Grid container justify = "center">
                     <Grid item>
                         <Button  onClick={()=>props.setValue(5)} component={Link} to="/estimate" className = {classes.estimateButton} variant="contained">Free Estimate</Button>
                     </Grid>
                     <Grid item className={classes.learnButtonHero}>
                         <Button component={Link} to="/services"  className={classes.learnButtonHero} variant="outlined"> <span style={{marginRight : "10px"}}>Learn More</span>
                        
                         <ButtonArrow width = {15} height = {15} fill = {theme.palette.common.blue}/>
                         </Button>
                     </Grid>
                 </Grid>
               </Grid>
                <Grid className = {classes.animation} item xs>
                 <Lottie options = {defaultOptions} height = {"100%"} width={"100%"} />
               </Grid>
           </Grid>
        </Grid>
        <Grid item>   {/*SERVICE CONTAINER*/}
            <Grid justify={matchesSM ? "center" : undefined} container direction="row" className = {classes.serviceContainer}>
                <Grid item style={{marginLeft : matchesSM ? 0:"5em",textAlign:matchesSM ? "center":undefined}}>
                    <Typography variant="h4">
                        Custom Software Development
                    </Typography>
                    <Typography variant="subtitle1">
                        Save Energy,Save Time and Save Money
                    </Typography>
                    <Typography variant="subtitle1">
                        Complete digital solution from investigation to{" "}
                        <span className = {classes.specialText}>celebration</span> 
                    </Typography>
                    <Button component={Link} to="/customs" className={classes.serviceButton} variant="outlined"> <span style={{marginRight : "10px"}}>Learn More</span>
                        <ButtonArrow width = {15} height = {15} fill = {theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item>
                    <img alt="custom software icon" className = {classes.icon} src={CustomSoftwareIcon}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>   {/*SERVICE CONTAINER*/}
            <Grid justify={matchesSM ? "center" : "flex-end"} container direction="row" className = {classes.serviceContainer}>
                <Grid item style={{textAlign:matchesSM ? "center":undefined}}>
                    <Typography variant="h4">
                        IOS/Android App Development
                    </Typography>
                    <Typography variant="subtitle1">
                        Extend Functionality,Extend Access and Extend Engagement
                    </Typography>
                    <Typography variant="subtitle1">
                        Increase your webFunctionality or create a standalone App 
                        {matchesSM ? null : <br />} with either mobile platform
                    </Typography>
                    <Button component={Link} to="/android" className={classes.serviceButton} variant="outlined"> <span style={{marginRight : "10px"}}>Learn More</span>
                        <ButtonArrow width = {15} height = {15} fill = {theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item style={{marginRight : matchesSM ? 0:"5em"}}>
                    <img alt="custom software icon" className = {classes.icon} src={mobileAppsIcon}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>   {/*SERVICE CONTAINER*/}
            <Grid justify={matchesSM ? "center" : undefined} container direction="row" className = {classes.serviceContainer}>
                <Grid item style={{marginLeft : matchesSM ? 0:"5em",textAlign:matchesSM ? "center":undefined}}>
                    <Typography variant="h4">
                        Website Development
                    </Typography>
                    <Typography variant="subtitle1">
                        Reach More,Sell More,Descover More
                    </Typography>
                    <Typography variant="subtitle1">
                        Optimised Search Engine built for speed
                    </Typography>
                    <Button component={Link} to="/website"  component={Link} to="/website"  className={classes.serviceButton} variant="outlined"> <span style={{marginRight : "10px"}}>Learn More</span>
                        <ButtonArrow width = {15} height = {15} fill = {theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item>
                    <img alt="website icon" className = {classes.icon} src={WebsiteIcon}/>
                </Grid>
            </Grid>
        </Grid> 
        <Grid item>
            <Grid style={{height:"100em"}} container alignItems="center" justify="center" >
            <Card className = {classes.revolutionCard}>
                <CardContent>
                    <Grid container direction = "column">
                        <Grid item style={{textAlign:"center"}}>
                            <Grid item>
                                <Typography variant="h3" gutterBottom>
                                    The Revolution
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant = "subtitle1">
                                    Visionary insights coupled with cutting edge technology is a recepie for resolution
                                </Typography>
                                <Button component={Link} to="/revolution"  className={classes.serviceButton} variant="outlined"> <span style={{marginRight : "10px"}}>Learn More</span>
                                    <ButtonArrow width = {15} height = {15} fill = {theme.palette.common.blue}/>
                                </Button>
                            </Grid>     
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <div className = {classes.revolutionImage} />
            </Grid>
        </Grid>
        <Grid item>
        {/* {Information Block} */}
            <Grid  className={classes.contactBackground} style={{ height:"40em"}} alignItems = "center" container direction = "row">
                <Grid item container direction = {matchesXS ? "column":"row"} spacing = {matchesXS ?"10" : "0"}  style={{textAlign:matchesXS?"center":"inherit"}}>
                    <Grid sm item style={{marginLeft: matchesXS ? "0": "3em"}}>
                        <Grid container direction = "column">
                            <Typography style={{color:"white"}} variant = "h2">
                                About Us
                         </Typography>
                            <Typography variant = "subtitle2">
                                Let's get personal.
                            </Typography>
                            <Grid item>
                                <Button component={Link} to="/about" className={classes.serviceButton} style={{color:"white",borderColor:"white"}} variant="outlined"> <span style={{marginRight : "10px"}}>Learn More</span>
                                    <ButtonArrow width = {15} height = {15} fill = "white"/>
                               </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm style={{marginRight:matchesXS ? "0":"3em",textAlign:matchesXS ? "center":"right"}}>
                        <Grid container direction="column">
                            <Typography style={{color:"white"}} variant = "h2">
                                Contact Us
                            </Typography>
                            <Typography variant = "subtitle2">
                                Say Hello!!
                            </Typography>
                            <Grid item>
                                <Button component={Link} to="/contact" className={classes.serviceButton} style={{color:"white",borderColor:"white"}} variant="outlined"> <span style={{marginRight : "10px"}}>Learn More</span>
                                    <ButtonArrow width = {15} height = {15} fill = "white"/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
           {/* {CALL TO ACTION} */}
            <CallToAction setValue={props.setValue} setSelectedValue={props.setSelectedValue} />    
        </Grid>  
    </Grid>
    );
}