import React from "react";

export default function Menu(props){
    return(
        <div className={props.className}>
            <div className="menu-holder">
            {/* <div className="share-linktree"><i className="fa fa-share"/> Share this website</div> */}
            <div className="dark-mode">
                <span>Dark mode</span><div onClick={props.onClick} className={props.darkMode ? "toggle active" : "toggle"}></div>
            </div>
            </div>
            <div className="copyrt">
                © TertiUX 创科™ 2023
            </div>
        </div>
    )
}