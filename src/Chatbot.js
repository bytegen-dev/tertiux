import React from "react";

export default function Chatbot(props){

    const [response, setResponse] = React.useState({
        answer: "Hello, how can I be of help"
    })

    const [question, setQuestion] = React.useState({
        question: "",
    })

    const [myDetails, setMyDetails] = React.useState({
        age: 18,
        dob: "14th of September 2004",
        fullname: "Isaac Adebayo Oluwagbemiro",
        heightft: "5.9ft",
        heightm: "about 1.5m",
        weight: "68kg",
        languages: "English, Yoruba and beginner-level Spanish",
        topProgLanguages: "Html, Css, Vanilla.js, React.js",
        mediumProgLanguages: "Wordpress, Sass, Redux, React native, Cordova",
        nicknamei: {
            name: "Ade"
        },
        nicknameii: {
            name: "Isco",
            why: "I got this name in high school, if you watch soccer you'll know its also the name of spanish midfielder Isco Alarcon, so yes I am above average when it comes to sports"
        },
        nicknameiii: {
            name: "Young Zaint",
            why: ""
        },
        nicknameiv: {
            name: "Tertiux",
            why: ""
        },
        background: "I was born in Okene, Kogi state (Nigeria) to a wonderful family. My parents were christian missionaries and "
    })


    return(
        <div className={props.className}>
            <div className="chat-holder">
                <form>
                    <input placeholder="your message"/>
                </form>
            </div>
        </div>
    )
}