import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src = "https://pngimg.com/d/star_wars_logo_PNG34.png" alt="Logo Star Wars" width="100px" style={{ marginLeft: '20px' }}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="ml-auto" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/personajes">Personajes</Link>
        </li>
        <li className="nav-item">
		<Link className="nav-link active" aria-current="page" to="/planetas">Planetas</Link>
        </li>
        <li className="nav-item">
		<Link className="nav-link active" aria-current="page" to="/naves">Naves</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos
          </Link>
          <ul className="dropdown-menu">
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
