import React, { useContext } from "react";
import { FoodContext } from "../Context/FoodContextProvider";
import './Card.css'

function Card(props){  
    const { handleCart } = useContext(FoodContext);

    const {url, name} = props;
    const source = url;
    const dish = name;

    const data = {
        id: props.id,
        name: props.name,
        price: props.price,
        url: props.url
    };

    const handleAddToCart = () => {
        handleCart(data)
    }

    return (
        <>
        <div id="card" >
            <div className="card-container">
                <img id="card-img" src={source} />
                <h4 id="card-h">{dish}</h4>
                <p id="card-p">World class delicious dishes on your plate.</p>
                <p id="money">₹ {props.price}/-</p>
                <button id="card-btn" onClick = {handleAddToCart}>Add to Bucket</button>
            </div>
        </div>
        </>
    )

}

export default Card;