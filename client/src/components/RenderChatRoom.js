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
        console.log(updatedRoom)
    }

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
        />
        </>
    )}
}

export default RenderChatRoom