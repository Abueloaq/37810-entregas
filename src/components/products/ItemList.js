
import React from "react"
import Item from "./Item"

const ItemList = ({listaProductos}) => {
    return (
        <div id="shop" className="pt-5">
            <h2 className="text-light">Productos</h2>
            <hr className="bg-secondary mx-5"></hr>
            <div className="row wrap justify-content-around">
            {listaProductos.map((producto) =><Item key={producto.id} producto={producto}/>)}
            </div>
        </div>
    )
}

export default ItemList