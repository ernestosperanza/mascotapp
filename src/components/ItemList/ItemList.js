import React from 'react'
import { Item } from '../Item/Item'
import { withRouter } from 'react-router-dom'
import './ItemList.css'

const ItemList = ({ items }) => {


    return (
        <React.Fragment>
            <div className="itemList">
                {items.map((item, indice) => <Item key={indice} item={item} />)}
            </div>
        </React.Fragment>
    )
}

export default withRouter(ItemList)