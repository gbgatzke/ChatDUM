import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


function UserProfile() {

    const [ profile, setProfile ] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetch(`/userprofile/${id}`)
        .then(r => r.json())
        .then(prof => setProfile(prof))
    },[])


    if (!profile) {return (<h1>Loading...</h1>)}
    else {
        return (
            <div>
                <img src={
                    profile.bio.image === "image" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTTDHOM2dwQQdE_8sFcEO40NnLKDLJtP4yLMt-vsxTQ&s" :
                    profile.bio.image
                } />
                <h1>{profile.name}</h1>
                <p>{profile.bio.content}</p>
            </div>
        )
    }
}

export default UserProfile