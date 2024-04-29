import Navbar from './components/Navbar';
import './App.css';
import TextForm from  "./components/TextForm";
// import About from './components/About';
import React, {useState} from  'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light'); //Wheater the dark mode is enabled or not

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='gray';
      showAlert("Dark mode has been enabled!","success")
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled!","success")

    }
    }
    const [alert, setAlert]=useState(null)

    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{setAlert(null)},2000)
    }

  return (
    <>
    {/* <Router> */} 
    
<Navbar title="My_app"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  {/* <Navbar/> */} 
<div className="container"> 
{/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForm heading="Enter text here" mode={mode}/>
          {/* </Route>
        </Switch> */}

</div>

{/* <div className="container">
<About />
</div> */}
{/* </Router> */}

    </>
  );
}

export default App;



