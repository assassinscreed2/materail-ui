import React from 'react'
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
import analytics from '../../assets/analytics.svg'
import seo from '../../assets/seo.svg'
import outreach from '../../assets/outreach.svg'
import ecommerce from '../../assets/ecommerce.svg'

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
    },
    bodyContainer:{
        maxWidth:"30em"
    }
}))

export default function Websites(props){

    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

        return (<Grid container direction="column">    
            <Grid item className = {classes.rowContainer} container direction = {matchesSM ? "column":"row"} justify = {matchesMD ? "center":undefined}>
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
                            Website Development
                        </Typography>
                   </Grid>
                   <Grid item>
                        <Typography align = {matchesSM ? "center" : undefined} variant="body1" paragraph>
                            Having a website is a necessity in today’s business world. They give you one central,
                            public location to let people know who you are, what you do, and why you’re the best at it.
                        </Typography>
                        <Typography align = {matchesSM ? "center" : undefined} variant="body1" paragraph>
                            From simply having your hours posted to having a full fledged online store, making yourself as
                            accessible as possible to users online drives growth and enables you to reach new customers
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
            <Grid item container direction = {matchesSM ? "column":"row"} alignItems="center" style={{marginTop:"15em"}} className = {classes.rowContainer}>
                <Grid item>
                    <Grid container direction = "column">
                        <Grid item>
                            <Typography variant = "h4" gutterBottom>
                                Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                        <img style={{marginLeft:"-2.75em"}} src = {analytics} alt = "graph" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className = {classes.bodyContainer}>
                    <Typography align = {matchesSM ? "center": undefined} variant = "body1">
                        Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and
                        trends in your business, empowering you to make smarter decisions with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item justify = {matchesSM ? "center" : "flex-end"}
            style={{marginTop:"15em",marginBottom:"15em"}}
             container direction = {matchesSM ? "column":"row"} alignItems="center" className = {classes.rowContainer}>
                <Grid item>
                    <Grid container direction = "column">
                        <Grid item>
                            <Typography align = {matchesSM ? "center": undefined} variant = "h4" gutterBottom>
                                E-Commerce
                            </Typography>
                        </Grid>
                        <Grid item>
                        <img style={{marginLeft:"-2.75em", }} src = {ecommerce} alt = "graph" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className = {classes.bodyContainer}>
                    <Typography align = {matchesSM ? "center": undefined} variant = "body1" paragraph>
                        I   t’s no secret that people like to shop online
                    </Typography>
                    <Typography align = {matchesSM ? "center": undefined} variant = "body1" paragraph>
                        In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie
                    </Typography>
                </Grid>
            </Grid>
            <Grid item justify = {matchesSM ? "center" : undefined} container direction = {matchesSM ? "column":"row"} alignItems="center" className = {classes.rowContainer}>
                <Grid item>
                    <Grid container direction = "column">
                        <Grid item>
                            <Typography variant = "h4" gutterBottom>
                                outreach
                            </Typography>
                        </Grid>
                        <Grid item>
                        <img style={{marginLeft:"-2.75em", }} src = {outreach} alt = "graph" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className = {classes.bodyContainer}>
                    <Typography  align = {matchesSM ? "center": undefined} variant = "body1" paragraph>
                        Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item style={{marginTop:"15em",marginBottom:"15em"}} justify = {matchesSM ? "center" : "flex-end"} container direction = {matchesSM ? "column":"row"} alignItems="center" className = {classes.rowContainer}>
                <Grid item>
                    <Grid container direction = "column">
                        <Grid item>
                            <Typography variant = "h4" gutterBottom>
                                Search Engine Optimisation
                            </Typography>
                        </Grid>
                        <Grid item>
                        <img style={{marginLeft:"-2.75em", }} src = {seo} alt = "seo" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className = {classes.bodyContainer}>
                    <Typography variant = "body1" paragraph  align = {matchesSM ? "center": undefined} >
                        How often have you ever been to the second page of Google results?
                    </Typography>
                    <Typography variant = "body1" paragraph  align = {matchesSM ? "center": undefined} >
                        If you’re like us, probably never.
                    </Typography>
                    <Typography variant = "body1" paragraph  align = {matchesSM ? "center": undefined} >
                        Customers don’t go there either, so we make sure your website is designed to end up on top.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} setSelectedIndex={props.setSelectedIndex} />
            </Grid>
        </Grid>)
}