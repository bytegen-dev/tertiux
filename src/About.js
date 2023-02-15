import React from "react";

export default function About(props){
    const dev = "</>"

    const [devDetails, setDevDetails] = React.useState(
        {
            name: "",
            role: "Frontend Developer",
        }
    )

    function happyDev(){
        setDevDetails(
            function(prevState){
                return({...prevState, name: "I"})
            }
        )
        
        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Is"})
                    }
                )
            }, 100
        )

        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isa"})
                    }
                )
            }, 200
        )

        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaa"})
                    }
                )
            }, 300
        )

        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaac"})
                    }
                )
            }, 400
        )

        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaac "})
                    }
                )
            }, 500
        )

        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaac A"})
                    }
                )
            }, 600
        )
        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaac Ad"})
                    }
                )
            }, 700
        )

        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaac Ade"})
                    }
                )
            }, 800
        )
        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaac Adeb"})
                    }
                )
            }, 900
        )
        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaac Adeba"})
                    }
                )
            }, 1000
        )
        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaac Adebay"})
                    }
                )
            }, 1100
        )
        setTimeout(
            function(){
                setDevDetails(
                    function(prevState){
                        return({...prevState, name: "Isaac Adebayo"})
                    }
                )
            }, 1200
        )
    }
    
    React.useEffect(
        function(){
            setTimeout(
                happyDev, 3500
            )
        },[]
    )

    

    // Tertiux 创科
    return(
        <div className={props.className}>
            {/* <img className="black-sun" src="tertiux-black-sun.png" alt="black sun"/> */}
            <div className="black-sun">
                <a href="isaac-i.jpg" rel="noreferrer" download="isaac-adebayo-bitmoji.png"><i className="fa fa-cloud-download"/></a>
            </div>
            <div className="hero"><h1><span>{dev}</span>{devDetails.name}<span><i className="fa fa-certificate"/><i className="fa fa-check"/></span></h1></div>
            <div className="role-holder">
                <div className="role"><h3>frontend developer</h3></div>
                <div className="languages">
                    <div className="language active">Html5</div>
                    <div className="language i">CSS3</div>
                    <div className="language ii">Javascript</div>
                    <div className="language iii">React.js</div>
                    <div className="language iv">SASS</div>
                    <div className="language v">Cordova</div>
                    <div className="language vi">Bootstrap</div>
                    <div className="language vii">WordPress</div>
                    <div className="language viii">GIT</div>
                </div>
            </div>
        </div>
    )
}