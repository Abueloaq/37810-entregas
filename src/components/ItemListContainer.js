
import ItemCount from "./ItemCount"

const ItemListContainer = () => {
    return (
        <div className="bodyItem">
                <ItemCount stock='5' initial='1' />
                <div className="customPad">
                    <h2 className="textItem text-light">Bienvenido a</h2>
                    <h2 className="textItem text-light"> Willebald Photography Studio</h2>
                </div>
        </div>
    )
}

export default ItemListContainer