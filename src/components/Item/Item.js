import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({ item }) => {

    return (
            <Col>
                <Card style={{ width: '18rem' }} className="itemCard">
                    <Card.Img src={`${item.pictureUrl}`} top alt={item.title} overlay='white-slight' className="itemImage" />
                    <Card.Body className='text-center'>
                        <Card.Title>
                            <Link to={`/item/${item.id}`}>
                                <strong>{item.title}</strong>
                            </Link>
                        </Card.Title>
                        <Card.Footer>
                            <span>
                                ${item.price}
                            </span>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
    )
}