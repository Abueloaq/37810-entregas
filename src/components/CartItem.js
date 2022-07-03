import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import { Trash3 } from 'react-bootstrap-icons';

const CartItem = ({producto})=> {

    const {id, price, name, cantidad, img, stock} = producto
    const { removeItem } = useContext(CartContext);
    const { addItem } = useContext(CartContext);

    const [Count, setCount] = useState (Number(cantidad));
        
    const increment = () => {
        if (Count < stock) {
            setCount(Count+1);
            let plusOne = {id, price, name, cantidad:1, img, stock};
            addItem(plusOne);
        }
    };
            
    const decrement = () => {
        if (Count > 1) {
            setCount(Count-1);
            let minusOne = {id, price, name, cantidad:-1, img, stock};
            addItem(minusOne);
        }
    };

    return (
        <>
        <div className="cart-item col-10 bg-dark bg-gradient m-1 px-3">
            <img src={img} className="card-img-cart" alt={name} />
            <h5 className="card-text text-light my-0">{name}</h5>
            <p className="card-text text-light my-0">Precio unitario: USD{price}</p>
                <div className="itemCountCart">
                    <div>
                        <button type="button" className="btn btn-outline-secondary text-light btn-adding" onClick={decrement}>-</button>
                    </div>
                    <p className="card-text text-light my-0 px-1">{Count}</p>
                    <div>
                        <button type="button" className="btn btn-outline-secondary text-light btn-adding" onClick={increment}>+</button>
                    </div>
                </div>
                
                
                <div className="cart-item-button">
                    <button type="button" className="btn btn-outline-secondary text-light button-cart" onClick={(e) => {e.stopPropagation();removeItem(id)}}><Trash3 /></button>
                </div>
        </div>
        </>
    )
}

export default CartItem