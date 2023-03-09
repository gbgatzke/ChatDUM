import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditUserProfile() {

    const [ formData, setFormData ] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(r => r.json())
        .then(data => setFormData(data))

    })

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }
    return (
        <div>
            <h1>WHy do you want to change me??</h1>
            <form onSubmit={handleSubmit}>
            <div className="form_input">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        placeholder="Password Confirmation"
                    />
                </div>
                <button>Submit Changes</button>
            </form>
        </div>
    )
}

export default EditUserProfile