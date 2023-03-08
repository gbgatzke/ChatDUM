import { useNavigate } from "react-router-dom"

function ChatroomCard({ room }) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/chatroom/${room.id}`)
    }
    return (
        <h1 onClick={handleClick}>{room.room_name}</h1>
    )
}

export default ChatroomCard