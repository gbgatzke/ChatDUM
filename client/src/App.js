import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router'
import Login from './components/Login'
import { useState, useEffect } from 'react'
import Home from './components/Home'
import { useNavigate } from 'react-router';

import NewUserForm from './components/NewUserForm'
import RenderChatRoom from './components/RenderChatRoom';
import UserProfile from './components/UserProfile'




function App() {

  const [ currentUser, setCurrentUser ] = useState(null)
  const navigate = useNavigate()
  // console.log(currentUser)
  useEffect(() => {
    fetch('/me')
    .then(r => {
      if (r.ok) {
        r.json().then(user => setCurrentUser(user))
      }
    })
    },[])

    console.log(currentUser)

    // if(!currentUser) return (
    //   <div>
    //     <NavBar />
    //     <Login setCurrentUser={setCurrentUser}/>
    //   </div>
    // )

    function handleLogout() {
      fetch('/logout', {
        method: 'DELETE'
      })
      setCurrentUser(null)
    }

  return (
    <>
      <NavBar handleLogout={handleLogout}/>
      <Routes>
        <Route path="/home" element={<Home currentUser={currentUser}/>}/>
        <Route path="/userform" element={<NewUserForm setCurrentUser={setCurrentUser}/>}/>
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path='/chatroom/:id' element={<RenderChatRoom />}/>
        <Route path="/profile/:id" element={<UserProfile />}/>
      </Routes>
    
    </>

  )
}

export default App;
