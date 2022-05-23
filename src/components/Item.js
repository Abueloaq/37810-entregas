
import ItemCount from "./ItemCount"

const Item = ({producto})=> {
    const {name, img, description, stock} = producto

    return (
        <div className="card col-lg-3 col-10 m-3 py-1">
            <img src={img} className="card-img-top" alt={name}></img>
            <h5 className="card-text">{name}</h5>
            <p className="card-text">{description}</p>
            <ItemCount stock={stock} initial='1' />
        </div>
    )
}

export default Item