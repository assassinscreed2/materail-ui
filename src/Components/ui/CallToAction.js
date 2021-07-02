import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonArrow from './ButtonArrow'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Link} from 'react-router-dom'

import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStyles = makeStyles(theme => ({
    serviceButton:{
        ...theme.learnButton,
        fontSize:"0.7rem",
        height:40,
        width:120,
        padding : 5,
        [theme.breakpoints.down("md")]:{
            marginBottom : "2em"
        }
    },
    background : {
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        height:"100%",
        width:"100%",
        [theme.breakpoints.down("sm")]:{
            backgroundImage:`url(${mobileBackground})`,
            backgroundAttachment:"inherit"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize:"1.5rem",
        marginRight:"5em",
        marginLeft:"2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:"0",
            marginRight:"0"
        },
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }
    }
}))

export default function CallToAction(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return(
        <Grid direction = {matchesXS ? "column":"row"} className = {classes.background} justify = {matchesXS ? "space-evenly" : "space-between"} container style={{height:"40em"}} alignItems = "center">
            <Grid item style={{marginLeft: matchesXS ? "0" : "5em",textAlign:matchesXS?"center":"inherit"}}>
                <Grid container direction = "column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software <br />
                            Revolutionary Results
                        </Typography>
                        <Typography variant = "subtitle2" style = {{fontSize:"1.5rem"}}>
                            Take advantage of the 21st century
                        </Typography>
                        <Grid container item justify={matchesXS ? "center" : undefined}>
                            <Button component={Link} to="/revolution" className={classes.serviceButton} variant="outlined"> <span style={{marginRight : "10px"}}>Learn More</span>
                                <ButtonArrow width = {15} height = {15} fill = "#51adcf"/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button  onClick={()=>props.setValue(5)} component={Link} to="/estimate" className = {classes.estimateButton} >Free Estimate</Button>
            </Grid>
        </Grid>
    )
}