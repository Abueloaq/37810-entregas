
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { productos } from "../mocks/FakeApi" 
import customFetch from "./customFetch"

const ItemListContainer = () => {
    
    const [listaProductos, setListaProductos]= useState([])
    const [loading, setLoading]= useState(false)
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true)
        customFetch(2000, id===undefined? productos : productos.filter(item => item.category === parseInt(id)))
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