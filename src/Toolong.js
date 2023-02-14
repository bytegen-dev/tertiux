import React from "react";

export default function Toolong(props){
    return(
        <div className={props.className}>
            <div><span>Site took too long to Load 😣💔</span>
            <button onClick={props.onClick}>Force Load !</button>
            </div>
        </div>
    )
}