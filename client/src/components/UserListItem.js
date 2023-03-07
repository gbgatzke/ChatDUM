import { useNavigate } from "react-router-dom"

function UserListItem({ user }){

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/profile/${user.id}`)
    }
    return(
        <div onClick={handleClick}>
            <p>{user.username}</p>
        </div>
    )
}

export default UserListItem