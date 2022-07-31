import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
//import LoginForm from './components/LoginForm';
import QuestionTemplate from './components/QuestionTemplate';
import SubHeader from './components/SubHeader';
import About from './components/About';
//import {BrowserRouter, Route} from 'react-router-dom'


function App() {

  const [log,setLog] = useState(false)
  
  const handleLogin = (event) => {
      setLog(!log)
  }
  
  return (
    <Fragment>
      <Header status={log} onSelect = {handleLogin}/>
      <SubHeader/>
      <QuestionTemplate/>
      <About></About>     
      {/* {log && <LoginForm></LoginForm>} */}
    </Fragment>
  );
}

export default App;
