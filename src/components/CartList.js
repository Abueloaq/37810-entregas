import React from "react"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"

const CartList = ({listaProductos}) => {
    return (
        <div id="shop" className="pt-5">
            <h2 className="text-light">Productos Seleccionados</h2>
            <hr className="bg-secondary mx-5"></hr>
            <Link to={`/`} className="text-light text-decoration-none"><button type="button" className="btn btn-outline-secondary text-light button-cart">Vuelve al catálogo de productos</button></Link>
            <div className="cart-list">
            {listaProductos.map((producto) =><CartItem key={producto.id} producto={producto}/>)}
            </div>
        </div>
    )
}

export default CartList