import React from 'react';
import './ItemList.css';
import { Item } from '../Item/Item';
import { withRouter } from 'react-router-dom'

const ItemList = ({items}) => {

    
    return(
        <React.Fragment>
            {items.map((item, indice) => <Item key={indice} item={item} />)}
        </React.Fragment>
    )
}

export default withRouter(ItemList)