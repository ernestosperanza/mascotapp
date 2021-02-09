import React, { useContext } from 'react'
import './CartItem.css'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext'
import { BsFillTrashFill } from "react-icons/bs";



const CartItem = ({ item }) => {

    const { removeItem, clear, cartTotalPrice } = useContext(CartContext)

    return (
        <Card className="itemDetailCart">
            <Card.Body>
            {item ?
                <Row>
                    <Col xs lg="2" >
                        <Card.Img className="itemImageCart" varian="top" src={item.pictureUrl} alt={item.title} /></Col>
                    <Col xs lg="7">
                        <Card.Title>{item.title}</Card.Title>
                        <p>Precio: ${item.price}</p>
                        <p>Cantidad: {item.quantity} </p>
                    </Col>
                    <Col xs lg="3">
                        <Button onClick={() => removeItem(item)}><BsFillTrashFill /></Button>
                    </Col>
                </Row> : 
                <Row>
                    <Col xs lg="2" />
                    <Col xs lg="7">
                        <p>Costo total de la compra: {cartTotalPrice}</p>
                    </Col>
                    <Col xs lg="3">
                        <Button variant='danger' onClick={() => clear()}>Vaciar carro</Button>
                    </Col>
                </Row> }
            </Card.Body> 
        </Card>
    )
}

export default CartItem;