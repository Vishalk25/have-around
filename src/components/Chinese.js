import React from "react";
import Food from "./data";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

function Chinese(){
    return (
        <>
            <Navbar />
            <div id="card-flex">
            {Food.map((val)=> {
                if(val.name == 'chinese'){
                    return (
                        <>
                        {val.menu.map((e)=>
                            <Card source={e.urls} dish={e.name} />
                        )}
                        
                        </>
                    )
                }
            })}
            </div>
            <Footer />
        </>
    )
}

export default Chinese;
