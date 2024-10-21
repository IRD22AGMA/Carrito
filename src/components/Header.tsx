import { Link } from "react-router-dom";

// Definimos el tipo para las props que se le pasan al Header
type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#343a40' }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <span style={{ fontSize: '1.5rem', color: '#ffffff' }}>Market</span>
          <span style={{ fontSize: '1.5rem', color: '#007bff' }}> Foro</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/carrito">Carrito</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/mapa">Mapa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/nosotros">Nosotros</Link>
            </li>
          </ul>
          <div className="d-flex">
            <input 
              className="form-control me-2 border-primary" 
              type="search" 
              placeholder="Buscar productos" 
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: '300px' }}
            />
            <button className="btn btn-primary">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
