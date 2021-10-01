import React from "react";
import Card from "../components/Card";
import Food from "../components/data";
import {withRouter} from "react-router-dom";
// import './Carousel.css'  

function Menu(props){
    let dish = props.match.params.dish;
    return (
        <>

            <div className="card-flex">
            {Food.map((e)=>{
                if(e.name == dish){
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
        </>
    )
}

export default withRouter(Menu);