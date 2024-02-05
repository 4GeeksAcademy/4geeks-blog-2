import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src = "https://pngimg.com/d/star_wars_logo_PNG34.png" alt="Logo Star Wars" width="100px" style={{ marginLeft: '20px' }}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="ml-auto" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Personajes</a>
        </li>
        <li className="nav-item">
		<a className="nav-link active" aria-current="page" href="#">Planetas</a>
        </li>
        <li className="nav-item">
		<a className="nav-link active" aria-current="page" href="#">Naves</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos
          </a>
          <ul className="dropdown-menu">
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
