  import { useState } from 'react';
  import './App.css';
  import About from './components/About';
  import Navbar from './components/Navbar';
  import TextForm from './components/TextForm';
  import Alert from './Alert';

  import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


  function App()
  {
    const[mode,setMode]=useState('light')
    const[alert,setAlert]=useState(null)

    const showAlert=(message,type)=>{
      setAlert(
        {
          msg:message,
          type:type
        })
      setTimeout(()=>{
        setAlert(null)
      },2000)
    }

    const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor=" #212529"
        showAlert('Dark Mode Has Been Enabled','success')
      }
      else{
        setMode('light')
        document.body.style.backgroundColor="white"
        showAlert('Light Mode Has Been Enabled','success')
      }
    }
    return (
  <>

  

  <Router>
  <Navbar title ="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3"> 
  <Routes>
            <Route path="/about" element={  <About mode={mode} />}>
            </Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading=" ENTER THE TEXT TO MODIFY" mode={mode}/>}>

            </Route>
          </Routes>
            
            
          </div>
          </Router>





  </>
  );
    }

  export default App;
