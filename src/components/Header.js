import Container from 'react-bootstrap/Container';
import {Navbar, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react';
import {BsFileCode} from "react-icons/bs";

function Header() {
  
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className = 'm-auto'>
            {/* <img
              alt=""
              src={"./assets/qm.jpg"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
            <BsFileCode></BsFileCode>
            Question Bank
          </Navbar.Brand>
        </Container>
        <Button>
            Sign In
        </Button>
      </Navbar>
    </Fragment>
  );
}

export default Header;