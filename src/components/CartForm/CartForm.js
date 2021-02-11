import React, { useContext, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import './CartForm.css'


const CartForm = ({user, setUser, createOrder}) => {

    const { clear } = useContext(CartContext)
    const onDataChange = (evt, name) => setUser({...user, [name]: evt.target.value})

    return (
        <Form className='cartFormContainer'>
            <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                    Nombre
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Jose Manuel de La Fuente" required
                                    onChange={(e)=>onDataChange(e, 'name')} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="email" placeholder="jose-manuel99@unemail.com" 
                                  onChange={(e)=>onDataChange(e, 'email')} required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalTelephone">
                <Form.Label column sm={2}>
                    Telefono
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" placeholder="099-000-000" 
                                onChange={(e)=>onDataChange(e, 'telefono')}required/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col>
                <Button className='cartFormBtn' variant='danger' size="sm" onClick={() => clear()}>Vaciar Carro</Button>
                <Link to="/gracias">
                    <Button className='cartFormBtn' variant='success' size="sm" onClick={() => createOrder()}>Realizar Compra</Button>
                </Link>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default withRouter(CartForm)