import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function UserProfile() {

    const { id } = useParams()
    const [ profile, setProfile ] = useState([])

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(r => r.json())
        .then(u => setProfile(u))
    },[])

    return (
        <div></div>
    )
}

export default UserProfile