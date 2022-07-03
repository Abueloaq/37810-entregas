
import { Link } from "react-router-dom"

const CheckoutButton=()=>{
    return(
        <>
            <Link to={`/cart`} className="text-light text-decoration-none">
            <button className="btn btn-outline-secondary text-light">Checkout</button>
            </Link>
        </>
    )
}

export default CheckoutButton