import { useEffect } from 'react'
// cableApp, updateApp, getRoomData
function RoomWebSocket(props) {

    useEffect(() => {
        props.getRoomData(window.location.href.match(/\d+$/)[0])



        props.cableApp.room = props.cableApp.cable.subscriptions.create(
            {
                channel: "ChatroomsChannel",
                room: window.location.href.match(/\d+$/)[0]
            },
            {
                received: (updatedRoom) => {
                    console.log(updatedRoom)
                    props.updateApp(updatedRoom)
                },
            }
        )
        console.log(props.cableApp.room)
        },[])
        
    return <div></div>
}

export default RoomWebSocket