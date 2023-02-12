import React from "react";

export default function Navbar(props){
    return(
        <div className={props.className}>
            <div className="hamburger">
                <div className="dot"></div>
            </div>
            <div className="gotosubscription">
                <i className="fa fa-bell"/><span>Subscribe</span>
            </div>
        </div>
    )
}