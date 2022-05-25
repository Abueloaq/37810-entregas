
import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getData } from "../mocks/FakeApi" 

const ItemListContainer = () => {
    
    const [listaProductos, setListaProductos]= useState([])
    const [loading, setLoading]= useState(false)
    
    useEffect(()=>{
        setLoading(true)
        getData
            .then((res)=> setListaProductos(res))
            .catch((error)=> {console.log(error)})
            .finally(()=> setLoading(false))
    }, [])
    
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