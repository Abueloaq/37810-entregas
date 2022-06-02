
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom"


const CartWidget = () => {
    return (
        <div>
            <Link to={`/cart`} className="text-light text-decoration-none">
                <Badge badgeContent={'4'} className='text-light' >
                    <ShoppingCartIcon />
                </Badge>
            </Link>
        </div>
    )
}

export default CartWidget