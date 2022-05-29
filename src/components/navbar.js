
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-dark bg-gradient">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <Link to="/" style={{textDecoration: "none"}} ><h3 className="fs-2 navbar-brand" >Willebald Photo</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-3 justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/category/1" className="nav-link">Simple Frames</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/category/2" className="nav-link">Triple Frames</Link>
                    </li>
                  </ul>
                  <CartWidget />
                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar;