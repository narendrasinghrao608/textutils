// import logo from './logo.svg';
//react is single page application only one requist to server then server give multiple html,css,javascript file then react javascript give htmls css acording to user request dynamically by using api
import { useState } from 'react';
import './App.css';
// import ReactDOM from "react-dom/client";
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/about';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
function App() {
  const [mode,setmode]=useState("light");//dark mode anavaible or not
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const removeBodyclasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  const togglemode=(cls)=>{
    removeBodyclasses()
    document.body.classList.add('bg-'+cls)
  }
  const togglemode1=()=>{
    removeBodyclasses()
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="grey"
      showalert("dark  mode has been enabled","success")
      document.title="hari bol"
      // setInterval(() => {
      //   document.title="hari bol"
      // }, 2000);
      // setInterval(() => {
      //   document.title="jai gour nitai"
      // }, 1500);
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white"
      showalert("light  mode has been enabled","success")
      document.title="nitai gour hari bol"
    }
  }
  return (
    <>  
      {/* <Navbar title="HareKrishna" aboutText="Ab out us"/> */}
      {/* <Navbar title="HareKrishna"/> */}
      <Router>
      <Navbar title='HareKrishna' mode={mode} togglemode1={togglemode1} togglemode={togglemode}/>
      <Alerts alert={alert}/>
      <div className="container">
        <Routes>
          {/* /users----> Component 1
          /users/contact----> Component 2 for using exact compulsory doing this*/}
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showalert={showalert}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>} />
        
        </Routes>
      </div>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
