
import React from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {
    const {name, img, description} = producto

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
                        <ItemCount stock={producto.stock} initial={1}/>
                    </>
                }
            </div>
        </>
    )
}

export default ItemDetail