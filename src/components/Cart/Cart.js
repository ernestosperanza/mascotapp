import './Cart.css'
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'
import { Button } from 'react-bootstrap'


const Cart = () => {

    const { cartState, cartTotalPrice, clear, removeItem } = useContext(CartContext)

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
                : <div>No hay elementos en el carro</div>}
        </React.Fragment >
    )
}

export default Cart;