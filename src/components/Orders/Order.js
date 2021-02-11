import './Order.css'
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'



const Order = ({ order }) => {

    const items = order.items

    return (
        <React.Fragment>
            <Card className="itemOrderCard">
                <Card.Body>
                    <Row>
                        <Col xs lg="5">
                            <p>{`User: ${order.buyer.name}`}</p>
                            <p>{`Id de la orden: ${order.id}`}</p>
                        </Col>
                        <Col xs lg="5">
                            <ul>
                                {items && items.map((item) => <div>
                                                                <li>{`Producto: ${item.title} Precio: $${item.price}`}</li>
                                                                <span>{`Cantidad: ${item.quantity}`}</span>
                                                             </div>)}
                            </ul>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Order;