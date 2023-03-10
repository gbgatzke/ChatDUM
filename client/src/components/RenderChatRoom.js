import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import RenderMessageCard from "./RenderMessageCard"
import RoomWebSocket from "./RoomWebSocket"


function RenderChatRoom({ currentUser, cableApp }){

    const [ currentRoom, setCurrentRoom ] = useState({
        chatroom: {},
        messages: []
    })
    const [ messages, setMessages ] = useState([])

    const { id } = useParams()

    function updateApp(updatedRoom) {
        const incomingMessages = {
            content: updatedRoom.messages.content,
            created_at: updatedRoom.messages.created_at,
            id: updatedRoom.messages.id,
            user: updatedRoom.user,
            chatroom: updatedRoom.chatroom,
        }
        console.log(incomingMessages.content)
        setMessages([...messages, incomingMessages])
    }

    useEffect(() => {
        
        fetch(`/chatroom/${id}/messages`)
        .then(r => r.json())
        .then(data =>
            // console.log(data)
            setMessages(data)
            )
        },[])

    ////////////////////////////////
    // creating message render card
    ////////////////////////////////


    const messageList = messages.map((message, index) => {
        return <RenderMessageCard message={message} key={index} currentUser={currentUser} handleDelete={handleDelete} />
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
            chatroom_id: parseInt(id)
        }
        
        fetch('/messages', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(messageNew)
        })
        .then(r => {
            if (r.ok) {
                r.json().then((mess) => {
                    setMessages([...messages, mess])
                    // console.log('return')
                })
            }
            })

        e.target.reset()
    }

    function getRoomData(id) {
        fetch(`/chatrooms/${id}`)
        .then(r => r.json())
        .then(r => setCurrentRoom(r))
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
        
        {/* <h1>{messages[0].chatroom.room_name}</h1> */}
        {messageList}
        <form onSubmit={handleSubmit} >
            <label>Enter Message</label>
            <input type="text" name="newMessage" id="newMessage" />
            <button>SEND</button>
        </form>
        <RoomWebSocket 
            cableApp={cableApp} 
            updateApp={updateApp}
            getRoomData={getRoomData}
            messages={messages}
            setMessages={setMessages}
        />
        </>
    )}
}

export default RenderChatRoom