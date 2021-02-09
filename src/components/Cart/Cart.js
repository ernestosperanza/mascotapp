import './Cart.css'
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import TitleContainer from '../../containers/TitleContainer/TitleContainer';


const Cart = () => {

    const { cartState } = useContext(CartContext)
    const page = 'Cart'


    return (
        <React.Fragment>
            <TitleContainer page={page} />
            {cartState.length > 0 ?
                <div>
                    {cartState.map((item, indice) => <CartItem key={indice} item={item} />)}
                    <CartItem />
                </div>
                : <div><p>No hay elementos en el carro</p>
                    <Link to={'/'}>
                        <Button variant="outline-success">Volver Atras</Button>
                    </Link>
                </div>}
        </React.Fragment >
    )
}

export default Cart;