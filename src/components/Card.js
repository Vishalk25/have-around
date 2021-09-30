import React from "react";
import './Card.css'

function Card(props){  
    return (
        <>
        <div id="card" >
            <div className="card-container">
                <img id="card-img" src={props.source} />
                <h4 id="card-h">{props.dish}</h4>
                <p id="card-p">World class delicious & hot dishes on your plate.{props.disc}</p>
                <button id="card-btn">Add to Bucket</button>
            </div>
        </div>
        </>
    )

}

export default Card;