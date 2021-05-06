import React, { useState, useEffect } from 'react'
import '../App.css'
import mymodule from './login'

let url = "https://saadjavaid67-messaging-app.herokuapp.com";
const Home = (user) => {
    const [messages, setMessages] = useState([]);
    const [count, setCount] = useState(0);
       const scrollDown=()=>{
           var objDiv = document.getElementById("_chat");
           objDiv.scrollTop = objDiv.scrollHeight;
       } 
    

    const sendMessage = async (e, _text) => {
        e.preventDefault();
        let message = _text.value;
        _text.value = '';
        setCount(count + 1);
        console.log(count);
        await fetch(url + '/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                person: "saad",
                text: message,
                visible: "true",
                sentby: user.user.displayName,
                name: user.user
            })
        })
            .then(response => response.json());
    }
    useEffect(() => {
        const fetchMessages = async () => {
            // console.log(user.user.displayName)
            // console.log('fetch call');
            await fetch(url + '/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ person: "saad" })
            })
                .then(response => response.json())
                .then(data => setMessages(data));
            
            // console.log(messages)
        }
        fetchMessages();
    }, [messages, count]);
    // console.log(messages)
    return (<div>
        <div className="chat-box">
        <mymodule.signOut />
            <div id="_chat" className="chat">
                {messages.map((message, key) => (
                    <div className={(message.sentby === user.user.displayName) ? ("sender-message-wrapper") : ("reciever-message-wrapper")} key={key}>
                        <div className={(message.sentby === user.user.displayName) ? ("sender message-container") : ("reciever message-container")}>
                            <div className="name">{message.sentby}</div>
                            <div className="message">{message.text}</div>
                            <div className="time">{message.time.split('.')[0]}</div>
                        </div>
                    </div>
                ))}
                <button onClick={(()=>scrollDown())} id="scrollDown"><i className="fas fa-arrow-alt-circle-down"></i></button>
            </div>
            <div className="sendmessage">
                <form onSubmit={() => false}>
                    <input className="message-input" autoComplete="off" type="text" id="text-input" placeholder="Enter a Message" />
                    <input className="send-message" id="sendButton" type="submit" onClick={(e) => sendMessage(e, document.getElementById('text-input'))} value="Send" />
                </form>
            </div>
        </div>
    </div>

    )

}

export default Home;