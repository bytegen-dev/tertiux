import React from "react";
import Swipe from "react-swipe"

export default function Links(props){
    

    return(
        <div className={props.className}>
            <Swipe className="link-holder">
                <a href="isaac-dev.pdf" download="" className="link">
                <i className="fa fa-download"/>download CV
                </a>
            </Swipe>
            <Swipe className="link-holder">
                <a href="https://isaac-projects.netlify.app" className="link">
                <i className="fa fa-link"/>My projects
                </a>
            </Swipe>
            <Swipe className="link-holder">
                <a href="https://linkedin.com/tertiux44" className="link">
                    <i className="fa-brands fa-linkedin"/> linkedIn
                </a>
            </Swipe>
            <Swipe className="link-holder">
                <a href="https://wa.me/+2347035658853" className="link">
                <i className="fa-brands fa-solid fa-whatsapp"/>wa.me
                </a>
            </Swipe>
            <Swipe className="link-holder">
                <a href="https://isaac-experience.netlify.app" className="link">
                <i className="fa-brands fa-solid">XP</i>Experience
                </a>
            </Swipe>
        </div>
    )
}