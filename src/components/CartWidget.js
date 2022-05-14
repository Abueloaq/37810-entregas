
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CartWidget = () => {
    return (
        <div>
            <a className="cartLink" href="#4">
                <Badge className='text-light'>
                    <ShoppingCartIcon />{"5"}
                </Badge>
            </a>
        </div>
    )
}

export default CartWidget