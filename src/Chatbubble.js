import React from "react";

export default function Chatbubble(props){
    return (<div className={props.className} onClick={props.onClick}>
        {/* <div className="emoji">
            <div className="eyes">
                <div className="eye i"></div>
                <div className="eye ii"></div>
            </div>
            <div className="eyeglass"></div>
            <div className="mouth"></div>
        </div> */}
        <i className="fa fa-comment-alt"></i>
        <i className="fa fa-close"></i>
    </div>)
}