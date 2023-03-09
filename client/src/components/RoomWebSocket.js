import { useEffect } from 'react'

function RoomWebSocket({ cableApp, updateApp, getRoomData }) {

    useEffect(() => {
        getRoomData(window.location.href.match(/\d+$/)[0])
        cableApp.cable.subscriptions.create(
            {
                channel: "ChatroomsChannel",
                room: window.location.href.match(/\d+$/)[0]
            },
            {
                received(updatedRoom) {
                    console.log(updatedRoom)
                    // updateApp(updatedRoom)
                },
            }
        )
        },[])
    return <div></div>
}

export default RoomWebSocket