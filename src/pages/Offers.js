import React from "react";
import '../components/Card.css';

function Offers(){
    return (
        <>
        <div className="card-flex">
            <div id="offer-card">
                <h1>Offers for Today.</h1>
                <h6>Buy 1 Pizza & Get another one absolutely Free. </h6>
                <h6>50% discount on soups.</h6>
                <h6>Offers valid only for toaday.</h6>
                <p>Terms & conditions applied.</p>
            </div>
        </div>
        </>
    )
}

export default Offers;