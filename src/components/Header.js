//import Container from 'react-bootstrap/Container';
import {Navbar, Button,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react';
import {BsFileCode} from "react-icons/bs";
import {NavLink} from "react-router-dom";

function Header (props) {

  function handleClick(e){
    props.onSelection(e)
  }

  // function handleSelect(event){
  //   console.log(event)
  // }
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Link as={NavLink} to = "/">Home</Nav.Link>
          <Nav.Link as={NavLink} to = "/about">About</Nav.Link>
        </Nav>  
        <Navbar.Brand className = 'm-auto'>
          <BsFileCode></BsFileCode>
            Question Bank
          </Navbar.Brand>
        <Button onClick = {handleClick}>
            Sign In
        </Button>
      </Navbar>
    </Fragment>
  );
}

export default Header;