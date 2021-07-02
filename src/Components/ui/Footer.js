import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import footerAdornment from '../../assets/Footer Adornment.svg'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme)=>(
    {
        footer : {
           backgroundColor:theme.palette.primary.main,
           width : "100%",
           zIndex:"1302",
           position:"relative"
        },
        adornment : {
            width:"25em",
            [theme.breakpoints.down("md")] : {
                width:"20em"
            },
            [theme.breakpoints.down("xs")] : {
                width:"10em"
            },
            verticalAlign : "bottom"
        },
        link : {
            fontFamily : "Arial",
            fontSize : "0.75rem",
            fontWeight: "bold",
            color: "white",
            textDecoration : "none"
        },
        mainContainer : {
            position:"absolute"
        },
        gridItem : {
            margin : "3.5em"
        }
    }
));

export default function Footer(props){
    const classes = useStyles();

    return (
        <footer className = {classes.footer}>
             <Grid container justify = "center" className = {classes.mainContainer} spacing="2">
             <Hidden mdDown>
                  <Grid item className = {classes.gridItem} >
                    <Grid container direction="column" spacing = "2">
                        <Grid item className={classes.link} onClick={()=>props.setValue(0)}  component={Link} to= "/">
                            Home
                        </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className = {classes.gridItem}>
                      <Grid container direction = "column" spacing = "2">
                          <Grid item className={classes.link} onClick={()=>props.setValue(2)} component={Link} to="/revolution">
                              The Revolution
                          </Grid>
                          <Grid item className={classes.link} onClick={()=>props.setValue(2)} component={Link} to="/revolution">
                              The Vision
                          </Grid>
                          <Grid item className={classes.link} onClick={()=>props.setValue(2)} component={Link} to="/revolution">
                               Technology 
                          </Grid>
                          <Grid item className = {classes.link} onClick={()=>props.setValue(2)} component={Link} to="/revolution">
                              Process
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item className = {classes.gridItem}>
                      <Grid container direction = "column" spacing = "2">
                         <Grid item className={classes.link} onClick={()=>props.setValue(1)} component={Link} to="/services">
                             Services
                         </Grid> 
                         <Grid item className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}} component={Link} to="/customs">
                             Custom Services
                         </Grid> 
                         <Grid item className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}} component={Link} to="/services">
                             Mobile DEVELOPMENT
                         </Grid> 
                         <Grid item className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}} component={Link} to="/services">
                             Web Development
                         </Grid>
                         <Grid item className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}} component={Link} to="/services">
                             GO Online
                         </Grid>  
                      </Grid>
                  </Grid>
                  <Grid item className = {classes.gridItem}>
                      <Grid container direction = "column" spacing = "2">
                         <Grid item className={classes.link} onClick={()=>props.setValue(3)} component = {Link} to="/about">
                             About Us
                         </Grid> 
                         <Grid item className={classes.link} onClick={()=>props.setValue(3)} component = {Link} to="/about">
                             History
                         </Grid> 
                         <Grid item className={classes.link} onClick={()=>props.setValue(3)} component = {Link} to="/about">
                             Team
                         </Grid> 
                      </Grid>
                  </Grid>
                  <Grid item className = {classes.gridItem}>
                      <Grid container direction = "column" spacing = "2">
                          <Grid item onClick={()=>props.setValue(4)} className = {classes.link} component = {Link} to="/contact">
                              Contact Us
                          </Grid>
                      </Grid>
                  </Grid>
                  </Hidden>
              </Grid>
              <img className = {classes.adornment} alt="footer Adornment" 
              src = {footerAdornment}></img>
        
             
        </footer>    
            );
}