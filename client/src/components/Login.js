import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login({setCurrentUser}) {

    const navigate = useNavigate()

    const initValues = {
        username: "",
        password: ""
    }

    const [ formData, setFormData ] = useState(initValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json().then((user) => {
                    setCurrentUser(user)
                    navigate('/home')
                })
            }
        })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form_input">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="username"
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
                <button>CLICK</button>
            </form>
            
        </div>
        
    )
}

export default Login