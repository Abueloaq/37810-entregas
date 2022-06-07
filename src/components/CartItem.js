import { useContext } from "react"
import { CartContext } from "./CartContext"

const CartItem = ({producto})=> {
    const {id, price, name, cantidad, img} = producto
    const { removeItem } = useContext(CartContext);

    return (
        <>
        <div className="cart-item col-10 bg-dark bg-gradient m-1 px-3">
            <img src={img} className="card-img-cart" alt={name} />
                <div className="cart-item-body">
                    <h5 className="card-title text-light my-0">{name}</h5>
                    <p className="card-text text-light my-0">Cantidad: {cantidad}</p>
                    <p className="card-text text-light my-0">Precio unitario: USD{price}</p>
                </div>
                <div className="cart-item-button">
                    <button type="button" className="btn btn-outline-secondary text-light button-cart" onClick={(e) => {e.stopPropagation();removeItem(id)}}>Quitar</button>
                </div>
        </div>
        </>
    )
}

export default CartItem