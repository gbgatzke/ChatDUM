import UserListItem from "./UserListItem"
import { useState, useEffect } from 'react'

function UserList() {

    const [ users, setUsers ] = useState([])

    useEffect(() =>{
        fetch("/users")
        .then(r => r.json())
        .then(data => setUsers(data))
    },[])

    const displayUsers = users.map(user =>
        <UserListItem key={user.id} user={user}/>
    )

    return (
        <div>
            {displayUsers}
        </div>
    )
}

export default UserList