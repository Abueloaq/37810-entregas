
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestoreFetchSingle } from "../../utils/firebaseFetch";


const ItemDetailContainer =()=>{

    const [producto, setProducto]= useState ({})
    const [loading, setLoading]= useState(false)
    const { id } = useParams();

    useEffect(()=>{
        setLoading(true)
        firestoreFetchSingle(id)
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