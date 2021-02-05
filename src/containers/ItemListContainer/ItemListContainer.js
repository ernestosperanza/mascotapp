import './ItemListContainer.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../../components/ItemList/ItemList'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import ReactLoading from 'react-loading'
import { getFirestone } from '../../firebase'


const ItemListContainer = ({ greeting, items }) => {

    const [itemList, setItemList] = useState()
    const [ loading, setLoading ] = useState(true)
    const { category } = useParams()

    useEffect(() => {

        setLoading(true)

        const db = getFirestone()
        const itemColection = db.collection('Items')
        {/* Limitar la query en 10 */}

        itemColection.get()
        .then((querySnapshot) => {

            if(querySnapshot.size === 0){
                console.log('no hay resultados a la query')
                return
            }
            
            let arrayItems = querySnapshot.docs.map((doc) => {
                return({
                    id: doc.id,
                    ...doc.data()
                })
            })

            if (category) {
                const result = arrayItems.filter(item => item.category === category)
                setItemList(result)
            } else {
                setItemList(arrayItems)
            }

        }).catch((error) => {
            console.log('Error buscando los items', error)

        }).finally(() => {
            setLoading(false)
            
        })
        
    }, [])

        {/*Pasar el loadin a un componente*/}


    return (
        <div className='listContainer'>
            {loading ? <ReactLoading type={'bubbles'} color="#f8f9fa"/>
                : itemList && itemList.length < 1 ? <Jumbotron title={"No hay productos de la cateogria seleccionada 😢"}/>
                    : <Jumbotron title={greeting} text={"Elija los productos"}/>}
            <div id='itemContainer'>
                {itemList && <ItemList items={itemList} />}
            </div>
        </div>
    )
};

export default ItemListContainer
