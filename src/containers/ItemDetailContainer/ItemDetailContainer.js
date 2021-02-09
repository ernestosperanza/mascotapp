import ItemDetail from '../../components/ItemDetail/ItemDetail'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { getFirestone } from '../../firebase'


const ItemDetailContainer = () => {

    const [itemState, setItemState] = useState([])
    const [loading, setLoading] = useState(true)
    let { id } = useParams()

    useEffect(() => {

        setLoading(true)

        const db = getFirestone()
        const itemColection = db.collection('Items')
        {/* Limitar la query en 10 */ }

        itemColection.get()
            .then((querySnapshot) => {

                if (querySnapshot.size === 0) {
                    console.log('no hay resultados a la query')
                    return
                }

                let arrayItems = querySnapshot.docs.map((doc) => {
                    return ({
                        id: doc.id,
                        ...doc.data()
                    })
                })

                const result = arrayItems.filter(item => item.id === id)
                setItemState(result)

            }).catch((error) => {
                console.log('Error buscando obteniendo los datos', error)

            }).finally(() => {
                setLoading(false)
            })

    }, [])


    return (
        <React.Fragment>
                {loading ? <ReactLoading type={'bubbles'} color='#000000' />
                    : itemState && <ItemDetail item={itemState[0]} />}
        </React.Fragment>
    )
}

export default ItemDetailContainer