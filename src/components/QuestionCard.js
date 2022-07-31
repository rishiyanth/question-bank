import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuestionCard = () => {

    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                   This is a sample question card
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Option 1</ListGroup.Item>
            <ListGroup.Item>Option 2</ListGroup.Item>
            <ListGroup.Item>Option 3</ListGroup.Item>
            <ListGroup.Item>Option 4</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card> 
    )
}

export default QuestionCard