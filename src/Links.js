import React from "react";
import Swipe from "react-swipe"

export default function Links(props){
    return(
        <div className={props.className}>
            <Swipe className="link-holder">
                <div className="link">
                <i className="fa-brands fa-solid fa-whatsapp"/>whatsapp
                </div>
            </Swipe>
            <Swipe className="link-holder">
                <div className="link">
                <i className="fa fa-envelope"/>email
                </div>
            </Swipe>
            <Swipe className="link-holder">
                <div className="link">
                <i className="fa-brands fa-github"/>github
                </div>
            </Swipe>
            <Swipe className="link-holder">
                <div className="link">
                    <i className="fa-brands fa-linkedin"/> linkedIn
                </div>
            </Swipe>
        </div>
    )
}