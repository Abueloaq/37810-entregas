
import React, { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import getItem from "../mocks/FakeApi"

const ItemDetailContainer =()=>{

    const [producto, setProducto]= useState ({})
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        setLoading(true)
        getItem
            .then((res)=> setProducto(res))
            .catch((error)=> {console.log(error)})
            .finally(()=> setLoading(false))
    }, [])

    return (
        <div className="bgDetail">
            {loading ? <div className="spinner text-start"></div> : <ItemDetail producto={producto}/>}
        </div>
    )
}

export default ItemDetailContainer