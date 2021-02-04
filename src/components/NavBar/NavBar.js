import React, { useContext } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'


const NavBar = () => {

    const { cartState } = useContext(CartContext)

    return (
        <Navbar bg="light" variant="light">
            <Link to='/'><Navbar.Brand><p>MASCOTAPP 🐱</p></Navbar.Brand></Link>
            <Nav className="mr-auto">
                <NavLink to={"/"} cactiveClassName="active" className="nav-link"><p>Home</p></NavLink>
                <Nav.Link href="/category/1" cactiveClassName="active" className="nav-link">Perros</Nav.Link>
                <NavLink to={"/category/2"} cactiveClassName="active" className="nav-link">Gatos</NavLink>
                <NavLink to={"/category/3"} cactiveClassName="active" className="nav-link">Animales Pequeños</NavLink>
                <NavLink to={"/category/4"} cactiveClassName="active" className="nav-link">Ofertas</NavLink>
                <Nav.Link href="/cart">
                    <CartWidget /><span>{`${cartState.length}`}</span>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;