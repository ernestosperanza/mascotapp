import React, { useState, useEffect } from 'react'
import TitleContainer from '../TitleContainer/TitleContainer'
import { getFirestore } from '../../firebase'
import Order from '../../components/Orders/Order'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Loader from '../../components/Loader/Loader'



const OrdersDetail = () => {

    const [ orders, setOrders ] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const db = getFirestore()
        const itemColection = db.collection('Orders')

        itemColection.get()
            .then((querySnapshot) => {

                if (querySnapshot.size === 0) {
                    console.log('no hay resultados a la query')
                    return
                }

                const result = querySnapshot.docs.map((doc) => {
                    return ({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setOrders(result)

            }).catch((error) => {
                console.log('Error buscando obteniendo los datos', error)

            }).finally(() => {
                setLoading(false)
            })

    }, [])



    return (
        <React.Fragment>
            <TitleContainer page={'Ordenes'} />
            {loading ? <Loader />
            : orders ? orders.map((order, indice) => <Order key={indice} order={order} />)
                :<Jumbotron title="No hay ordenes para mostrar 😅" />}
        </React.Fragment>
    )

}

export default OrdersDetail