import React, { useState } from 'react'
import { Button, Card, Row, Col, Alert } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { ItemCountContainer } from '../../containers/ItemCountContainer/ItemCountContainer'
import TitleContainer from '../../containers/TitleContainer/TitleContainer'
import './ItemDetail.css'



const ItemDetail = ({ item }) => {

    const [ purchaseState, setPurchaseState ] = useState(false)
    const page = item.title

    const handler = () => {
        setPurchaseState(true);
    }

    return (
        <React.Fragment>
            <TitleContainer page={page} />
        <Card className="itemDetailCard">
            <Card.Body>
                <Row>
                    <Col xs lg="2" >
                        <Card.Img className="itemDetailImage" varian="top" src={item.pictureUrl} alt={item.title} /></Col>
                    <Col xs lg="5">
                        <Card.Title>{item.title}</Card.Title>
                        <p>Precio: ${item.price}</p>
                        <p>Descripcion: {item.description}</p>
                        <p>Stock: {item.stock}</p>
                        {item.stock < 1 && 
                                <Alert variant='danger'>
                                    El item se encuentra tempotalmente fuera de stock
                                </Alert>}
                    </Col>
                    <Col xs lg="3">
                        {purchaseState ? 
                        <Col id="purchaseStateWraper">
                            <Row id="terminarCompraBtnRow">
                            <Link to={'/cart'}><Button variant="outline-success">Terminar Compra</Button></Link>
                            </Row>
                            <Row id="comprarMasBtnRow">
                            <Link to={'/'}><Button variant="outline-dark">Volver a la Home</Button></Link>
                            </Row>
                        </Col>
                        :<ItemCountContainer item={item} handler={handler}/>}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </React.Fragment>
    )
}

export default ItemDetail;