
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div className="bg-dark bg-gradient">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="#1"><h3>Willebald Photo</h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-3 justify-content-between" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#1">Inicio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#shop">Shop</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#3">Cart</a>
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