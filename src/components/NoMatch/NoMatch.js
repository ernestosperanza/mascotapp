import React from 'react';
import './NoMatch.css';
import { useLocation, useHistory } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';

const NoMatch = () => {

    let location = useLocation();
    let history = useHistory();

    return (
        <Container>
            <Alert variant="danger" onClose={() => history.goBack()} dismissible>
                <Alert.Heading>Oh snap! Esto es un 404!</Alert.Heading>
                <p>
                    No hay concidencias para <code>{location.pathname}</code><br />
                    Cierra el alerta para volver a la pagina anterior
                </p>
            </Alert>
        </Container>
    );
}

export default NoMatch;