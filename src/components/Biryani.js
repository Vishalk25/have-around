import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Food from "./data";
// import './Carousel.css'  

function Biryani(){
    return (
        <>
            <Navbar />

            <div id="card-flex">
            {Food.map((e)=>{
                if(e.name == 'biryani'){
                    return(
                        <>
                        {
                            e.menu.map((val)=> <Card
                            source={val.urls}
                            dish={val.name} />)
                        }
                        </>
                    )
                }
            })}
            </div>
            <Footer />  
        </>
    )
}

export default Biryani;