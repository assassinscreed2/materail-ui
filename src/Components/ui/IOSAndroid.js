import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import {Link} from 'react-router-dom'
import Lottie from 'react-lottie'
import CallToAction from './CallToAction'

import access from '../../assets/extendAccess.svg'
import engagement from '../../assets/increaseEngagement.svg'
import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import { Typography } from '@material-ui/core'
import intergrationAnimation from '../../animations/integrationAnimation/data.json'
import swiss from '../../assets/swissKnife.svg'

const useStyles = makeStyles(theme => ({
    heading:{
        maxWidth:"40em"
    },
    icon:{
       paddingLeft : "-3.5em",
       paddingRight:"1em"
    },
    rowContainer:{
        padding : "0em 5em 10em 5em",
        [theme.breakpoints.down("sm")]:{
            padding : "0dm 1em 10em 1em"
        }
    },
    itemContainer:{
        maxWidth:"40em"
    }
}));

export default function IOSAndroid(props){

    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const defaultOptions = {
        loop : true,
        autoplay : false,
        animationData : intergrationAnimation,
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
    <Grid container direction = "column">
        <Grid item className = {classes.rowContainer} container direction = "row" justify = {matchesMD ? "center":undefined}>
                <Hidden mdDown>
                    <Grid item  onClick={()=>{props.setValue(1)}}>
                        <IconButton className={classes.icon} component={Link} to="/customs">
                            <img src={backArrow} alt="Back to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction = "column" className={classes.heading}>
                   <Grid item>
                        <Typography style = {{marginLeft : matchesMD ? "0.5em" : undefined}} align = {matchesMD ? "center" : undefined} variant = "h2">
                            iOS/Android App Development
                        </Typography>
                   </Grid>
                   <Grid item>
                        <Typography align = {matchesSM ? "center" : undefined} variant="body1" paragraph>
                            Mobile apps allow you to take your tools on the go
                        </Typography>
                        <Typography align = {matchesSM ? "center" : undefined} variant="body1" paragraph>
                            Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography align = {matchesSM ? "center" : undefined} variant="body1" paragraph>
                            Convenience. Connection.
                        </Typography>
                   </Grid>
                </Grid>
                <Hidden mdDown>
                <Grid item onClick={() => {props.setSelectedIndex(2); props.setValue(1)}} justify="flex-end">
                    <IconButton component={Link} to="/website">
                        <img src={forwardArrow} alt="forware to IOS/android"/>
                    </IconButton>
                </Grid>
                </Hidden>
        </Grid>
        <Grid item container direction = {matchesMD ? "column" : "row"} style={{marginTop : "15em",marginBottom : "15em"}} className = {classes.rowContainer}>
            <Grid item container direction = "column" md>
                <Grid item>
                    <Typography variant = "h4" align = {matchesSM ? "center" : undefined} gutterBottom>
                        Integratoin
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant = "body1" align = {matchesSM ? "center" : undefined} paragraph>
                        Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                    </Typography>
                    <Typography variant = "body1" align = {matchesSM ? "center" : undefined} paragraph>
                        This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item md>
                <Lottie options = {defaultOptions} style = {{maxWidth:"20em"}}/>
            </Grid>
            <Grid item container direction = "column" md>
                <Grid item>
                    <Typography variant = "h4" align = {matchesSM ? "center" : "right"} gutterBottom>
                        Simultaneous Platform Support
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant = "body1" align = {matchesSM ? "center" : "right"} paragraph>
                        Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.
                    </Typography>
                    <Typography variant = "body1" align = {matchesSM ? "center" : "right"} paragraph>
                        This significantly reduces costs and creates a more unified brand experience across all devices.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container direction = {matchesMD ? "column" : "row"} style={{marginBottom:"15em",marginLeft: "5em"}} className = {classes.rowContainer}>
            <Grid item contianer direction = "column" md>
                <Grid item>
                    <Typography variant = "h4" gutterBottom>
                        Extend functinality
                    </Typography>
                </Grid>
                <Grid item>
                    <img src = {swiss} alt = "swiss army" />
                </Grid>
            </Grid>
            <Grid item contianer alignItems = "center" direction = "column" md 
            style = {{marginTop : matchesMD ? "10em" : 0,marginBottom : matchesMD ? "10em" : 0}}>
                <Grid item>
                    <Typography variant = "h4" gutterBottom>
                        Extend Access
                    </Typography>
                </Grid>
                <Grid item>
                    <img src = {access} style = {{maxWidth:matchesSM ? "28em" : "22em"}} alt = "tear one off" />
                </Grid>
            </Grid>
            <Grid item contianer direction = "column" md>
                <Grid item>
                    <Typography variant = "h4" gutterBottom>
                        Increase Engagement
                    </Typography>
                </Grid>
                <Grid item>
                    <img src = {engagement} alt = "app with notification" />
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <CallToAction />
        </Grid>   
    </Grid>
    )
}