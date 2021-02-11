import React, { useContext } from 'react'
import './CartItem.css'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext'
import { BsFillTrashFill } from "react-icons/bs";



const CartItem = ({ item }) => {

    const { removeItem, cartTotalPrice } = useContext(CartContext)

    return (
        <Card className="itemDetailCart">
            <Card.Body>
                {item ?
                    <Row>
                        <Col xs lg="2" >
                            <Card.Img className="itemImageCart" varian="top" src={item.pictureUrl} alt={item.title} /></Col>
                        <Col xs lg="7">
                            <Card.Title>{item.title}</Card.Title>
                            <p>Cantidad: {item.quantity} </p>
                        </Col>
                        <Col xs lg="3">
                            <span>
                                Precio: ${item.price}
                                <Button className="removeBtn" onClick={() => removeItem(item)}><BsFillTrashFill /></Button>
                            </span>
                        </Col>
                    </Row> :
                    <Row>
                        <Col xs lg="3" />
                        <Col xs lg="6" />
                        <Col xs lg="3">
                            <p>{`Precio total: $${cartTotalPrice}`}</p>
                        </Col>
                    </Row>}
            </Card.Body>
        </Card>
    )
}

export default CartItem;