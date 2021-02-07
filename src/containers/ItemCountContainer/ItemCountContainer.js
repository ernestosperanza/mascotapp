import React, {useState, useContext } from 'react'
import {ItemCount} from '../../components/ItemCount/ItemCount'
import { CartContext } from '../../contexts/CartContext'

export const ItemCountContainer = ({ item, handler}) => {

    const [ count, setCount ] = useState(parseInt(1));
    const [ itemStock, setStock ] = useState(parseInt(item.stock) - 1);
    const { addItem } = useContext(CartContext)


    const add = () => {
        if(count < item.stock){
            setCount(count + 1);
            setStock(itemStock - 1);
        }
    };


    const sub = () => {
        if(count > 0){
            setCount(count - 1);
            setStock(itemStock + 1);
        }
    };


    const onAdd = (item, quantity) => {
        
        addItem(item, quantity)
        handler();
    };


    return(
        <React.Fragment>
            <ItemCount min={sub} max={add} onAdd={() => onAdd(item, count)} 
                       count={count} item={item}/>
        </React.Fragment>
    )
};