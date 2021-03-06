import React,{useState} from 'react'
import {cloneDeep} from 'lodash'
import Grid from '@material-ui/core/Grid'
import Lottie from 'react-lottie'
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

import check from '../../assets/check.svg'
import send from '../../assets/send.svg'
import software from '../../assets/software.svg'
import mobile from '../../assets/mobile.svg'
import website from '../../assets/website.svg'
import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import backArrowDisabled from '../../assets/backArrowDisabled.svg'
import forwardArrowDisabled from '../../assets/forwardArrowDisabled.svg'
import camera from '../../assets/camera.svg'
import upload from '../../assets/upload.svg'
import person from '../../assets/person.svg'
import persons from '../../assets/persons.svg'
import people from '../../assets/people.svg'
import info from '../../assets/info.svg'
import bell from '../../assets/bell.svg'
import users from '../../assets/users.svg'
import iphone from '../../assets/iphone.svg'
import gps from '../../assets/gps.svg'
import customized from '../../assets/customized.svg'
import data from '../../assets/data.svg'
import android from '../../assets/android.svg'
import globe from '../../assets/globe.svg'
import biometrics from '../../assets/biometrics.svg'

import estimateAnimation from '../../animations/estimateAnimation/data.json'
import { IconButton } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    icon : {
        width: "12em",
        height: "10em"
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor:theme.palette.common.orange,
        height: 50,
        width: 225,
        fontSize: "1.23=5rem",
        marginTop:"5em",
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }
    }
}))

const defaultQuestions = [
    {
        id:1,
        title:"Which service are you interested in?",
        active: true,
        options:[
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: software,
                iconAlt: "three floating screens",
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: "IOS/Android Development",
                subtitle: null,
                icon: mobile,
                iconAlt: "phones and tablet",
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            }
        ]
    }
]

const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iphone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100
        }
      ],
      active: true
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: camera,
          iconAlt: "camera outline",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: users,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100
        }
      ],
      active: false
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: person,
          iconAlt: "person outline",
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5
        }
      ],
      active: false
    }
  ];
  
  
  const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "person outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 200
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 250
        }
      ],
      active: true
    }
  ];
  

export default function Estimate(){
    const classes = useStyles()
    const theme = useTheme()

    const [questions,setQuestion] = useState(softwareQuestions)

    const defaultOptions = {
        loop : true,
        autoplay : false,
        animationData : estimateAnimation,
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const nextQuestion = () => {
        const newQuestions = cloneDeep(questions)
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id-1
        const nextIndex = activeIndex + 1

        newQuestions[activeIndex] = {...currentlyActive[0],active:false}
        newQuestions[nextIndex] = {...newQuestions[nextIndex],active:true}

        setQuestion(newQuestions)
    }

    const previousQuestion = () => {
        const newQuestions = cloneDeep(questions)
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id-1
        const nextIndex = activeIndex - 1

        newQuestions[activeIndex] = {...currentlyActive[0],active:false}
        newQuestions[nextIndex] = {...newQuestions[nextIndex],active:true}

        setQuestion(newQuestions)
    }

    const disablePrevous = () => {
      const currentlyActive = questions.filter(question => question.active)
      const activeIndex = currentlyActive[0].id-1
      if(activeIndex === 1){return true}
      return false
    }

    const disableNext = () => {
      const currentlyActive = questions.filter(question => question.active)
      const activeIndex = currentlyActive[0].id-1
      if(activeIndex === 5){return true}
      return false
    }

    return(
        <Grid container direction = "row">
            <Grid item container direciton = "column" lg>
                <Grid item>
                    <Typography variant = "h2">
                        Estimate
                    </Typography>
                </Grid>
                <Grid item style = {{marginRight: "10em",
                    maxWidth:"50em", marginTop:"12.5em"}}>
                    <Lottie options = {defaultOptions} height="30%" width = "100%" />
                </Grid>
            </Grid>
            <Grid style = {{marginTop:"5em", marginBottom:"25em"}}
             item container direction = "column" lg>
             {
              questions.filter(question => question.active).map(
                  (question,index) => (
                    <React.Fragment key = {index}>
                        <Grid item>
                            <Grid item>
                                <Typography variant = "h2" align = "center" style={{fontWight:300,
                                    marginTop:"5em"}}>
                                    {question.title}
                                </Typography>
                                <Typography variant = "body1" align = "center"
                                style = {{marginBottom:"2.5em"}} gutterBottom>
                                {question.subtitle}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            {question.options.map(option => (
                                <Grid item container direction = "column" md>
                                    <Grid item style = {{maxWidth : "12em"}}>
                                        <Typography variant = "h6" align = "center"
                                        style ={{marginBottom: "1em"}}>
                                            {option.title}
                                        </Typography>
                                        <Typography variant = "caption" align = "center">
                                            {option.subtitle}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img className = {classes.icon} src = {option.icon} alt = {option.iconAlt}/>
                                    </Grid>
                                </Grid>
                          ))}
                        </Grid>
                    </React.Fragment>
                  ))   
             }
                <Grid item container justify = "space-between" 
                style = {{width:"18em",marginTop:"5em",marginLeft:"12em"}}>
                    <Grid item>
                        <IconButton disabled={disablePrevous()} onClick={previousQuestion}>
                            <img src = {backArrow} alt = "Previous" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton disabled={disableNext()} onClick={nextQuestion}>
                            <img src = {forwardArrow} alt = "Next question" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}