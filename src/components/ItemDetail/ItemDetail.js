import './ItemDetail.css'
import React, { useContext, useState } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { useHistory, Link } from "react-router-dom"
import { ItemCountContainer } from '../../containers/ItemCountContainer/ItemCountContainer'
import { CartContext } from '../../contexts/CartContext'



const ItemDetail = ({ item }) => {

    let history = useHistory();

    const [ purchaseState, setPurchaseState ] = useState(false)
    const { cartState } = useContext(CartContext)

    const handler = () => {
        setPurchaseState(true);
    }

    return (
        <Card className="itemDetailCard">
            <Card.Body>
                <Row>
                    <Col xs lg="2" >
                        <Card.Img className="itemImage" varian="top" src={item.pictureUrl} alt={item.title} /></Col>
                    <Col xs lg="7">
                        <Card.Title>{item.title}</Card.Title>
                        <p>Precio: ${item.price}</p>
                        <p>Descripcion: {item.description}</p>
                        <Button variant="outline-success" onClick={() => history.goBack()}>Volver Atras</Button>
                    </Col>
                    <Col xs lg="3">
                        {purchaseState ? <Link to={'/cart'}><Button variant="outline-success">Terminar Compra</Button></Link>
                        :<ItemCountContainer item={item} initial={1} handler={handler}/>}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;