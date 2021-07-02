import { createMuiTheme } from '@material-ui/core/styles';

const arcGrey = "#868686"
const arcBlue = "#65d6ce"

export default createMuiTheme({
   palette : {
       common : {
           blue : "#65d6ce",
           orange: "#fa9579"
       },
       primary:{
           main : "#0779e4"
       },
       secondary : {
           main : "#fa9579"
       }
    },
    typography:{
        tab:{
            fontFamily:"Righteous",
            textTransform: "none",
            fontWeight:"700",
            fontSize :"0.9rem",
        },
        estimate:{
            fontFamily: "Pacifico",
            fontSize:"1rem",
            textTransform: "none",
            color:"white"
        },
        h2:{
            fontFamily:"Raleway",
            fontWeight: 700,
            fontSize:"2rem",
            color:"#51adcf",
            lineHeight:1.5
        },
        h3:{
            fontFamily:"Pacifico",
            fontSize:"2.5rem",
            color:"#51adcf"
        },
        h4:{
            fontFamily:"Raleway",
            fontSize:"1.75rem",
            color:"#51adcf",
            fontWeight:700
        },
        h6:{
            fontWeight: 500,
            fontFamily: "Raleway",
            color:arcBlue,
            lineHeight:1
        },
        subtitle1:{
            fontSize:"1.25rem",
            fontWeight:300,
            color:`${arcGrey}`
        },
        subtitle2:{
            color:"white",
            fontSize:"1.25rem",
            fontWeight:300
        },
        body1:{
            fontSize:"1.25rem",
            color: arcGrey,
            fontWeight:300
        }},
    overrides:{
        MuiInputLabel:{
            root:{
                color:arcBlue,
                fontSize : "1rem"
            }
        },
        MuiInput:{
            underline:{
                "&:before":{
                    borderBottom : `2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($error):not($focused):before":{
                    borderBottom : `2px solid ${arcBlue}`
                }
            }
        }
    },
    learnButton:{
            borderColor:"#51adcf",
            color:"#51adcf",
            borderWidth: 2,
            textTransform:"none",
            borderRadius:"50px",
            fontFamily:"Roboto",
            fontWeight:"bold",
        }    
});

