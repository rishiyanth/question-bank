import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubHeader= () => {

    return(
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              htmlSize='20'
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}

export default SubHeader