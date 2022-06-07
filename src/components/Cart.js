import { useContext } from "react"
import CartList from "./CartList";
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom";


const Cart = ()=> {

    const { compra } = useContext(CartContext);
    const { clear } = useContext(CartContext);

    return (
        <>
        { compra.length === 0 ?  
        <div className="pt-5 px-1 mt-5"><h3 className="text-light text-decoration-none">No has agregado productos a tu carrito</h3>
        <hr className="bg-secondary mx-5"></hr>
        <Link to={`/`} className="text-light text-decoration-none"><button type="button" className="btn btn-outline-secondary text-light button-cart">Vuelve al catálogo de productos</button></Link>
        </div> : 
        <div>
            <CartList listaProductos={compra}/>
            <button type="button" className="btn btn-outline-danger text-light" onClick={(e) => {e.stopPropagation();clear()}}>Vaciar</button>
        </div>}
        </>
    )
}

export default Cart