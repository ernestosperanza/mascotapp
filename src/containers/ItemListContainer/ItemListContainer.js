import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import ReactLoading from 'react-loading'
import { getFirestone } from '../../firebase'
import TitleContainer from '../TitleContainer/TitleContainer'


const ItemListContainer = () => {

    const [itemList, setItemList] = useState()
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    useEffect(() => {

        setLoading(true)
        const db = getFirestone()
        const items = db.collection('Items')
        let itemColection

        {/* Limitar la query en 10 */ }
        if (category) {
            const itemCategory = items.where('category', '==', category)
            itemColection = itemCategory
        } else {
            itemColection = items
        }

        itemColection.get()
            .then((querySnapshot) => {

                if (querySnapshot.size === 0) {
                    setItemList([])
                    return
                }

                let arrayItems = querySnapshot.docs.map((doc) => {
                    return ({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setItemList(arrayItems)

            }).catch((error) => {
                console.log('Error buscando los items', error)

            }).finally(() => {
                setLoading(false)
            })

    }, [category])


    {/*Pasar el loadin a un componente*/ }


    return (
        <React.Fragment>
            <TitleContainer category={category} />
            {loading ? <ReactLoading type={'bubbles'} color='#000000' />
                : itemList && itemList.length < 1 ? <Jumbotron title={"No hay productos de la cateogria seleccionada 😢"} />
                    : null}
            {itemList && <ItemList items={itemList} />}
        </React.Fragment>
    )
};

export default ItemListContainer
