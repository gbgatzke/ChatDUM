import UserListItem from "./UserListItem"
import { useState, useEffect } from 'react'

function UserList({ currentUser }) {

    const [ users, setUsers ] = useState([])

    useEffect(() =>{
        fetch("/users")
        .then(r => r.json())
        .then(data => setUsers(data))
    },[])

    const filterUsers = users.filter(user => {
        return user.id !== currentUser.id
    }
    )

    const displayUsers = filterUsers.map(user =>
        <UserListItem key={user.id} user={user}/>
        )

    return (
        <div>
            {displayUsers}
        </div>
    )
}

export default UserList