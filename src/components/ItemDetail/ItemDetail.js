import './ItemDetail.css'
import React, { useState } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { ItemCountContainer } from '../../containers/ItemCountContainer/ItemCountContainer'



const ItemDetail = ({ item }) => {



    const [ purchaseState, setPurchaseState ] = useState(false)

    const handler = () => {
        setPurchaseState(true);
    }

    return (
        <Card className="itemDetailCard">
            <Card.Body>
                <Row>
                    <Col xs lg="2" >
                        <Card.Img className="itemImage" varian="top" src={item.pictureUrl} alt={item.title} /></Col>
                    <Col xs lg="5">
                        <Card.Title>{item.title}</Card.Title>
                        <p>Precio: ${item.price}</p>
                        <p>Descripcion: {item.description}</p>
                        <p>Stock: {item.stock}</p>
                    </Col>
                    <Col xs lg="3">
                        {purchaseState ? <Link to={'/cart'}><Button variant="outline-success">Terminar Compra</Button></Link>
                        :<ItemCountContainer item={item} handler={handler}/>}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;