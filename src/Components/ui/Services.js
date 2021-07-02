import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CustomSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import WebsiteIcon from '../../assets/websiteIcon.svg';

import ButtonArrow from './ButtonArrow'

const useStyles = makeStyles(theme => ({
    specialText:{
        fontFamily:"Pacifico",
        color:theme.palette.common.orange
    },
    icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("sm")]:{
            marginLeft:"0",
            marginTop:"2em"
        },
        width:"12em"
    },
    serviceContainer:{
        marginTop:"10em",
        [theme.breakpoints.down("sm")]:{
            padding:"25px"
        }
    },
    serviceButton:{
        ...theme.learnButton,
        fontSize:"0.7rem",
        height:40,
        width:60
    }
}))

export default function Services(props){
   const classes = useStyles();
   const theme = useTheme();
   const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
   
   
   return(
    <Grid container direction="column">
        <Grid item style={{marginLeft:matchesSM?"0":"5em",marginTop:matchesSM?"0":"3em"}}>
            <Typography variant="h2" style={{textAlign:matchesSM ? "center":"Left"}}>
                Services
            </Typography>
        </Grid>
        <Grid item>   {/*ANDROID CONTAINER*/}
            <Grid justify={matchesSM ? "center" : "flex-end"} container direction="row" className = {classes.serviceContainer}  style={{marginTop:matchesSM?"2em":"5em"}}>
                <Grid item style={{textAlign:matchesSM ? "center":undefined,width:matchesSM?undefined:"25em"}}>
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
        <Grid item>   {/*CUSTOM SOFTWARE CONTAINER*/}
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
        <Grid item>   {/*WEBSITE CONTAINER*/}
            <Grid justify={matchesSM ? "center" : "flex-end"} container direction="row" className = {classes.serviceContainer}>
                <Grid item style={{textAlign:matchesSM ? "center":undefined,width:matchesSM?undefined:"25em"}}>
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
                <Grid item style={{marginRight : matchesSM ? 0:"5em"}}>
                    <img alt="website icon" className = {classes.icon} src={WebsiteIcon}/>
                </Grid>
            </Grid>
        </Grid>  
    </Grid>
   )
}