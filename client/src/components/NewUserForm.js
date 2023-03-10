import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewUserForm({ setCurrentUser }) {

    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const initValues = {
        username: '',
        name: '',
        password: '',
        password_confirmation: '',
    }

    const [ formData, setFormData ] = useState(initValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(r => {
            if (r.ok) {
                r.json().then(user => {
                    setCurrentUser(user)
                    setFormData(initValues)
                    navigate('/home')
                })
            } else {
                r.json().then(err => {
                    setErrors(err.errors)
                })
            }
        })
    }

    const errorHandling = errors.map((error, index) => {
        return (<div><h5 style={{color: "red"}} key={index}>{error}!<br></br></h5></div>)
    })
    

    return (
        <div className="form">
            <h1>New User Info:</h1>
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
                <button className="review_button" type="submit">Submit</button>
            </form>
            {errors ? errorHandling : null}
            </div>
    )
}

export default NewUserForm