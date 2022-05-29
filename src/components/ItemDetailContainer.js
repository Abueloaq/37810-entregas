
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import customFetch from "./customFetch"
const {productos} = require('../mocks/FakeApi');

const ItemDetailContainer =()=>{

    const [producto, setProducto]= useState ({})
    const [loading, setLoading]= useState(false)
    const { id } = useParams();

    useEffect(()=>{
        setLoading(true)
        customFetch(2000, productos.find(item => item.id === parseInt(id)))
            .then(res => setProducto(res))
            .catch (err => console.log(err))
            .finally(()=> setLoading(false))
    }, [])

    return (
        <div className="bgDetail">
            {loading ? <div className="spinner text-start"></div> : <ItemDetail producto={producto}/>}
        </div>
    )
}

export default ItemDetailContainer