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

import consultation from '../../assets/consultationIcon.svg'
import vision from '../../assets/vision.svg'
import technologyAnimation from '../../animations/technologyAnimation/data.json'
import mockup from '../../assets/mockupIcon.svg'
import review from '../../assets/reviewIcon.svg'
import design from '../../assets/designIcon.svg'
import build from '../../assets/buildIcon.svg'
import launch from '../../assets/launchIcon.svg'
import iterate from '../../assets/iterateIcon.svg'

const useStyles = makeStyles(theme => ({
        heading:{
            maxWidth:"40em"
        },
        icon:{
           paddingLeft : "-3.5em",
           paddingRight:"1em"
        },
        rowContainer:{
            padding : "0em 5em 2em 5em",
            [theme.breakpoints.down("sm")]:{
                padding : "0dm 1em 2em 1em"
            }
        },
        itemContainer:{
            maxWidth:"40em"
        }
}))

const defaultOptions = {
    loop : true,
    autoplay : false,
    animationData : technologyAnimation,
    rendererSettings:{
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default function Revolution(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

return(
    <Grid container direction = "column">
        <Grid className = {classes.rowContainer} style = {{marginTop:"2em"}} item>
            <Typography align = {matchesSM ? "center" : undefined} variant = "h2" style={{fontFamily : "Pacifico"}}>
                The Revolution
            </Typography>
        </Grid>
        <Grid item container alignItems = "center" direction = "row" className = {classes.rowContainer} style = {{marginTop : "5em"}}>
            <Grid item lg style = {{maxWidth: matchesSM ? 300 : "40em" , marginRight:"10em"}}>
                <img style = {{maxWidth : matchesSM ? 300 : "40em"
                ,marginRight : matchesMD ? 0 : "5em",
                marginBottom : matchesMD ? "5em" : 0}} src = {vision} alt = "vision" />
            </Grid>
            <Grid item lg container direction = "column" style = {{maxWidth:"40em"}}>
                <Grid item align = "right">
                    <Typography 
                    align = {matchesMD ? "center" : "right"} variant = "h4" gutterBottom>
                        Vision
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align = "right" variant = "body1" align = {matchesMD ? "center" : "right"} paragraph>
                        The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increased our comfort, broadened our connections, and reshaped how we view the world.
                    </Typography>
                    <Typography variant = "body1" align = "right" align = {matchesMD ? "center" : "right"} paragraph>
                        What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do 
                    </Typography>
                    <Typography variant = "body1" paragraph align = "right" align = {matchesMD ? "center" : "right"}>
                        We want to help businesses capitalize on the latest and greatest technology. The best way to predict the future is to be the one building it, and we want to help guide the world into this next chapter of technological expansion, exploration, and innovation.
                    </Typography>
                    <Typography variant = "body1" paragraph align = "right" align = {matchesMD ? "center" : "right"}>
                        By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best tools necessary to thrive in this new frontier.
                    </Typography>
                    <Typography variant = "body1" paragraph align = "right" align = {matchesMD ? "center" : "right"}>
                        We see a future where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal.
                    </Typography>
                </Grid>
            </Grid> 
        </Grid>
        <Grid item container alignItems = "center" direction = "row" className = {classes.rowContainer} style = {{marginTop : "10em", marginBottom: "10em"}}>
            <Grid item lg container direction = "column" style = {{maxWidth:"40em"}}>
                <Grid item>
                    <Typography align = {matchesMD ? "center" : "right"} variant = "h4" gutterBottom>Technology</Typography>
                </Grid>
                <Grid item>
                    <Typography variant = "body1" paragraph align = {matchesMD ? "center" : "right"}>
                        In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development.
                    </Typography>
                    <Typography variant = "body1" paragraph align = {matchesMD ? "center" : "right"}>
                        Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.
                    </Typography>
                    <Typography variant = "body1" paragraph align = {matchesMD ? "center" : "right"}> 
                        Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.
                    </Typography>
                    <Typography variant = "body1" paragraph align = {matchesMD ? "center" : "right"}>
                        This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.
                    </Typography>
                    <Typography variant = "body1" paragraph align = {matchesMD ? "center" : "right"}>
                        Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself.
                    </Typography>
                </Grid>
            </Grid>
            <Grid lg item>
                <Lottie options = {defaultOptions} style = {{maxWidth : "40em"}}/>
            </Grid> 
        </Grid>
        <Grid item 
         container justify = "center" direction = "row" className = {classes.rowContainer} style = {{paddingBottom:"1em"}}>
            <Grid item  gutterBottom>
                <Typography variant = "h4" align = {matchesMD ? "center" : "right"}>
                    Process
                </Typography>
            </Grid>
        </Grid>
        <Grid item container style = {{backgroundColor:"#B3B3B3", height : "90em"}} className = {classes.rowContainer} direction = "row">
                <Grid item lg container direction = "column">
                    <Grid item >
                        <Typography variant = "h4" gutterBottom style = {{color: "#000",marginTop : "5em"}} align = {matchesMD ? "center" : "right"}>
                            Consultation
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant = "body1" paragraph align = {matchesMD ? "center" : "right"} style = {{color: "#fff",maxWidth : "20em"}}>
                            Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                        </Typography>
                        <Typography variant = "body1" paragraph align = {matchesMD ? "center" : "right"} style = {{color: "#fff",maxWidth : "20em"}}>
                            Detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously
                            unimaginable, and our expertise and intuition will help usher you into this new future of possibilities
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style = {{alignSelf : "center"}}>
                    <img src = {consultation} alt = "consultation" />
                </Grid>
        </Grid>
        <Grid item container style = {{backgroundColor:"#B3B3B3", height : "90em"}} className = {classes.rowContainer} direction = "row">
                <Grid item lg container direction = "column">
                    <Grid item >
                        <Typography align = {matchesMD ? "center" : "right"} variant = "h4" gutterBottom style = {{color: "#FF7373",marginTop : "5em"}}>
                            Mockup
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant = "body1" paragraph align = {matchesMD ? "center" : "right"} style = {{color: "#fff",maxWidth : "20em"}}>
                            After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.
                        </Typography>
                        <Typography variant = "body1" paragraph align = {matchesMD ? "center" : "right"} style = {{color: "#fff",maxWidth : "20em"}}>
                            Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.
                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            This helps us understand and refine the solution itself before getting distracted by specifics and looks.                        
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style = {{alignSelf : "center"}}>
                    <img src = {mockup} alt = "basic website design" />
                </Grid>
        </Grid>
        <Grid item container style = {{backgroundColor:"#39B54A", height : "90em"}} className = {classes.rowContainer} direction = "row">
                <Grid item lg container direction = "column">
                    <Grid item >
                        <Typography variant = "h4" gutterBottom align = {matchesMD ? "center" : "right"} style = {{color: "#000",marginTop : "5em"}}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature                        
                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of des
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style = {{alignSelf : "center"}}>
                    <img src = {review} alt = "magniging glass" />
                </Grid>
        </Grid>
        <Grid item container style = {{backgroundColor:"#A67C52", height : "90em"}} className = {classes.rowContainer} direction = "row">
                <Grid item lg container direction = "column">
                    <Grid item >
                        <Typography align = {matchesMD ? "center" : "right"} variant = "h4" gutterBottom style = {{color: "#000",marginTop : "5em"}}>
                            Design
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                           Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.
                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            No aspect is superfluous, and care will be taken with every decision.                    
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style = {{alignSelf : "center"}}>
                    <img src = {design} alt = "paint brush" />
                </Grid>
        </Grid>
        <Grid item container style = {{backgroundColor:"#FBB03B", height : "90em"}} className = {classes.rowContainer} direction = "row">
                <Grid item lg container direction = "column">
                    <Grid item >
                        <Typography align = {matchesMD ? "center" : "right"} variant = "h4" gutterBottom style = {{color: "#000",marginTop : "5em"}}>
                        Build
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            Here’s where we get down to business.                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.
                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            Each area is then developed in order of importance until ready to be connected to the next piece.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style = {{alignSelf : "center"}}>
                    <img src = {build} alt = "building construction" />
                </Grid>
        </Grid>
        <Grid item container style = {{backgroundColor:"#C1272D", height : "90em"}} className = {classes.rowContainer} direction = "row">
                <Grid item lg container direction = "column">
                    <Grid item >
                        <Typography align = {matchesMD ? "center" : "right"} variant = "h4" gutterBottom style = {{color: "#000",marginTop : "5em"}}>
                            Launch
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                             The moment we’ve all been waiting for                        
                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.
                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to 
                            plan so you can start reaping the rewards of your 
                            technological investment immediately.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style = {{alignSelf : "center"}}>
                    <img src = {launch} alt = "rocket" />
                </Grid>
        </Grid>
        <Grid item container style = {{backgroundColor:"#8E45CE", height : "90em"}} className = {classes.rowContainer} direction = "row">
                <Grid item lg container direction = "column">
                    <Grid item >
                        <Typography align = {matchesMD ? "center" : "right"} variant = "h4" gutterBottom style = {{color: "#000",marginTop : "5em"}}>
                            iterate
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new
                             system entirely.
                        </Typography>     
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            By planning for future features and changes we can build and evolve your application over time. As new use cases and
                             customer needs develop we can respond with continuous integration of new content.
                        </Typography>
                        <Typography align = {matchesMD ? "center" : "right"} variant = "body1" paragraph style = {{color: "#fff",maxWidth : "20em"}}>
                            Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of
                            waiting months for a single update.                       
                       </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style = {{alignSelf : "center"}}>
                    <img src = {iterate} alt = "consultation" />
                </Grid>
        </Grid>       
    </Grid>
)
}