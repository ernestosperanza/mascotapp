import React from 'react';
import './NoMatch.css';
import { useLocation, useHistory } from 'react-router-dom';
import { Alert, Container, Button } from 'react-bootstrap';

const NoMatch = () => {

    let location = useLocation();
    let history = useHistory();

    return (
        <Container>
            <Alert variant='secondary' onClose={() => history.goBack()} dismissible>
                <h1>🙄🤦‍♂️</h1>
                <Alert.Heading>Oh, Maldicion! Esto es un 404!</Alert.Heading>
                <p>No hay concidencias para 
                    <code>{location.pathname}</code><br/>
                </p>
                <Button variant='outline-secondary' size='sm' onClick={() => history.goBack()}>Volver Atras</Button>
            </Alert>
        </Container>
    );
}

export default NoMatch;