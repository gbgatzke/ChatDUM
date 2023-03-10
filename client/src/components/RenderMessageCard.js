import { useState } from "react"

function RenderMessageCard({message, currentUser, handleDelete, handleEditMessage}) {
    const [editOn, setEditOn] = useState(false)
    const [content, setContent] = useState(message.content)
    // console.log(message)
    function handleEditMessage(e){
        e.preventDefault()

        const editMessage = {
                content: e.target.editForm.value
        }
        console.log(editMessage)
        fetch(`/messages/${message.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editMessage)
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => setContent(data.content))
            }
        }
        )
        setEditOn(!editOn)
    }
    
    if(!currentUser){
        return(<div className="message-card">
                <h1>Loading</h1>
            </div>)
    }else{
    return(
        <div className="message-card">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="default"/>
            <h6>{message.user.username} ... {message.created_at}</h6>
            {editOn ? <form onSubmit={handleEditMessage}><input type="text" defaultValue={content} style={{width: "520px"}} name="editForm" /><button>Save</button></form> : <p>{content}</p>}
            {currentUser.id === message.user.id ? <button onClick={() => handleDelete(message.id) } >Delete</button> : null }
            {currentUser.id === message.user.id ? <button onClick={() => setEditOn(!editOn)}>edit</button> : null}
        </div>
    )}
}

export default RenderMessageCard