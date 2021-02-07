import React from 'react'
import { Item } from '../Item/Item'
import { withRouter } from 'react-router-dom'
import { Row } from 'react-bootstrap'

const ItemList = ({ items }) => {


    return (
        <React.Fragment>
            <Row>
                <div className="itemList">
                    {items.map((item, indice) => <Item key={indice} item={item} />)}
                </div>
            </Row>
        </React.Fragment>
    )
}

export default withRouter(ItemList)