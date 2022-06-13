import React, {createContext, useState, useEffect} from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [compra, setCompra] = useState([]);
    const [addChange, setAddChange] = useState(0);
    const [itemsTotal, setItemsTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    

    const addItem = ({id, price, name, cantidad, img}) =>{
        
        setAddChange(addChange + 1)

        const found = compra.find(el => el.id === id);
        
        const findDuplicated = (found, compra) => {
            compra.forEach(element => {
                if (found.id === element.id) {
                    return element.cantidad = cantidad + element.cantidad
                }
            })
        }
        if (found) { findDuplicated(found, compra)} else {setCompra([...compra, {id, price, name, cantidad, img}])}
        
    }

    const removeItem = (id) => {
        setAddChange(addChange + 1)
        const result = compra.filter(el => el.id !== id)
        setCompra(result)
    }

    const clear = () => {
        setCompra([])
    }

    useEffect(()=>{
        let adding = 0;
        compra.forEach(el => adding = adding + el.cantidad)
        setItemsTotal(adding)
    }, [addChange])

    useEffect(()=>{
        let addingPrice = 0;
        compra.forEach(el => addingPrice = addingPrice + (el.cantidad * el.price))
        setTotalPrice(addingPrice)
    }, [addChange])

    const data = { compra, addItem, removeItem, clear, itemsTotal, totalPrice }

    return (
        <CartContext.Provider value={data}>
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext };

