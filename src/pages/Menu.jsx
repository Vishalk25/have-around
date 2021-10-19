import React, { useState } from "react";
import Card from "../components/Card";
import Food from "../components/data";
import {withRouter} from "react-router-dom";
import { useEffect } from "react";  
import { getAllItemsReq } from "../API/Api";

function Menu(props){
    let dish = props.match.params.dish;

    const [items, setItems] = useState([]);

    const getAllItems = async ()=>{
        try {
            const data = await getAllItemsReq();
            setItems(data.data);
        }
        catch (err) {

        }  
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      useEffect(()=>{
          getAllItems();
      }, [])

    return (
        <>

            <div className="card-flex">
            {items.map((e)=>{
                if(e.name === dish){
                    return(
                        <>
                        {
                            e.menu.map((val)=> <Card
                            key = {val.id}
                            // source={val.urls}
                            // dish={val.name}
                            {...val} />)
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