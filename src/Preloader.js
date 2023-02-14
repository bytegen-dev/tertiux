import React from "react";
import Toolong from "./Toolong";

export default function Preloader(props){
    return(
        <div className={props.className}>
            <div className="preloader-circle"></div>
            <Toolong onClick={props.onClick} className={props.takeTime ? "toolong" : "toolong hide"} />
        </div>
    )
}