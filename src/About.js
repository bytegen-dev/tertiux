import React from "react";

export default function About(props){
    const dev = "</>"
    return(
        <div className={props.className}>
            {/* <img className="black-sun" src="tertiux-black-sun.png" alt="black sun"/> */}
            <div className="black-sun"></div>
            <div className="hero"><h1><span>{dev}</span> Tertiux 创科</h1></div>
            <div className="role-holder">
                <div className="role"><h3>frontend developer</h3></div>
                <div className="languages">
                    <div className="language active">React.js</div>
                    <div className="language i">Html5</div>
                    <div className="language ii">CSS3</div>
                    <div className="language iii">Vanilla.js</div>
                    <div className="language iv">Node.js</div>
                    <div className="language v">MERN</div>
                    <div className="language vi">Bootstrap</div>
                    <div className="language vii">WordPress</div>
                    <div className="language viii">GIT</div>
                </div>
            </div>
        </div>
    )
}