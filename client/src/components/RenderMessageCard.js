function RenderMessageCard({message}) {
    return(
        <div className="message-card">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
            <h6>{message.user.username} ... {message.created_at}</h6>
            <p>{message.content}</p>
            
        </div>
    )
}

export default RenderMessageCard