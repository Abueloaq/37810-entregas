
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const CartWidget = () => {
    return (
        <div>
            <a className="cartLink" href="#4">
                <Badge badgeContent={''} className='text-light' >
                    <ShoppingCartIcon />
                </Badge>
            </a>
        </div>
    )
}

export default CartWidget