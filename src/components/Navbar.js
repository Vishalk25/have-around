import './Nav.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

 function Navbar(){
     const [state, setState] = useState(false);

    function dropdown(){
        setState(!state);
    }

     return(
         <div id="nav">
            <div>
            <p id="nav-p" >Have  Around</p>
            </div>
            <div id="span">
                <Link exact to="/" className="span"><span>Home</span></Link>
                <Link exact to="/chaap" className="span"><span>Special</span></Link>
                <Link exact to='/offers' className="span"><span>Offers</span></Link>
               
                <div id="main-drop">
                <span className="span" onMouseEnter={dropdown}>Menbership ⬎</span>
                {state ? <div id="drop" className="span" onMouseLeave={dropdown}>
                            <div id="review-list">Membership</div>
                            <div className="drop-list">Silver</div>
                            <div className="drop-list">Gold</div>
                            <div className="drop-list">Platinum*</div>
                        </div>: null}
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </div>
        </div>
     )
     
 }

 export default Navbar;