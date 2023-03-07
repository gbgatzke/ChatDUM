import { useEffect, useState } from "react"

import RenderMessageCard from "./RenderMessageCard"


function RenderChatRoom(){

    const [messages, setMessages] = useState([
        {
            content: "test message",
            id: 5
        }
    ])

    // useEffect(() => {
    //     fetch(`chatroom/${chatroom.id}`)
    //     .then(r => {
    //         if (r.ok){
    //             r.json().then(setMessages(r.messages))
    //         }else{
    //             console.log(r.errors)
    //         }
    //     })
    // })

    const messageList = messages.map((message) => {
        return <RenderMessageCard message={message} key={message.id} />
    })
    
    return(
        <>
        {messageList}
        </>
    )
}

export default RenderChatRoom