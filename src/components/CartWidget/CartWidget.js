import React, { useContext } from 'react'
import { BsBag } from "react-icons/bs"
import { Badge } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext'



const CartWidget = () => {

    const { cartCount } = useContext(CartContext)

    return (
        <React.Fragment>
            <BsBag />
            <Badge pill variant="success">
                {`${cartCount}`}
            </Badge>
        </React.Fragment>
    )
}

export default CartWidget;