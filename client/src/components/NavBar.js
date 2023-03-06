 import{ NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <NavLink to="/login">
                <button>Login</button>
            </NavLink>
            <NavLink to="/userform">
                <button>New User</button>
            </NavLink>
            <NavLink to='/login'>
                <button>Logout</button>
            </NavLink>
        </div>
    )
}

export default NavBar