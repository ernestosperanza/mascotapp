import React from 'react'
import { Item } from '../Item/Item'
import { withRouter } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './ItemList.css'

const ItemList = ({ items }) => {


    return (
        <React.Fragment>
            <Row xs={1} md={3} lg={3} xl={4} fluid>
                <div className="itemList">
                    {items.map((item, indice) => <Item key={indice} item={item} />)}
                </div>
            </Row>
        </React.Fragment>
    )
}

export default withRouter(ItemList)