import './ItemCount.css';
import { Button, ButtonGroup, Row, Card } from 'react-bootstrap';



export const ItemCount = ({ min, max, onAdd, count, item }) => {

    return (
        <Card id="itemCountWraper">
            <Card.Body>
                <Row>
                    <ButtonGroup size="sm">
                        <Button onClick={min} variant="outline-danger" >-</Button>
                        <Button className="disabled" variant="outline-secondary">Stock: {parseInt(item.stock)}</Button>
                        <Button onClick={max} variant="outline-success">+</Button>
                    </ButtonGroup>
                </Row>
                <br></br>
                <Row>
                    <Button id="agregarAlCarroBtn" disabled={count <= 0} onClick={onAdd} variant="outline-dark" size="lg">
                        Agregar {count}
                    </Button>
                </Row>
            </Card.Body>
        </Card>
    )
};