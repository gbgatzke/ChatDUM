
import ChatroomCard from './ChatroomCard'
function ChatList({ currentUser }) {

    const { name, username, id, unique_rooms  } = currentUser
    
    const rooms = unique_rooms.map(room => 
            <ChatroomCard key={room.id} room={room}/>
        )

    return (
        <div>{rooms}</div>
    )
}

export default ChatList