import { useContext } from "react"
import { CartFill, CartX } from 'react-bootstrap-icons';
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

const CartWidget = () => {

    const { compra } = useContext(CartContext);
    const { itemsTotal } = useContext(CartContext);

    return (
        <>
        {   compra.length === 0 ?
            <div>
                <button type="button" className="btn btn-outline-secondary text-light"><CartX /></button>
            </div> : 
            <div>
                <Link to={`/cart`} className="text-light text-decoration-none">
                    <button type="button" className="btn btn-outline-secondary text-light"><CartFill />{itemsTotal}</button>
                </Link>
            </div>
        }
        </>
    )
}

export default CartWidget