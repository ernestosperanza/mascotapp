import React from 'react';
import Container from 'react-bootstrap/Container';
import './Layout.css'

const Layout = (props)=> {

    return(
        <Container fluid>
            {props.children}
        </Container>
    )
}

export default Layout;