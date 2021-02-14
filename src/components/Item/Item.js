import React, { useContext } from 'react';
import { Card, Row, Col, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Item.css'
import { BsBag, BsFillTrashFill } from "react-icons/bs";

import { CartContext } from '../../contexts/CartContext';

export const Item = ({ item }) => {

    const { addItem, removeItem } = useContext(CartContext)

    return (
        <React.Fragment>
            <Card className="itemCard" >
                <Card.Img src={`${item.pictureUrl}`} top alt={item.title} overlay='white-slight' className="itemImageCard" />
                <Card.Body className='text-center'>
                    <Card.Title>
                        <Link to={`/item/${item.id}`}>
                            <strong>{item.title}</strong>
                        </Link>
                    </Card.Title>
                    {item.stock < 1 && 
                                <Alert variant='danger'>
                                    El item se encuentra tempotalmente fuera de stock
                                </Alert>}
                    <Card.Footer>
                        <Row>
                            <Col>
                                <span>
                                    ${item.price}
                                </span>
                            </Col>
                            <Col>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Agregar al carrito</Tooltip>}>
                                    <span className="d-inline-block">
                                        <BsBag onClick={() => addItem(item, 1)} />
                                    </span>
                                </OverlayTrigger>
                            </Col>
                            <Col>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Eliminar del carrito</Tooltip>}>
                                    <span className="d-inline-block">
                                        <BsFillTrashFill onClick={() => removeItem()} />
                                    </span>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}