import { useContext } from "react"
import CartList from "./CartList";
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";



const Cart = ()=> {

    const { compra } = useContext(CartContext);
    const { clear } = useContext(CartContext);
    const { totalPrice } = useContext(CartContext);

    let subTotal = (totalPrice / 1.22).toFixed(2);

    return (
        <>
        { compra.length === 0 ?  
        <div className="pt-5 px-1 mt-5"><h3 className="text-light text-decoration-none">No has agregado productos a tu carrito</h3>
        <hr className="bg-secondary mx-5"></hr>
        <Link to={`/`} className="text-light text-decoration-none"><button type="button" className="btn btn-outline-secondary text-light button-cart">Vuelve al catálogo de productos</button></Link>
        </div> : 
        <div className="cart-body">
            <CartList listaProductos={compra}/>
            <div className="cart-summary">
                <div className="cart-breakdown">
                    <h5 className="text-light">Subtotal USD {subTotal}</h5>
                    <h5 className="text-light">IVA USD {(totalPrice - subTotal).toFixed(2)}</h5>
                </div>
                <h3 className="text-light">TOTAL USD {totalPrice}</h3>
                <Link to="/checkout"><button type="button" className="btn btn-outline-secondary text-light">Go to Checkout</button></Link>
            </div>
            <button type="button" className="btn btn-outline-danger text-light" onClick={(e) => {e.stopPropagation();clear()}}>Vaciar</button>
        </div>}
        </>
    )
}

export default Cart