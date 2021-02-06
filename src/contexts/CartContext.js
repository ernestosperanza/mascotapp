import React, { useState } from 'react'

export const CartContext = React.createContext()

export const Context = ({children}) => {

    const [ cartState, setCartState ] = useState([])

    const cartCount = cartState.reduce((a, b) => { return a + b.quantity}, 0)
    const cartTotalPrice = cartState.reduce((a, b) => { return a + (b.price * b.quantity)}, 0)

    const addItem = ( item, quantity ) => {

        item.quantity = quantity
        setCartState([...cartState, item])

    }

    const removeItem = (itemId) => {
        const itemInCart = (cartState.findIndex((ele) => ele.id === itemId))
        if(itemInCart) {
            let newCart = [...cartState]
            newCart.splice(itemInCart,1)
            setCartState(newCart)
        } else {
            console.log("no se encontro ese elemento para remover")
        }
        
    }
    
    const isInCart = (itemId) => {
        const itemInCart = (cartState.find((ele) => ele.id === itemId))
        if (itemInCart === undefined){
            return false
        }
        return true
    }

    const clear = () => {
        setCartState([])
    }

    return(
        <CartContext.Provider value={{cartState, cartCount, addItem, cartTotalPrice, 
                                      clear, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}