import React from "react";
import './components/Nav.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './pages/Homepage.jsx';
import Menu from './pages/Menu.jsx' ;
import Offers from "./pages/Offers";
import { Switch , Route } from "react-router-dom";

function App() {
  return (
    <div>
     <Navbar />
      <Switch>
            <Route exact path='/'><Homepage /></Route>
            <Route path='/:dish' exact><Menu /></Route>
            <Route exact path='/offers'><Offers /></Route>
      </Switch>   
    <Footer />
    </div>

  );
}

export default App;
