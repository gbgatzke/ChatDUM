import { useNavigate } from "react-router-dom"

function ChatroomCard({ room }) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/chatroom/${room.id}`)
    }

    
    return (
        <div className="chatroomCard">
            <h3 onClick={handleClick}>{room.room_name}</h3>
            <p></p>
        </div>
    )
}

export default ChatroomCard