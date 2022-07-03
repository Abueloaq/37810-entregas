
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { firestoreFetchCat } from "../utils/firebaseFetch";
import CategoryItem from "./CategoryItem";

const Navbar = () => {

  const [listaCategorias, setListaCategorias]= useState([])
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    firestoreFetchCat()
      .then((res)=> setListaCategorias(res))
      .catch((error)=> {console.log(error)})
  }, [])

  const handleClick = event => {
    setIsActive(current => !current);
  };

    return (
        <div className="bg-dark bg-gradient">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <Link to="/" style={{textDecoration: "none"}} ><h3 className="fs-2 navbar-brand" >Willebald Photo</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={handleClick} data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className={isActive ? 'navbar-collapse px-3 justify-content-end' : 'collapse navbar-collapse px-3 justify-content-end'} id="navbarNav">
                  <ul className="navbar-nav">
                  {listaCategorias.map((category) =><CategoryItem key={category.id} category={category}/>)}
                  </ul>
                  <CartWidget />
                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar;