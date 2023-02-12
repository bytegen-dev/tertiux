import React from "react";
import Navbar from "./Navbar";
import Links from "./Links";
import About from "./About";
import Subscription from "./Subscription";
import Menu from "./Menu";
import Preloader from "./Preloader";

export default function App(){
    return(
        <div className="container">
            <Navbar className="navbar"/>
            <About className="about"/>
            <Links className="links"/>
            <Subscription className="subscription"/>
            <Preloader className="preloader"/>
            <Menu className="menu"/>
        </div>
    )
}