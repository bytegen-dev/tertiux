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
            containerOverflow: true
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



    return(
        <div className={uiSettings.containerOverflow ? "container" : "container nooverflow"}>
            <Navbar className="navbar" onNextii={aboutBig}/>
            <About className="about"/>
            <Links className="links"/>
            <Subscription className="subscription"/>
            <Preloader className="preloader"/>
            <Menu className="menu"/>
            <AboutBig onPrev={aboutBig} className={uiSettings.showAboutBig ? "show about-bigger" : "about-bigger"}/>
        </div>
    )
}