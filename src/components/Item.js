
import { Link } from "react-router-dom"

const Item = ({producto})=> {
    const {id, name, img, description} = producto

    return (
        <>
        <div className="card col-lg-3 col-sm-5 col-10 bg-dark bg-gradient m-1 px-3">
            <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-light">{name}</h5>
                    <p className="card-text text-light">{description}</p>
                    <Link to={`/item/${id}`} className="text-light text-decoration-none">Detalles</Link>
                </div>
        </div>
        </>
    )
}

export default Item


