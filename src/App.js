import React from "react";
import Navbar from "./Navbar";
import Links from "./Links";
import About from "./About";
import Subscription from "./Subscription";
import Menu from "./Menu";
import AboutBig from "./AboutBig";
import Preloader from "./Preloader";

export default function App(){
    const [uiSettings, setUiSettings] = React.useState(
        {
            showMenu: false,
            showSubscription: false,
            showWhatsapp: false,
            showEmail: false,
            showGithub: false,
            showLinkedin: false,
            showAboutBig: false,
            containerOverflow: true,
            showBackdrop:false
        }
    )


    function aboutBig(){
        setUiSettings(
            (prevState)=>{
                return({
                    ...prevState, showAboutBig: !prevState.showAboutBig, containerOverflow: !prevState.containerOverflow
                })
            }
        )
    }

    function menuToggle(){
        setUiSettings(
            (prevState)=>{
                return({
                    ...prevState, showMenu: !prevState.showMenu
                })
            }
        )
    }



    return(
        <div className={uiSettings.containerOverflow ? "container" : "container nooverflow"}>
            <Navbar className="navbar" onNextii={aboutBig} onNext={menuToggle}/>
            <About className="about"/>
            <Links className="links"/>
            <Subscription className="subscription"/>
            <Preloader className="preloader"/>
            <Menu className={uiSettings.showMenu?"show menu":"menu"}/>
            <div onClick={menuToggle} className={uiSettings.showMenu ? "show backdrop" : "backdrop"}></div>
            <AboutBig onPrev={aboutBig} className={uiSettings.showAboutBig ? "show about-bigger" : "about-bigger"}/>
        </div>
    )
}