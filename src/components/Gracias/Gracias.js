import React, { useContext, useEffect } from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext'
import Loader from '../Loader/Loader'

const Gracias = () => {

    const { orderId, setOrderId } = useContext(CartContext)

    useEffect(() => {

        return (setOrderId())

    }, [])

    return (
        <React.Fragment>
            {orderId ?
                <React.Fragment>
                    <Jumbotron title="Gracias por su compra" text={`el pedido ${orderId} esta siendo preparado`}/>
                    <Link to={'/'}><Button variant="outline-dark">Volver a la Home</Button></Link>
                </React.Fragment>
            :<Loader /> }
        </React.Fragment>
    )
}

export default Gracias