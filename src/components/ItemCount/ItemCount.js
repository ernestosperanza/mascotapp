import './ItemCount.css';
import { Button, ButtonGroup, Row, Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom"
import { BsCaretUp, BsCaretDown, BsBag, BsXOctagon } from "react-icons/bs";



export const ItemCount = ({ min, max, onAdd, count, item }) => {

    let history = useHistory();

    return (
        <Card id="itemCountWraper">
            <Card.Body>
                <Col>
                    <Row id="countGroupBtn">
                        <ButtonGroup block>
                            <Button onClick={min} disabled={count === 0} variant="outline-danger">
                                <BsCaretDown /></Button>
                            <Button id="agregarAlCarroBtn" disabled={count <= 0} onClick={onAdd} variant="outline-dark" size="sm">
                                <span><BsBag /> Agregar al carro {count}</span></Button>
                            <Button onClick={max} disabled={count >= item.stock} variant="outline-success">
                                <BsCaretUp /></Button>
                        </ButtonGroup>
                    </Row>
                    <Row id="volverAtrasBtn">
                        <Button variant="outline-info" onClick={() => history.goBack()} block>
                            <span>Volver Atras <BsXOctagon /></span></Button>
                    </Row>
                </Col>
            </Card.Body>
        </Card>
    )
};