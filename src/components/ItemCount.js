import { useState } from "react";


const ItemCount = ({ stock, initial,  onAdd }) => {
    
    const [Count, setCount] = useState (Number(initial));
        
    const increment = () => {
        if (Count < stock) setCount(Count+1);
    };
            
    const decrement = () => {
        if (Count > 1)setCount(Count-1);
    };

    onAdd = () => {
        if (Count <= stock) {    
            console.log(Count)
        }
    }

    return (
        <div className="itemCount">
            <div className="countContainer">
                <div>
                    <button type="button" class="btn btn-outline-secondary" onClick={decrement}>-</button>
                </div>
                <div className="px-5 count">
                    <h5 class="text-light">{Count}</h5>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-secondary" onClick={increment}>+</button>
                </div>
            </div>
            <div>
                <button type="button" class="btn btn-outline-secondary" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;