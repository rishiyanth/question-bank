import Container from 'react-bootstrap/Container';
import {Navbar, Button,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react';
import {BsFileCode} from "react-icons/bs";
//import {NavLink} from 'react-router-dom';

function Header (props) {

  function handleClick(e){
    props.onSelect(e)
  }
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to={"/"}>Home</Nav.Link>
            <Nav.Link to={"/about"}>About</Nav.Link>
          </Nav>
        </Container>
        <Container>
          <Navbar.Brand className = 'm-auto'>
            <BsFileCode></BsFileCode>
            Question Bank
          </Navbar.Brand>
        </Container>
        <Button onClick={handleClick}>
            Sign In
        </Button>
      </Navbar>
    </Fragment>
  );
}

export default Header;