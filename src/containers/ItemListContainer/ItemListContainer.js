import './ItemListContainer.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../../components/ItemList/ItemList'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import ReactLoading from "react-loading"


const ItemListContainer = ({ greeting, items }) => {

    const [itemList, setItemList] = useState()
    const [ loading, setLoading ] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {

        let findItems = new Promise((res, rej) => {
            setTimeout(() => {
                setLoading(true)
                items.length ? res(items) : rej("No hay items")
            }, 2000)
        });

        findItems.then((res) => {
            if (categoryId) {
                const result = res.filter(item => item.categoryId === categoryId)
                setItemList(result)
                setLoading(false)
            } else {
                setItemList(res)
                setLoading(false)
            }
        }).catch((err) => {
            console.log("Hubo un error obteniendo los datos : ", err)
            setLoading(false)
            })
        }, [categoryId, items])

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
