import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext'
import { useHistory } from 'react-router-dom'
import './CartForm.css'


const CartForm = ({ user, setUser, createOrder }) => {

    let history = useHistory();
    const { clear } = useContext(CartContext)
    const [show, setShow] = useState()
    const onDataChange = (evt, name) => setUser({ ...user, [name]: evt.target.value })

    const sendData = () => {
        if (user.email === user.emailVerificacion) {
            createOrder()
            history.push('/gracias')
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        setShow(false)
    }, [user]) 

    return (
        <Form className='cartFormContainer'>
            <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                    Nombre
                </Form.Label>
                <Col sm={10}>
                    <Form.Control placeholder="Jose Manuel de La Fuente"
                        onChange={(e) => onDataChange(e, 'name')} />
                </Col>
            </Form.Group>

            <Alert show={show} variant='danger'>
                Los emails ingresados no coinciden, modifique los datos e intente nuevamente.
            </Alert>

            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="email" placeholder="jose-manuel99@unemail.com"
                        onChange={(e) => onDataChange(e, 'email')} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmailVerificacion">
                <Form.Label column sm={2}>
                    Verificar Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="email" placeholder="jose-manuel99@unemail.com"
                        onChange={(e) => onDataChange(e, 'emailVerificacion')} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalTelephone">
                <Form.Label column sm={2}>
                    Telefono
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" placeholder="099-000-000"
                        onChange={(e) => onDataChange(e, 'telefono')} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col>
                    <Button className='cartFormBtn' variant='danger' size="sm" onClick={() => clear()}>Vaciar Carro</Button>
                    <Button className='cartFormBtn' variant='success'
                        size="sm" onClick={() => sendData()}
                        disabled={!(user.name && user.email && user.telefono)}
                    >Realizar Compra</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default withRouter(CartForm)