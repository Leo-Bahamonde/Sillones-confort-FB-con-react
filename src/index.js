import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './views/Index'


// styles
import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/css/paper-kit.css";

// others
import HowToGet from './components/Navbars/HowToGet'
import Contacts from './components/Navbars/Contacts'
import Products from './components/Navbars/Products'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <App/> 
      </Route>
      <Route path="/productos">
        <Products/>
      </Route>
      <Route path="/como-llegar">
        <HowToGet/>
      </Route>
      <Route path="/contactos">
        <Contacts/>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
