import React from "react";
import './Card.css'

function Card(props){  
    return (
        <>
        <div id="card" >
            <div className="card-container">
                <img id="card-img" src={props.source} />
                <h4 id="card-h">{props.dish}</h4>
                <p id="card-p">World class dishes on your plate.{props.disc}</p>
                <p id="money">₹ 200/-</p>
                <button id="card-btn">Add to Bucket</button>
            </div>
        </div>
        </>
    )

}

export default Card;