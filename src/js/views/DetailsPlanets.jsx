import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsPLanets = () => {
    const { store, actions } = useContext(Context);
    const { DetailsPlanets } = store;
    const params = useParams();
    const id = params.index;

    const handleOnError = (event)=> {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return (
        <div className="card text-light bg-dark m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{DetailsPLanets.name}</h4>
                        <p className="card-text"><b>Rotation: </b>{DetailsPLanets.rotation_period}</p>
                        <p className="card-text"><b>Orbita: </b>{DetailsPLanets.orbital_period}</p>
                        <p className="card-text"><b>Diameter: </b>{DetailsPLanets.diameter}</p>
                        <p className="card-text"><b>Climate: </b>{DetailsPLanets.climate}</p>
                        <p className="card-text"><b>Terrain: </b>{DetailsPLanets.terrain}</p>
                        <p className="card-text"><b>Water Surface: </b>{DetailsPLanets.surface_water}</p>
                        <p className="card-text"><b>Population: </b>{DetailsPLanets.population}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}