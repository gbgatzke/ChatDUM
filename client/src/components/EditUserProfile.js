import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditUserProfile({ handleEditProfile }) {

    const [ formData, setFormData ] = useState({
        username: '',
        name: '',
        password: '',
        password_confirmation: '',
    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(r => r.json())
        .then(data => setFormData(data))

    },[])

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/users/${id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(r => r.json())
        .then(data => {
           handleEditProfile(data)
            navigate("/home")
        }
        )

    }
    return (
        <div>
            <h1>WHy do you want to change me??</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">New Username</label>
                 <div className="form_input">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="name">New Name</label>
                <div className="form_input">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="password">Password</label>
                 <div className="form_input">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="name">Password Confirmation</label>
                <div className="form_input">
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                    />
                </div>
                <button>Submit Changes</button>
            </form>
        </div>
    )
}

export default EditUserProfile