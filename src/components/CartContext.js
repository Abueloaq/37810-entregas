import React, {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [compra, setCompra] = useState([]);

    const addItem = ({id, price, name, cantidad, img}) =>{
        const found = compra.find(el => el.id === id);
        
        const findDuplicated = (found, compra) => {
            compra.forEach(element => {
                if (found.id === element.id) {
                    return element.cantidad = cantidad + element.cantidad
                }
            });
        }
        if (found) { findDuplicated(found, compra)} else {setCompra([...compra, {id, price, name, cantidad, img}])}
    }

    const removeItem = (id) => {
        const removeQty = compra.find(el => el.id === parseInt(id))
        removeQty.cantidad = 0;
        const result = compra.filter(el => el.id !== parseInt(id))
        setCompra(result)
    }

    const clear = () => {
        compra.forEach(el => el.cantidad = 0)
        setCompra([])
    }

    const data = { compra, addItem, removeItem, clear }

    return (
        <CartContext.Provider value={data}>
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext };

