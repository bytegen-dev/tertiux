import React from "react";

export default function Navbar(props){
    return(
        <div className={props.className}>
            <div className="hamburger">
                <div className="dot"></div>
            </div>
            <div onClick={props.onNextii} className="gotosubscription">
                <i className="fa fa-circle-info"/><span>my Bio</span>
            </div>
        </div>
    )
}