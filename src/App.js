import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import QuestionTemplate from './components/QuestionTemplate';
import SubHeader from './components/SubHeader';
import About from './components/About';
import {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {

  const [log,setLog] = useState(false)
  // //const [active, setActive] = useState("home")
  
  const handleLogin = (event) => {
      setLog(!log)
      console.log(log)
      //console.log(event)
  }
  
  return (
    <BrowserRouter>
      <div>
      <Header onSelection = {handleLogin}/>
      <Routes>
        <Route path = "/" 
        element=
        {
        <Fragment>
          <SubHeader/>
          <QuestionTemplate/>
        </Fragment> 
        }/>
        <Route path = "/about" element={<About/>}/>
        {/* <Route path = "/login" element={log && <LoginForm/>}/> */}
      </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
