import './Cart.css'
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Cart = () => {

    const { cartState, cartTotalPrice, clear, removeItem } = useContext(CartContext)
    let history = useHistory();

    return (
        <React.Fragment>
            {cartState.length > 0 ?
                <div>
                    {cartState.map((item, indice) =>
                        <div>
                            <li>{`Item: ${item.title} Cantidad: ${item.quantity} Precio: ${item.price} `}</li>
                            <Button onClick={() => removeItem(item)}> Eliminar item</Button>
                        </div>)}
                    <div>
                        <p>Total: {cartTotalPrice}</p>
                    </div>
                    <div>
                        <Button onClick={() => clear()}>Vaciar carro</Button>
                    </div>
                </div>
                : <div><p>No hay elementos en el carro</p>
                    <Button variant="outline-success" onClick={() => history.goBack()}>Volver Atras</Button>
                    </div>}
        </React.Fragment >
    )
}

export default Cart;