import React from 'react';
import './Jumbotron.css';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';


const Jumbotron = ({title, text}) => {

    return (
        <Jumbo fluid>
            <Container>
                <h1>{title}</h1>
                <p>{text}</p>
            </Container>
        </Jumbo>
    )
}

export default Jumbotron;

