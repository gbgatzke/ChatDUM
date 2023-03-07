import UserListItem from "./UserListItem"

function UserList({ users }) {

    const displayUsers = users.map(user => {
        <UserListItem key={user.id} user={user}/>
    })

    return (
        <div>
            {displayUsers}
        </div>
    )
}

export default UserList