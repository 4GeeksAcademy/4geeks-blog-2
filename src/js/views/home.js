import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState, useEffect, useContext } from "react";

export const Home = () => (
	<div class="container-fluid bg-dark">
    <div class="row">
        
        <div class="col-12 text-center mt-auto">
            <p>
                <img src="https://media.vandal.net/i/1280x720/10-2023/19/202310192349115_3.jpg" class="img-fluid" alt="Star Wars Poster"/>
            </p>
        </div>
    </div>
    
</div>
);
