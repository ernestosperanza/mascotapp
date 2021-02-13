import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Cart from '../../components/Cart/Cart'
import CartForm from '../../components/CartForm/CartForm'
import firebase from 'firebase/app'
import { getFirestore } from '../../firebase'
import '@firebase/firestore'
import Loader from '../../components/Loader/Loader'


const CartContainer = () => {

    const { itemsStock, clear, 
            cartState, cartTotalPrice, setOrderId } = useContext(CartContext)
    const [ user, setUser ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const updateStock = (cartItems) => {

        const db = getFirestore()
        const item = db.collection('Items')

        for (const ele of cartItems){
            const stockActual = itemsStock.find(e => e.id === ele.id)
            const cartItem = item.doc(ele.id)
            cartItem.update({
                stock: stockActual.stock - ele.quantity
            })
        }
    }

    const createOrder = () => {

        const db = getFirestore()
        const orders = db.collection("Orders")
    
        const newOrder = { buyer: {name: user.name, 
                                     email: user.email, 
                                     telefono: user.telefono},
                             items: [...cartState],
                             date: firebase.firestore.Timestamp.fromDate(new Date()),
                             total: cartTotalPrice
        }

        updateStock(newOrder.items)
    
        orders.add(newOrder)
            .then(({ id }) => {
                setOrderId(id)
                setLoading(true)
            }).catch(err => {
                console.log('Ocurrio un error con su compra', err)
            }).finally(() => {
                setLoading(false)
                clear()
        })
    }

    return(
        <React.Fragment>
            {loading ? <Loader />
                :<React.Fragment> <Cart/>
                {cartState.length > 0 && <CartForm createOrder={createOrder} user={user} setUser={setUser}></CartForm>}
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default CartContainer