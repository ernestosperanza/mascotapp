import React, { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { CartContext } from '../../contexts/CartContext'


const NavBar = () => {

    const { cartState } = useContext(CartContext)

    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <LinkContainer to="/">
                <Navbar.Brand>MASCOTAPP 🐱</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                        <LinkContainer to="/category/category1">
                            <NavDropdown.Item>Perros</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/category/category2">
                            <NavDropdown.Item>Gatos</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/category/category3">
                            <NavDropdown.Item>Animales Pequeños</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/category/category4">
                            <NavDropdown.Item>Ofertas</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <LinkContainer to="/cart">
                        <Nav.Link>
                            {cartState.length > 0 && <CartWidget />}
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;