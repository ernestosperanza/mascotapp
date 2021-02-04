import './ItemDetailContainer.css'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from "react-loading"

const ItemDetailContainer = ({ items }) => {

    const [itemState, setItemState] = useState([])
    const [ loading, setLoading ] = useState(true)
    let { id } = useParams()

    useEffect(() => {

        let getItems = new Promise((res, rej) => {
            setTimeout(() => {
                items.length ? res(items) : rej("No hay items")
            }, 2000)
        });

        getItems.then((res) => {            
            setItemState(res[id])
            setLoading(false)
        }).catch((err) => {
            console.log("Hubo un error obteniendo los datos : ", err)
            setLoading(false)
        })

    }, [id, items])

    return (
        <div>
            {loading ? <ReactLoading type={'bubbles'} color="#000000"/>
                : itemState && <ItemDetail item={itemState}/>}
        </div>
    )
}

export default ItemDetailContainer