import React from "react";
import '../components/Nav.css'
import Carousel from "../components/Carousel";
import Main from "../components/Main";
import '../components/data';
import Self from "../components/Self";

function Homepage() {
  return (
    <>
      <Carousel />
      <Self />
      <Main />
        
      
    </>

  );
}

export default Homepage;
