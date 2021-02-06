import React, { useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import CartWidget from '../CartWidget/CartWidget'
import { CartContext } from '../../contexts/CartContext'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const { cartState } = useContext(CartContext)

    return(
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Link to="/">Home</Link>
                <Link to="/category1">cat1</Link>
                <Link to="/category2">cat2</Link>
            </Navbar>
        </React.Fragment>
    )
}




export default NavBar;