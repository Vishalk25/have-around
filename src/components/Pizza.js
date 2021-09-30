import React from "react";
import Food from "./data";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

function Pizza(){
    return (
        <>
            <Navbar />

            <div id="card-flex">
             {Food.map((val)=> {
                if(val.name === 'pizza'){
                return (
                <>
                    {
                    val.menu.map((item) => <Card 
                    source={item.urls}
                    dish={item.name} />)

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

export default Pizza;
