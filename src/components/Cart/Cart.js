import './Cart.css'
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'
import Jumbotron from '../Jumbotron/Jumbotron'
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer'


const Cart = ()=> {

    const { cartState } = useContext(CartContext)

    return(
        <React.Fragment>
             {cartState && cartState < 1 ? <Jumbotron title={"No hay productos en el carrito 😢"}/>
                :<ItemListContainer items={cartState} />}
        </React.Fragment>
    )
}

export default Cart;