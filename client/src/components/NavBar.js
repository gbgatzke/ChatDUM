 import{ NavLink } from 'react-router-dom'

function NavBar({ handleLogout, currentUser }) {

    if(!currentUser) {return (
        <div>
            <NavLink to="/login">
                <button>Login</button>
            </NavLink>
            <NavLink to="/userform">
                <button>New User</button>
            </NavLink>
            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>
        </div>
    )}else{
        return (
            <div>
                <NavLink to='/home'>
                    <button onClick={handleLogout}>Logout</button>
                </NavLink>
                <NavLink to='/chatroom/:id'>
                    <button>chatroom</button>
                </NavLink>
                <NavLink to='/home'>
                    <button>Home</button>
                </NavLink>
            </div>
        )
    }
}

export default NavBar