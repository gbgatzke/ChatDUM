import { useState } from 'react'

function Login() {

    const initValues = {
        username: "",
        password: ""
    }

    const [ formData, setFormData ] = useState(initValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
      }

    return (
        <div>
            <form>
                <div className="form_input">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
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
            </form>
        </div>
    )
}

export default Login