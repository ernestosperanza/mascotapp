import React, {useState, useContext } from 'react'
import {ItemCount} from '../../components/ItemCount/ItemCount'
import { CartContext } from '../../contexts/CartContext'

export const ItemCountContainer = ({initial, item, handler}) => {

    const [ count, setCount ] = useState(parseInt(initial));
    const [ itemStock, setStock ] = useState(parseInt(item.stock) - 1);
    const { cartState , addItem } = useContext(CartContext)


    const add = () => {
        if(count < item.stock){
            setCount(count + 1);
            setStock(itemStock - 1);
        } else {
            alert('No se hay mas productos en stock para agregar');
        }
    };


    const sub = () => {
        if(count > 0){
            setCount(count - 1);
            setStock(itemStock + 1);
        } else {
            alert('El carro esta vacio, no se pueden remover mas items');
        }
    };


    const onAdd = (item) => {
        
        addItem(item)
        alert(`Agregaste ${count} item al carrito`);
        handler();
        console.log(cartState)
    };


    return(
        <React.Fragment>
            <ItemCount min={sub} max={add} onAdd={() => onAdd(item)} count={count} item={item}/>
        </React.Fragment>
    )
};