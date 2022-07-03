
import React, { useContext } from "react"
import ItemCount from "./ItemCount"
import CheckoutButton from "./CheckoutButton"
import { useState } from "react"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({producto}) => {
    const {name, img, description, id, price, stock} = producto
    const [itemcount, setItemCount] = useState(0);
    const { addItem } = useContext(CartContext)

    const onAdd =(cantidad)=>{
        setItemCount(cantidad)
        addItem({id, price, name, cantidad, img, stock})
    }

    return (
        <>
            <div className="productDetail">
                {
                    <>
                        <div className="productDetail text-light py-1">
                            <div>
                                <h1 className="px-2 display-3">{name}</h1>
                                <hr className="bg-secondary mx-5"></hr>
                            </div>
                            <div >
                                <img src={img} className="imgDetail" alt={name}></img>
                            </div>
                            <div>
                                <hr className="bg-secondary mx-5"></hr>
                                <p className="lead">{description}</p>
                            </div>
                        </div>

                        {   itemcount === 0?
                            <ItemCount stock={stock} initial={itemcount} onAdd={onAdd}/> : <CheckoutButton />}
                    </>
                }
            </div>
        </>
    )
}

export default ItemDetail