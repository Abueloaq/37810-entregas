
import React from "react"
import Item from "./Item"

const ItemDetail = ({producto}) => {
    
    return (
        <>
            {<Item key={producto.id} producto={producto}/>}
        </>
    )
}

export default ItemDetail