import React, { useContext } from 'react'
import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa"
import { Badge } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext'



const CartWidget = () => {

    const { cartCount } = useContext(CartContext)

    return (
        <React.Fragment>
            < FaShoppingCart />
            <Badge pill variant="success">
                {`${cartCount}`}
            </Badge>
        </React.Fragment>
    )
}

export default CartWidget;