import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Alert, Container, Button } from 'react-bootstrap'
import TitleContainer from '../../containers/TitleContainer/TitleContainer'

const NoMatch = ({itemId}) => {

    let location = useLocation()
    let history = useHistory()
    const page = '404'

    return (
        <React.Fragment>
            <TitleContainer page={page} />
            <Container>
                <Alert variant='secondary' onClose={() => history.goBack()} dismissible>
                    <h1>🙄🤦‍♂️</h1>
                    <Alert.Heading>Oh, Maldicion! Esto es un 404!</Alert.Heading>
                    <p>No hay concidencias para {itemId ? <span>el item <code>{itemId}</code></span>:
                    <code>{location.pathname}</code>}<br />
                    </p>
                    <Button variant='outline-secondary' size='sm' onClick={() => history.goBack()}>Volver Atras</Button>
                </Alert>
            </Container>
        </React.Fragment>
    );
}

export default NoMatch;