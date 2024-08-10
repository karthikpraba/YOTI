import Spline from "@splinetool/react-spline";
import Logo from "./images/Logo.png";
import involve from "./images/involve.png";
import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrashV from "./images/TrashV.png";
import PartyV from "./images/PartyV.png";
import FishV from "./images/FishV.png";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import About from "./About";
import Gala from "./Gala";
import Contact from "./Contact";
import Blog from "./Blog";
import Clients from "./Clients";
import Involve from "./involve";
import Mentor from "./mentor";
import ReactGA from "react-ga";

const trackingID = "G-1LTKL92188";
ReactGA.initialize(trackingID);

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/AboutUs" component={About} />
        <Route path="/gala" component={Gala} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/clients" component={Clients} />
        <Route path="/involve" component={Involve} />
        <Route path="/mentor" component={Mentor} />
      </Switch>
    </BrowserRouter>
  );
}
