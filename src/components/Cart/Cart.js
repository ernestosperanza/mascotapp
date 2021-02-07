import './Cart.css'
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'


const Cart = () => {

    const { cartState } = useContext(CartContext)
    let history = useHistory();

    return (
        <React.Fragment>
            {cartState.length > 0 ?
                <div>
                    {cartState.map((item, indice) => <CartItem key={indice} item={item}/>)}
                    <CartItem />
                </div>
                : <div><p>No hay elementos en el carro</p>
                    <Button variant="outline-success" onClick={() => history.goBack()}>Volver Atras</Button>
                </div>}
                
        </React.Fragment >
    )
}

export default Cart;