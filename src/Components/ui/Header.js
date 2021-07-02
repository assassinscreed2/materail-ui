import React, {useState , useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles =   makeStyles(theme => ({
   toolbarMargin : {
     ...theme.mixins.toolbar,
     marginBottom : "3em",
     [theme.breakpoints.down("md")]:{
       marginBottom:"2em"
     },
     [theme.breakpoints.down("xs")]:{
       marginBottom:"1.75em"
     }
   },
   TabContainer:{
     marginLeft : "auto"
   },
   logo:{
    [theme.breakpoints.down("lg")]:{
       height : "7rem"
    },
    [theme.breakpoints.down("md")]:{
      height : "6rem"
    },
    [theme.breakpoints.down("xs")]:{
      height : "5.5rem"
    }
   },
   tab:{
     ...theme.typography.tab,
     color:"#f8f1f1",
     minWidth:"10px",
     marginLeft:"20px"
   },
   button:{
     borderRadius:"100px",
     margin:"20px",
     ...theme.typography.estimate,
     "&:hover":{
      backgroundColor:theme.palette.secondary.light
  }
   },
   menu:{
     backgroundColor: theme.palette.primary.main,
     color:"white"
   },
   menuItem:{
    ...theme.typography.tab,
    opacity : 0.7,
    "&:hover":{
      opacity : 1
    }
   },
   drawerIconContainer:{
    "&:hover": {
      backgroundColor:"transparent"
    },
    marginLeft : "auto"
  },
  iconMenu:{
    height:"50px",
    width:"50px"
  },
  drawer:{
    backgroundColor: theme.palette.primary.main
  },
  drawerItem:{
    ...theme.typography.tab,
    opacity : 0.7,
    color:"white"
  },
  drawerItemEstimate:{
    backgroundColor: theme.palette.secondary.main
  },
  drawerItemSelected:{
    "& .MuiListItemText-root" : {
      opacity : "1"
    }
  },
  appBar:{
    zIndex : theme.zIndex.modal + 1
  }
}))

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

function Header(props){
const classes = useStyles()
const theme = useTheme();
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const [openDrawer,setOpenDrawer] = useState(false);

const [anchorEl , setAnchorEl] = useState(null);
const [openMenu, setOpenMenu] = useState(false);

const matches = useMediaQuery(theme.breakpoints.down("md"));

const handleChange = (e,newValue)=>{
  props.setValue(newValue)
}

const handleClick = (e) =>{
  setAnchorEl(e.currentTarget)
  setOpenMenu(true)
}

const handleMenuItemClick = (e,i) =>{
  setAnchorEl(null);
  setOpenMenu(false);
  props.setSelectedIndex(i);
}

const handleClose = (e) =>{
  setAnchorEl(null)
  setOpenMenu(false)
}

const menuOptions = [
  {name:"Custom Software",link:"/customs",activeIndex:1,selectedIndex:0},
  {name:"Website Development",link:"/website",activeIndex:1,selectedIndex:1},
  {name:"Android Development",link:"/android",activeIndex:1,selectedIndex:2},
  {name:"Go Online",link:"/online",activeIndex:1,selectedIndex:3},
]

const routes = [
  {name:"Home",link:"/",activeIndex:0},
  {name:"Services",link:"/services",activeIndex:1,ariaOwns:anchorEl ? "simple-menu" : undefined, 
  ariaHaspopup:anchorEl ? "true" : undefined,mouseOver : event => handleClick(event)},
  {name:"The Revolution",link:"/revolution",activeIndex:2},
  {name:"Contact Us",link:"/contact",activeIndex:3}
]
useEffect(()=>{
  [...menuOptions,...routes].forEach(route => {
    switch (window.location.pathname){
      case `${route.link}`:
        if(props.value !== route.activeIndex){
          props.setValue(route.activeIndex);
          if(route.selectedIndex && route.selectedIndex !== props.selectedIndex){
             props.setSelectedIndex(route.selectedIndex);
          }
        }
        break;
      case '/estimate':
        props.setValue(5);
        break;  
      default:
        break;  
    }
  });
},[props.value,routes,menuOptions,props.selectedIndex])

   const tabs = (
     <React.Fragment>
           <Tabs value = {props.value} onChange = {handleChange} className = {classes.TabContainer} indicatorColor = "primary">
               {routes.map((route,i) => (
                 <Tab key={i} label={route.name} component={Link} to ={route.link} className = {classes.tab}
                  aria-owns = {route.ariaOwns} aria-haspopup = {route.ariaHaspopup} onMouseOver = {route.mouseOver} />
               ))}
           </Tabs>
           <Button onClick={()=>props.setValue(4)} component={Link} to="/estimate" variant="contained" color="secondary"
            className = {classes.button}>Free Estimate</Button>
        <Menu id = "simple-menu" anchorEl = {anchorEl}
         open = {openMenu} onClose = {handleClose} 
         elevation = "0" 
         classes = {{paper : classes.menu}}
         MenuListProps = {{onMouseLeave : handleClose}} 
         style = {{zIndex:1302}}
         keepMounted>
         { menuOptions.map((options,i) => (
           <MenuItem key={i} component={Link} to ={options.link} classes = {{root:classes.menuItem}}
            onClick = {(event)=>{console.log(i); handleMenuItemClick(event,i); 
            props.setValue(1); handleClose();}} 
            selected = {i===props.selectedIndex && props.value === 1}>
               {options.name}
            </MenuItem>))}
        </Menu>
     </React.Fragment>
   )

   const drawer = (
     <React.Fragment>
       <SwipeableDrawer className = {classes.drawerShift} disableBackdropTransition={!iOS} disableDiscovery={iOS} open = {openDrawer}
         onClose = {()=>setOpenDrawer(false)} onOpen = {()=>setOpenDrawer(true)}
         classes = {{paper : classes.drawer}}>
         <div className={classes.toolbarMargin} />
           <List disablePadding>
             {routes.map((route,i) => (
               <ListItem key={i} button divider component = {Link} to = {route.link}
               onClick = {() => {setOpenDrawer(false); props.setValue(route.activeIndex)}} 
               selected = {props.value === route.activeIndex} 
               classes = {{selected: classes.drawerItemSelected}}>
                 <ListItemText className = {classes.drawerItem} disableTypography>{route.name}</ListItemText> 
               </ListItem>
             ))}
             <ListItem button divider classes = {{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}>
               <ListItemText className = {classes.drawerItem} disableTypography>Free Estimate</ListItemText>
             </ListItem>
           </List>
       </SwipeableDrawer>
       <IconButton className = {classes.drawerIconContainer} onClick = {() => setOpenDrawer(!openDrawer)} disableRipple>
         <MenuIcon className = {classes.iconMenu}/>
       </IconButton>
     </React.Fragment>
   )
    return(
      <React.Fragment>
    <ElevationScroll>
    <AppBar position = "fixed" className={classes.appBar}>
      <Toolbar disableGutters>
         <img className = {classes.logo} src={logo} />
         {matches ? drawer : tabs}
      </Toolbar>
    </AppBar>
    </ElevationScroll>
    <div className = {classes.toolbarMargin}></div>
    </React.Fragment>
    )
}

export default Header;