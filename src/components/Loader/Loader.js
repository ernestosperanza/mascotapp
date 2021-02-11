import React from 'react'
import ReactLoading from 'react-loading'
import { Row } from 'react-bootstrap'


const Loader = () => {

    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }

    return(
        <Row style={style}>
            <ReactLoading id="loader" type={'bubbles'} color='#000000' />
        </Row>
    )
}

export default Loader
