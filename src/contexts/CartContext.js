import React, { useState } from 'react'

export const CartContext = React.createContext()

export const Context = ({children}) => {

    const [cartState, setCartState] = useState([])

    const addItem = ( item ) => {

        setCartState([...cartState, item])
        console.log(cartState)
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
        <CartContext.Provider value={{cartState, addItem, clear, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}