import React from "react";
import Navbar from "./Navbar";
import Links from "./Links";
import About from "./About";
import Subscription from "./Subscription";
import Menu from "./Menu";

export default function App(){
    return(
        <div className="container">
            <Navbar className="navbar"/>
            <Links className="links"/>
            <About className="about"/>
            <Subscription className="subscription"/>
            <Menu className="menu"/>
        </div>
    )
}