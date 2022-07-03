
import { Link } from "react-router-dom"

const CategoryItem = ({category}) => {

    const {key, title} = category

    return (
        <>
            <li className="nav-item">
                <Link to={key} className="nav-link">{title}</Link>
            </li>
        </>
    )
}

export default CategoryItem