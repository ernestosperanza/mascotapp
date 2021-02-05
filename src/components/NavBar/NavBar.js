import React, { useContext } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Nav, Navbar, Badge, NavDropdown } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext'


const NavBar = () => {

    const { cartState } = useContext(CartContext)

    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand href="/">MASCOTAPP 🐱</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/category1">Perros</NavDropdown.Item>
                        <NavDropdown.Item href="/category2">Gatos</NavDropdown.Item>
                        <NavDropdown.Item href="/category3">Animales Pequeños</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/category4">Ofertas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/cart">
                        <CartWidget />
                        <Badge pill variant="success">
                            {`${cartState.length}`}
                        </Badge>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;