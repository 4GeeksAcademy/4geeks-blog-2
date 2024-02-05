import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Planetas = () => {

    const { store, actions } = useContext(Context);
    const addToFavorites = (planet) => {
        actions.addToFavorites(planet, 'planet');
      };

    return (
        <div>
            <h1 style={{ color: "red", textAlign: "left", margin: "60px" }}>Planetas</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.planets.map((item, ContactId) =>
                    <div key={item.id} className="card" style={{ width: "18rem", background: "#C0C0C0" }}>
                        <img
                            className="card-img-top m-auto"
                            src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
                            style={{ width: "200px" }}
                            alt="Card image cap" />
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <Link to={"/detailed-planet/" + item.id}>
                                    <button className="btn btn-outline-primary mr-3px">Info!</button>
                                </Link>
                                <button type="button" className="btn btn-outline-warning" onClick={() => addToFavorites(item)}><i class="fab fa-gratipay"></i></button>
                            </div>
                        </div>
                    </div>
                )};
            </div>
        </div>

    );
};