import React,{useState} from 'react';
import Header from './ui/Header';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import theme from './ui/Theme';
import Footer from './ui/Footer';
import LandingPage from './ui/LandingPage';
import Services from './ui/Services'
import CustomSoftware from './ui/CustomSoftware';
import IOSAndroid from './ui/IOSAndroid';
import Websites from './ui/Websites';
import Revolution from './ui/Revolution';
import Contact from './ui/Contact';
import Estimate from './ui/Estimate';

function App() {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0);

  const routes = [
    {path:"/revolution",name:"REVOLUTION"},{path:"/about",name:"ABOUT"},
    {path:"/online",name:"GO ONLINE"}
  ]

  return (
    <ThemeProvider theme = {theme}>
     <BrowserRouter>
      <Header value = {value} setValue = {setValue}
       selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex} />
        <Switch>
        <Route exact path="/"
           render = {(props)=><LandingPage setValue = {setValue}
       selectedIndex = {selectedIndex}/>} />
       <Route exact path="/services"
           render = {(props)=><Services setValue = {setValue}
       selectedIndex = {selectedIndex}/>} />
       <Route exact path="/customs"
           render = {(props)=><CustomSoftware setValue = {setValue}
       selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>} />
       <Route exact path="/android"
           render = {(props)=><IOSAndroid setValue = {setValue}
       selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>} />
       <Route exact path="/website"
           render = {(props)=><Websites setValue = {setValue}
       selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>} />
       <Route exact path="/revolution"
           render = {(props)=><Revolution setValue = {setValue}
       selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>} />
       <Route exact path="/contact"
           render = {(props)=><Contact setValue = {setValue}
       selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>} />
       <Route exact path="/estimate"
           render = {(props)=><Estimate setValue = {setValue}
       selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>} />
        {routes.map((options,i)=>(
          <Route key = {i} exact path={options.path}
           component = {()=><div style = {{marginBottom : "200em"}}>{options.name}</div>} />
        ))}
        </Switch>
      <Footer value = {value} setValue = {setValue}
       selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>  
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;