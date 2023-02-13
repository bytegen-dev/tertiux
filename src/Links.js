import React from "react";
import Swipe from "react-swipe"

export default function Links(props){
    return(
        <div className={props.className}>
            <Swipe className="link-holder">
                <div className="link">
                <i className="fa fa-download"/>download CV
                </div>
            </Swipe>
            <Swipe className="link-holder">
                <div className="link">
                <i className="fa fa-link"/>My projects
                </div>
            </Swipe>
            <Swipe className="link-holder">
                <div className="link">
                    <i className="fa-brands fa-linkedin"/> linkedIn
                </div>
            </Swipe>
            <Swipe className="link-holder">
                <div className="link">
                <i className="fa-brands fa-solid fa-whatsapp"/>wa.me
                </div>
            </Swipe>
            <Swipe className="link-holder">
                <div className="link">
                <i className="fa-brands fa-solid">XP</i>Experience
                </div>
            </Swipe>
        </div>
    )
}