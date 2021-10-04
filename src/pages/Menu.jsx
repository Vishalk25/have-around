import React from "react";
import Card from "../components/Card";
import Food from "../components/data";
import {withRouter} from "react-router-dom";
import { useEffect } from "react";  

function Menu(props){
    let dish = props.match.params.dish;
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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