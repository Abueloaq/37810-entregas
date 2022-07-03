
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { firestoreFetch } from "../../utils/firebaseFetch"

const ItemListContainer = () => {
    
    const [listaProductos, setListaProductos]= useState([])
    const [loading, setLoading]= useState(false)
    const {id} = useParams();


    useEffect(()=>{
        setLoading(true)
        firestoreFetch(id)
            .then((res)=> setListaProductos(res))
            .catch((error)=> {console.log(error)})
            .finally(()=> setLoading(false))
    }, [id])
    


    return (
        <div className="body">
            <div className="masterHead">
                <div className="customPad">
                    <h2 className="textItem text-light">Bienvenidos a</h2>
                    <h2 className="textItem text-light"> Willebald Photography Studio</h2>
                </div>
            </div>
                {loading ? <div className="spinner text-start"></div> : <ItemList listaProductos={listaProductos}/>}

        </div>
    )
}

export default ItemListContainer