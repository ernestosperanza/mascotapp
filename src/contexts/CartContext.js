import React, { useState } from 'react'

export const CartContext = React.createContext()

export const Context = ({ children }) => {

    const [cartState, setCartState] = useState([])
    const [orderId, setOrderId] = useState()
    const [itemsStock, setItemStock] = useState()

    const cartCount = cartState.reduce((a, b) => { return a + b.quantity }, 0)
    const cartTotalPrice = cartState.reduce((a, b) => { return a + (b.price * b.quantity) }, 0)

    const addItem = (item, quantity) => {

        if (item.stock > 0) {

            const itemInCart = (cartState.findIndex((ele) => ele.id === item.id))

            if (itemInCart !== -1) {
                const prevQuantity = cartState[itemInCart].quantity
                const newQuantity = quantity + prevQuantity
                if (newQuantity <= item.stock) {
                    const newCart = [...cartState]
                    newCart[itemInCart].quantity = newQuantity
                    setCartState(newCart)
                } else {
                    alert("No hay suficientes productos en stock")
                }
            } else {
                item.quantity = quantity
                setCartState([...cartState, item])
            }
        } else {
            alert("El Item esta fuera de stock, intente mas tarde")
        }
    }

    const removeItem = (itemId) => {

        const itemInCart = (cartState.findIndex((ele) => ele.id === itemId))
        if (itemInCart) {
            let newCart = [...cartState]
            newCart.splice(itemInCart, 1)
            setCartState(newCart)
        } else {
            alert("no se encontro ese elemento para remover")
        }
    }

    const isInCart = (itemId) => {
        const itemInCart = (cartState.find((ele) => ele.id === itemId))
        if (itemInCart === undefined) {
            return false
        }
        return true
    }

    const clear = () => {
        setCartState([])
    }

    return (
        <CartContext.Provider value={{
            cartState, cartCount, addItem, cartTotalPrice,
            clear, isInCart, removeItem, setOrderId,
            orderId, itemsStock, setItemStock
        }}>
            {children}
        </CartContext.Provider>
    )
}