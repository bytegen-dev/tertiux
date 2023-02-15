import React from "react";

export default function Orientation(props){
    return(
        <div className={props.className}>
            <i className="fa-solid fa-retweet"></i>
            <div>Adjust device orientation</div>
        </div>
    )
}