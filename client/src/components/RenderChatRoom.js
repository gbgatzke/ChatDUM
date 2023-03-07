import { joinPaths } from "@remix-run/router"
import { useEffect, useState } from "react"

import RenderMessageCard from "./RenderMessageCard"


function RenderChatRoom({currentUser}){

    const chatroom = {
        id: 24,
        room_name: "test room"
    }
    //////////////////
    //state variables/
    //////////////////
    const [messages, setMessages] = useState([])

    //////////////////
    // initial fetch /
    //////////////////

    useEffect(() => {
        fetch(`/chatroom/${chatroom.id}/messages`)
        .then(r => r.json())
        .then(r => {
            setMessages(r)
            console.log(r)}
            )
        },[])
    
    ////////////////////////////////
    // creating message render card
    ////////////////////////////////
    const messageList = messages.map((message) => {
        return <RenderMessageCard message={message} key={message.id} />
    })

    ////////////////////////////////
    // handle new message //////////
    ////////////////////////////////

    function handleSubmit(e) {
        e.preventDefault()
        const messageNew = {
            content: e.target.newMessage.value,
            user_id: currentUser.id,
            chatroom_id: chatroom.id,
        }
        console.log(messageNew)

        fetch(`/messages`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(messageNew)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(mess => setMessages([...messages, mess]))
            }
            })
            
        e.target.reset()
    }


    /////////////////////////////////
    //// render page ////////////////
    /////////////////////////////////

    if(!messages){
        return(<h1>Loading!!!</h1>)
    }
    return(
        <>
        <h1>{chatroom.room_name}</h1>
        {messageList}
        <form onSubmit={handleSubmit}>
            <label>Enter Message</label>
            <input type="text" name="newMessage" id="newMessage" />
            <button>SEND</button>
        </form>
        </>
    )
}

export default RenderChatRoom