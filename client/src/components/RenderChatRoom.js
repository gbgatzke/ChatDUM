import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

import RenderMessageCard from "./RenderMessageCard"


function RenderChatRoom({ currentUser }){

    const [messages, setMessages] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch(`/chatroom/${id}/messages`)
        .then(r => r.json())
        .then(r => 
            setMessages(r)
            )
        },[])

    

    ////////////////////////////////
    // creating message render card
    ////////////////////////////////


    const messageList = messages.map((message) => {
        return <RenderMessageCard message={message} key={message.id} currentUser={currentUser} handleDelete={handleDelete} />
    })

    function handleDelete(id){

        fetch(`/messages/${id}`, {
            method: 'DELETE'
        })
        
        const filteredMessages = messages.filter((mess) => {
            return mess.id !== id
        })
        setMessages(filteredMessages)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const messageNew = {
            content: e.target.newMessage.value,
            user_id: currentUser.id,
            chatroom_id: id
        }

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

    if(messages === []){
        
        return(
            <h1>Loading!!!</h1>
            )
    }else{
        
    return(
        <>
        <h1>{messages[0].chatroom.room_name}</h1>
        {messageList}
        <form onSubmit={handleSubmit} >
            <label>Enter Message</label>
            <input type="text" name="newMessage" id="newMessage" />
            <button>SEND</button>
        </form>
        </>
    )}
}

export default RenderChatRoom