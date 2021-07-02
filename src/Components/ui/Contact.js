import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ButtonArrow from './ButtonArrow'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Link} from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'

import mobileBackground from '../../assets/mobileBackground.jpg'
import background from '../../assets/background.jpg'
import phoneIcon from '../../assets/phone.svg'
import emailIcon from '../../assets/email.svg'
import airplane from '../../assets/send.svg'

const useStyles = makeStyles(theme=>({
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
    background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"60em",
        paddingBottom : "10em",
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
        [theme.breakpoints.down("md")]:{
            marginLeft:"0",
            marginRight:"0"
        },
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }
    },
    message:{
        border : `2px solid ${theme.palette.common.blue}`,
        marginTop : "5em",
        borderRadius : 5
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]:{
            height : 40,
            width : 225
        }
    }
}))

export default function Contact(props){

    const theme = useTheme();
    const classes = useStyles();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const [name,setName] = useState("")

    const [email,setEmail] = useState("")
    const [emailHelper,setEmailHelper] = useState("")

    const [phone,setPhone] = useState("")
    const [phoneHelper,setPhoneHelper] = useState("")

    const [message,setMessage] = useState("")
    const [open,setOpen] = useState(false)

    const [loading,setLoading] = useState(false)

    const [alert,setAlert] = useState({open: false,message: "",backgroundColor:""})

    const handleEvents = (e) => {
        let valid;
        const Evalue = e.target.value;
        switch(e.target.id){
            case "name":
                setName(Evalue)
                break;
            case "email":
                setEmail(Evalue)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(Evalue)
                setEmailHelper(!valid ? "Enter correct Email" : "")
                break;
            case "phone":
                setPhone(Evalue)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(Evalue)
                setPhoneHelper(!valid ? "Enter correct Number" : "")
                break;
            case "message":
                setMessage(Evalue)
                break;
            default:
                break;
        }
    }

    const onConfirm = () => {
        setLoading(true)
        axios.get('https://us-central1-material-ui-course-6ab3d.cloudfunctions.net/sendMail',{params:{
            name:name,
            email:email,
            message:message,
            phone:phone
        }})
        .then(res => {setLoading(false); setAlert({
            open:true, message:"Message sent successfully", backgroundColor: "#4BB543"
        }); setOpen(false); setName(""); setPhone(""); setEmail(""); setMessage(""); console.log(res)})
        .catch(err => {setLoading(false); setAlert({open: true,message: "Something went wrong,please try again",backgroundColor:"#FF3232"}); console.log(err)})
    }

    const Sendbutton = (<React.Fragment>
                        Send message <img style = {{marginLeft : "1em"}} src={airplane} alt = "paper airplane" />
                    </React.Fragment>)

    return(
        <Grid container direction = "row">
            <Grid md = {4} alignItems = "center" justify = "center" item container direction = "column">
                <Grid item>
                    <Grid container direction = "column">
                    <Grid item>
                        <Typography style = {{lineHeight : 1}} variant = "h2">
                            Contact Us
                        </Typography>
                        <Typography style = {{color : theme.palette.common.blue}} variant = "body1">
                            We're waiting
                        </Typography>
                    </Grid>
                    <Grid item container style = {{marginTop:"2em"}}>
                        <Grid item>
                            <img style = {{marginRight : "0.5em"}} src = {phoneIcon} alt = "phone" />
                        </Grid>
                        <Grid item>
                            <Typography style = {{color:theme.palette.common.blue,fontSize : "1rem"}} variant = "body1">(555)-555-555</Typography>
                        </Grid>
                    </Grid>
                <Grid item container style = {{marginBottom:"2em"}}>
                    <Grid item>
                        <img style = {{marginRight : "1em",verticalAlign : "bottom"}} src = {emailIcon} alt = "email Icon"/>
                    </Grid>
                    <Grid item>
                        <Typography style = {{color:theme.palette.common.blue,fontSize : "1rem"}} variant = "body1">ankursolanki@gmail.com</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction = "column" style={{maxWidth:"20em"}}>
                    <Grid item>
                        <TextField fullWidth label = "Name" id = "name" value = {name}
                         onChange = {(ev) => {handleEvents(ev)}}/>
                    </Grid>
                    <Grid item>
                        <TextField fullWidth label = "Email" id = "email"  value = {email} error = {emailHelper.length !== 0} helperText = {emailHelper}
                         onChange = {(ev) => {handleEvents(ev)}}/>
                    </Grid>
                    <Grid item >
                        <TextField fullWidth label = "Phone" id = "phone"  value = {phone} error = {phoneHelper.length !== 0} helperText = {phoneHelper}
                         onChange = {(ev) => {handleEvents(ev)}}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth:"20em"}} >
                    <TextField  InputProps={{disableUnderline : true}}
                     className = {classes.message} multiline rows = {7} id = "message" value = {message} onChange = {(ev) => {handleEvents(ev)}}/>
                </Grid>
                <Grid item container style = {{marginTop:"2em"}} justify= "center">
                    <Button onClick = {() => setOpen(true)} className = {classes.sendButton} variant = "contained">
                        {Sendbutton}
                    </Button>
                </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog style = {{zIndex : "1302"}} PaperProps = {{style:{ padding : matchesXS ?"1em 0em 5em 0em" : matchesSM ? "1em 0em 5em 0em" : matchesMD ? "5em 10em 5em 10em" : "5em 20em 5em 20em"}}} open = {open} onClose = {()=>setOpen(false)}>
                <DialogContent>
                    <Grid item>
                        <Typography variant = "h2">
                            Conform Page
                        </Typography>
                    </Grid>
                    <Grid item container direction = "column" style={{maxWidth:"20em"}}>
                        <Grid item>
                            <TextField fullWidth label = "Name" id = "name" value = {name}
                             onChange = {(ev) => {handleEvents(ev)}}/>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth label = "Email" id = "email"  value = {email} error = {emailHelper.length !== 0} helperText = {emailHelper}
                            onChange = {(ev) => {handleEvents(ev)}}/>
                        </Grid>
                        <Grid item >
                            <TextField fullWidth label = "Phone" id = "phone"  value = {phone} error = {phoneHelper.length !== 0} helperText = {phoneHelper}
                             onChange = {(ev) => {handleEvents(ev)}}/>
                        </Grid>
                    </Grid>
                    <Grid item style={{maxWidth : "40em"}} >
                        <TextField fullWidth InputProps={{disableUnderline : true}}
                         className = {classes.message} multiline rows = {7} id = "message" value = {message} onChange = {(ev) => {handleEvents(ev)}}/>
                    </Grid>
                    <Grid item container alignItems = "center" direction = {matchesMD ? "column" : "row"}>
                        <Grid item>
                            <Button onClick = {() => setOpen(false)}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button onClick = {onConfirm} className = {classes.sendButton} variant = "contained">
                                {loading ? <CircularProgress size={30} /> : Sendbutton}
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar open = {alert.open} message={alert.message} ContentProps={{style:{backgroundColor: alert.backgroundColor}}} 
                anchorOrigin = {{vertical : "top", horizontal: "center"}} onClose = {() => setAlert({...alert,open:false})} 
                autoHideDuration = {4000}
            />
            <Grid md = {8} direction = {matchesMD ? "column" : "row"}
             alignItems = "center" item container className = {classes.background}>
                <Grid item style={{marginLeft: matchesMD ? "0" : "5em",textAlign:matchesXS?"center":"inherit"}}>
                <Grid container direction = "column">
                    <Grid item>
                        <Typography align = {matchesMD ? "center" : undefined} variant="h2">
                            Simple Software <br />
                            Revolutionary Results
                        </Typography>
                        <Typography align = {matchesMD ? "center" : undefined} variant = "subtitle2" style = {{fontSize:"1.5rem"}}>
                            Take advantage of the 21st century
                        </Typography>
                        <Grid container item justify={matchesMD ? "center" : undefined}>
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
        </Grid>
    )
}