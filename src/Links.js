import React from "react";
import Swipe from "react-swipe"

export default function Links(props){
    

    return(
        <div className={props.className}>
            <Swipe className="link-holder">
                <a href="Isaac-Adebayo-CV.pdf" download="Isaac Adebayo CV.pdf" className="link">
                <i className="fa fa-download"/>download CV
                </a>
            </Swipe>
            <Swipe className="link-holder">
                <a href="https://github.com/tertiux" className="link">
                <i className="fa-brands fa-github"/>My projects
                </a>
            </Swipe>
            <Swipe className="link-holder">
                <a href="https://www.linkedin.com/in/tertiux44" className="link">
                    <i className="fa-brands fa-linkedin"/> linkedIn
                </a>
            </Swipe>
            <Swipe className="link-holder">
                <a href="https://wa.me/+2347035658853" className="link">
                <i className="fa-brands fa-solid fa-whatsapp"/>wa.me
                </a>
            </Swipe>
            <Swipe className="link-holder">
                <a href="https://twitter.com/tertiux44" className="link xp">
                <i className="fa-brands fa-twitter"></i>Twitter
                </a>
            </Swipe>
        </div>
    )
}