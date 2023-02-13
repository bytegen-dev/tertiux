import React from "react";

export default function Chatbot(props){
    const [question, setQuestion] = React.useState({
        question: "",
        userName: ""
    })

    const [response, setResponse] = React.useState({
        answer: `Hello ${question.userName} , how can I be of help? 🙂`
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
        background: "I was born in Okene, Kogi state (Nigeria) to a wonderful family. My parents were christian missionaries and ",
        walink: "https://wa.me/+2347035658853",
        walinkvisible: false,
    })

    function userTyping(event){
        const {name,value} = event.target

        setQuestion((prevState)=>{return({...prevState, [name]: value})})
    }

    function askQuestion(event){
        event.preventDefault()
        setResponse((prevState)=>{
            return({...prevState, answer: "....Thinking"})
        })

        const userQuestion = question.question

        setTimeout(
            function(){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:`Sorry I failed to understand your question. \nThere are many possible reasons why this happened, possibly the answer to your question is not in my database or you used some form of shakespearean English 😏.\n \nPlease rephrase your question or make a complaint in the link below`
                            })
                        }
                    )

                if(
                    question.question.toLowerCase().includes("fuck")||question.question.toLowerCase().includes("shit")||question.question.toLowerCase().includes("damn")||question.question.toLowerCase().includes("fool")||question.question.toLowerCase().includes("stupid")||question.question.toLowerCase().includes("hate")||question.question.toLowerCase().includes("ass")||question.question.toLowerCase().includes("dick")||question.question.toLowerCase().includes("pussy")||question.question.toLowerCase().includes("cunt")||question.question.toLowerCase().includes("sex")||question.question.toLowerCase().includes("porn")||question.question.toLowerCase().includes("boobs")||question.question.toLowerCase().includes("threesome")||question.question.toLowerCase().includes("xvideos")||question.question.toLowerCase().includes("xnxx")||question.question.toLowerCase().includes("pornhub")||question.question.toLowerCase().includes("onlyfans")||question.question.toLowerCase().includes("bangbros")
                ){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:`You seem to have used an offensive language, Please rephrase your question or make a complaint in the link below`
                            })
                        }
                    )

                    setMyDetails(
                        (prevState)=>{
                            return({...prevState, walinkvisible: true})
                        }
                    )


                    return
                } else if(
                    question.question.toLowerCase().includes("age")||question.question.toLowerCase().includes("old")||question.question.toLowerCase().includes("year")||question.question.toLowerCase().includes("birthday")
                ){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:`Isaac Adebayo was born on ${myDetails.dob}. That makes him ${myDetails.age} years old 😁 `
                            })
                        }
                    )
                    
                    return
                } else if(
                    question.question.toLowerCase().includes("name")||question.question.toLowerCase().includes("fullname")
                ){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:`Isaac's full name is "${myDetails.fullname}" 🙂`
                            })
                        }
                    )
                    return
                } else if(
                    userQuestion.toLowerCase().includes("height")||userQuestion.toLowerCase().includes("tall")||userQuestion.toLowerCase.includes("short")
                ){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:`as of February 2, 2023 Isaac's height was "${myDetails.heightft}ft" \n He is quite a tall boy compared to the average Nigerian male height of 5.3ft`
                            })
                        }
                    )
                    return
                }else if(
                    question.question.toLowerCase().includes("nickname")||question.question.toLowerCase().includes("pseudo-name")
                ){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:`Isaac is known with various nicknames \n1."${myDetails.nicknamei}"\n2.${myDetails.nicknameii}\n3.${myDetails.nicknameiii}`
                            })
                        }
                    )
                    return
                } else if(
                    question.question.toLowerCase().includes("programming languages")||question.question.toLowerCase().includes("coding")
                ){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:` presently Isaac is proficient in the following Programming Languages: "${myDetails.topProgLanguages}" 😉`
                            })
                        }
                    )
                    return
                }else if(
                    question.question.toLowerCase().includes("languages")||question.question.toLowerCase().includes("speak")
                ){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:`Isaac speaks very good English and Yoruba languages, he also speaks beginner-level Spanish 😏`
                            })
                        }
                    )
                    return
                } else if(
                    question.question.toLowerCase().includes("single")||question.question.toLowerCase().includes("married")||question.question.toLowerCase().includes("marital")
                ){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:`Isaac is presently not looking forward to entering any sort of emotionally driven relationships 💔`
                            })
                        }
                    )
                    return
                } else if(
                    question.question.toLowerCase().includes("game")||question.question.toLowerCase().includes("hobby")||question.question.toLowerCase().includes("games")||question.question.toLowerCase().includes("video-games")||question.question.toLowerCase().includes("spare time")||question.question.toLowerCase().includes("fifa")||question.question.toLowerCase().includes("efootball")||question.question.toLowerCase().includes("chess")
                ){
                    setResponse(
                        (prevState)=>{
                            return({
                                ...prevState, answer:`Isaac has a very good timetable for his activities and has included time for exercises, gaming and watching movies`
                            })
                        }
                    )
                    return
                }
            },1000
        )

    }



    return(
        <div className={props.className}>
            <div className="chat-holder">
                <div className="ai-response">
                    <span>{response.answer}</span>
                </div>
                <a href="https://wa.me/+2347035658853" className={myDetails.walinkvisible ? "show complaint":"complaint"}>Make a complaint</a>
                <form onSubmit={askQuestion}>
                    <input required onChange={userTyping} placeholder="your question" name="question" value={question.question}/>
                    <button><i className="fa fa-paper-plane"/></button>
                </form>
            </div>
        </div>
    )
}