import { useNavigate } from "react-router-dom"

function UserListItem({ user }){

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/profile/${user.id}`)
    }
    return(
        <div>
            <p onClick={handleClick}>{user.name}</p>
        </div>
    )
}

export default UserListItem