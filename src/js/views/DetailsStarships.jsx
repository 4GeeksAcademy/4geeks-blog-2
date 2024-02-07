import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsStarships = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const { DetailsStarships } = store;
    const id = params.index;
    
    const handleOnError = (event)=> {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return (
        <div className="card text-light bg-dark m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}  className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h4 className="card-title">{DetailsStarships.name}</h4>
                        <p className="card-text"><b>Model: </b>{DetailsStarships.model}</p>
                        <p className="card-text"><b>Manufacturer: </b>{DetailsStarships.manufacturer}</p>
                        <p className="card-text"><b>Cost: </b>{DetailsStarships.cost_in_credits}</p>
                        <p className="card-text"><b>Lenght: </b>{DetailsStarships.lenght}</p>
                        <p className="card-text"><b>Max speed: </b>{DetailsStarships.max_atmosphering_speed}</p>
                        <p className="card-text"><b>Crew: </b>{DetailsStarships.crew}</p>
                        <p className="card-text"><b>Passengers: </b>{DetailsStarships.passengers}</p>
                        <p className="card-text"><b>Cargo capacity: </b>{DetailsStarships.cargo_capacity}</p>
                        <p className="card-text"><b>Consumables: </b>{DetailsStarships.consumables}</p>
                        <p className="card-text"><b>Hyperdrive rating: </b>{DetailsStarships.hyperdrive_rating}</p>
                        <p className="card-text"><b>MGLT: </b>{DetailsStarships.mglt}</p>
                        <p className="card-text"><b>Starship class: </b>{DetailsStarships.starship_class}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}