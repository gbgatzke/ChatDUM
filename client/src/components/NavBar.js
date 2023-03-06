 import{ NavLink } from 'react-router-dom'

function NavBar({handleLogout}) {

    

    return (
        <div>
            <NavLink to="/login">
                <button>Login</button>
            </NavLink>
            <NavLink to="/userform">
                <button>New User</button>
            </NavLink>
            <NavLink to='/home'>
                <button onClick={handleLogout}>Logout</button>
            </NavLink>
        </div>
    )
}

export default NavBar