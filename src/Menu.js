import React from "react";

export default function Menu(props){

    const handleTouchStart = (event) => {
        // console.log("Touch start registered");
        const startY = event.touches[0].clientY;
        const menuEl = document.querySelector(".menu");
        menuEl.addEventListener('touchend', handleTouchEnd);
        
        function handleTouchEnd(event) {
            const endY = event.changedTouches[0].clientY;
            if (endY > startY + 50) {
                props.swipeDown();
            }
            menuEl.removeEventListener('touchend', handleTouchEnd);
        }
    };

    return(
        <div className={props.className} onTouchStart={handleTouchStart}>
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
