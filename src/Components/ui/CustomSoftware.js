import React from 'react'
import Lottie from 'react-lottie'
import {Link} from 'react-router-dom'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import CallToAction from './CallToAction'

import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import lightbulb from '../../assets/bulb.svg'
import cash from '../../assets/cash.svg'
import stopwatch from '../../assets/stopwatch.svg'
import roots from '../../assets/root.svg'
import documentsAnimations from '../../animations/documentsAnimation/data'
import scaleAnimations from '../../animations/scaleAnimation/data.json'
import automationAnimation from '../../animations/automationAnimation/data.json'
import uxAnimation from '../../animations/uxAnimation/data'

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
}))

export default function CustomSoftware(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    
    const documentsOptions = {
        loop : true,
        autoplay : false,
        animationData : documentsAnimations,
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const scaleOptions = {
        loop : true,
        autoplay : false,
        animationData : scaleAnimations,
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const automationOption = {
        loop : true,
        autoplay : false,
        animationData : automationAnimation,
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const uxOptions = {
        loop : true,
        autoplay : false,
        animationData : uxAnimation,
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <Grid container direction="column">
            <Grid item className = {classes.rowContainer} container direction = "row" justify = {matchesMD ? "center":undefined}>
                <Hidden mdDown>
                    <Grid item  onClick={()=>{props.setValue(1)}}>
                        <IconButton className={classes.icon} component={Link} to="/services">
                            <img src={backArrow} alt="Back to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction = "column" className={classes.heading}>
                   <Grid item>
                        <Typography style = {{marginLeft : matchesMD ? "0.5em" : undefined}} align = {matchesMD ? "center" : undefined} variant = "h2">
                            Custom Software Development
                        </Typography>
                   </Grid>
                   <Grid item>
                        <Typography align = {matchesSM ? "center" : undefined} variant="body1" paragraph>
                             Whether we’re replacing old software or inventing new solutions,
                             Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography align = {matchesSM ? "center" : undefined} variant="body1" paragraph>
                             Using regular commercial software leaves you with a lot of stuff
                             you don’t need, without some of the stuff you do need, and ultimately 
                             controls the way you work.
                             Without using any software at all you risk falling behind competitors and
                             missing out on huge savings from increased efficiency
                        </Typography>
                        <Typography align = {matchesSM ? "center" : undefined} variant="body1" paragraph>
                            Our custom solutions are designed from the ground up with your
                            needs, wants, and goals at the core. This collaborative process produces finely
                            tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                        </Typography>
                   </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item onClick={() => {props.setSelectedIndex(2); props.setValue(1)}} justify="flex-end">
                        <IconButton component={Link} to="/android">
                            <img src={forwardArrow} alt="forware to IOS/android"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid  className = {classes.rowContainer} item container justify="center" style={{marginTop:"15em",marginBottom:"2em"}} direction="row">
                <Grid item container direction = "column" md alignItems="center" style={{maxWidth : "40em"}}>
                    <Grid item>
                        <Typography variant = "h4"  align = {matchesSM ? "center" : undefined} >
                            Save Energy
                        </Typography>
                        <Grid item>
                            <img src={lightbulb} alt="lightbulb"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction = "column" md alignItems="center" style={{maxWidth : "40em",marginTop : matchesSM?"10em":0,marginBottom : matchesSM?"10em":0}}>
                    <Grid item>
                        <Typography variant = "h4"  align = {matchesSM ? "center" : undefined} >
                            Save Time
                        </Typography>
                        <Grid item>
                            <img src={stopwatch} alt="watch"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction = "column" md alignItems="center" style={{maxWidth : "40em"}}>
                    <Grid item>
                        <Typography variant = "h4"  align = {matchesSM ? "center" : undefined} >
                            Save Money
                        </Typography>
                        <Grid item>
                            <img src={cash} alt="money"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container  className = {classes.rowContainer}  alignItems = {matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} justify="space-between">
                <Grid item container direction = {matchesSM ? "column" : "row"} className = {classes.itemContainer} style={{marginBottom : matchesMD ? "15em" : 0}}>
                    <Grid item container md direction = "column">
                        <Grid item>
                            <Typography variant="h4"  align = {matchesSM ? "center" : undefined} >
                                Digital Documents and Data
                            </Typography>
                        </Grid> 
                        <Grid item>
                            <Typography variant = "body1" paragraph  align = {matchesSM ? "center" : undefined} >
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography  variant = "body1" paragraph  align = {matchesSM ? "center" : undefined} >
                                Billions are spent annually on the purchasing, printing, and distribution of paper.
                                On top of the massive environmental impact this has, it causes harm to your bottom line as well
                            </Typography>
                            <Typography  variant = "body1" paragraph  align = {matchesSM ? "center" : undefined} >
                                By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options = {documentsOptions} style = {{maxHeight:225,minHeight:175,maxWidth:225}} />
                    </Grid>
                </Grid>
                <Grid item  direction = {matchesSM ? "column" : "row"} container className = {classes.itemContainer}>
                    <Grid item md>
                        <Lottie options = {scaleOptions} style = {{maxHeight:160,maxWidth:180}} />
                    </Grid>
                    <Grid item container md direction = "column">
                        <Grid item>
                            <Typography variant="h4"  align = {matchesSM ? "center" : "right"} >
                                Scan
                            </Typography>
                        </Grid> 
                        <Grid item>
                            <Typography variant = "body1" paragraph  align = {matchesSM ? "center" : "right"} >
                                Whether you’re a large brand, just getting started, or taking off right now, our application
                                architecture ensures pain-free growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid  className = {classes.rowContainer}  item container direction = "row" style={{marginBottom:"20em",marginTop:"20em"}}>
                <Grid item container direction = "column" alignItems = "center">
                    <Grid item>
                        <img src = {roots} alt = "tree with roots" height = {matchesSM ? "300em" : "450em"} width = {matchesSM ? "300em" : "450em"} />
                    </Grid>
                    <Grid item className = {classes.itemContainer}>
                        <Typography variant = "h4" align = "center" gutterBottom paragraph>
                            Root-Cause Analysis
                        </Typography>
                        <Typography variant = "body1" align = "center" gutterBottom paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant = "body1" align = "center" gutterBottom paragraph>
                            We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid  className = {classes.rowContainer}  item container alignItems = {matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} justify="space-between" style={{marginBottom : "10em"}}>
                <Grid item  direction = {matchesSM ? "column" : "row"} container className = {classes.itemContainer} style={{marginBottom : matchesMD ? "15em" : 0}}>
                    <Grid item container md direction = "column">
                        <Grid item>
                            <Typography variant="h4"  align = {matchesSM ? "center" : undefined} >
                                Automation
                            </Typography>
                        </Grid> 
                        <Grid item>
                            <Typography variant = "body1" paragraph  align = {matchesSM ? "center" : undefined} >
                                Why waste time when you don’t have to?
                            </Typography>
                            <Typography  variant = "body1" paragraph  align = {matchesSM ? "center" : undefined} >
                                We can help you identify processes with time or event based actions which can now easily be automated
                            </Typography>
                            <Typography  variant = "body1" paragraph  align = {matchesSM ? "center" : undefined} >
                                Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options = {automationOption} style = {{maxHeight:290,maxWidth:290}} />
                    </Grid>
                </Grid>
                <Grid  direction = {matchesSM ? "column" : "row"} item container className = {classes.itemContainer}>
                    <Grid item md>
                        <Lottie options = {uxOptions} style = {{maxHeight:310,maxWidth:155}} />
                    </Grid>
                    <Grid item container md direction = "column">
                        <Grid item>
                            <Typography variant="h4"  align = {matchesSM ? "center" : "right"} >
                                User Experience Design
                            </Typography>
                        </Grid> 
                        <Grid item>
                            <Typography variant = "body1" paragraph  align = {matchesSM ? "center" : "right"} >
                            A good design that isn’t usable isn’t a good design.
                            </Typography>
                            <Typography variant = "body1" paragraph  align = {matchesSM ? "center" : "right"} >
                            So why are so many pieces of software complicated, confusing, and frustrating?
                            </Typography>
                            <Typography variant = "body1" paragraph  align = {matchesSM ? "center" : "right"} >
                            By prioritizing users and the real ways they interact with technology we’re able to develop unique,
                            personable experiences that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
)
}