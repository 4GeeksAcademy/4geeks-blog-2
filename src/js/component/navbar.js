import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://pngimg.com/d/star_wars_logo_PNG34.png" alt="Logo Star Wars" width="100px" style={{ marginLeft: '20px' }} />
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
              <Link className="nav-link" href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favoritos
                <span className="badge bg-secondary ms-1">{store.favorites.length}</span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
                {store.favorites.map((value, index) => {
                  return (
                    <li key={index} className="dropdown-item">
                      {value}
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => {
                          actions.deleteFav(value);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
};

