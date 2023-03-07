function RenderMessageCard({message}) {
    return(
        <div className="message-card">
            <h6>{message.user.username} ... {message.created_at}</h6>
            <p>{message.content}</p>
            
        </div>
    )
}

export default RenderMessageCard