import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import './Item.css'

export const Item = ({ item }) => {

    return (
        <Card className="itemCard">
            <Card.Img cascade src={item.pictureUrl} top alt={item.title} overlay='white-slight' className="itemImage" />
            <Card.Body cascade className='text-center'>
                <Card.Title>
                    <Link to={`/item/${item.id}`}>
                        <strong>{item.title}</strong>
                    </Link>
                </Card.Title>
                <Card.Footer>
                    <span>
                        ${item.price}
                    </span>
                    <span>
                        {/* hacer funcionar el tool tip */}
                        <CartWidget />
                    </span>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}