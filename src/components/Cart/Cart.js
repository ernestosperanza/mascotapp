import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import TitleContainer from '../../containers/TitleContainer/TitleContainer'
import Jumbotron from '../Jumbotron/Jumbotron'
import './Cart.css'


const Cart = () => {

    const { cartState } = useContext(CartContext)
    const page = 'Cart'


    return (
        <React.Fragment>
            <TitleContainer page={page} />
            {cartState.length > 0 ?
                <React.Fragment>
                    {cartState.map((item, indice) => <CartItem key={indice} item={item} />)}
                    <CartItem />
                </React.Fragment>
                :<React.Fragment>
                    <Jumbotron title={'No hay elementos en el carro 😩'}/>
                    <Link to={'/'}>
                        <Button variant="outline-success">Volver Atras</Button>
                    </Link>
                    </React.Fragment>}
        </React.Fragment >
    )
}

export default Cart;