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




function App() {

  const [ currentUser, setCurrentUser ] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if (r.ok) {
        r.json().then(user => setCurrentUser(user))
      }
    })
    },[])


    function handleLogout() {
      fetch('/logout', {
        method: 'DELETE'
      })
      
      setCurrentUser(null)
      
    }
    console.log(currentUser)
  return (
    <>
      <NavBar handleLogout={handleLogout}/>
      <Routes>
        <Route path="/home" element={<Home currentUser={currentUser}/>}/>
    
        <Route path="/userform" element={<NewUserForm setCurrentUser={setCurrentUser}/>}/>

        <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path='/chatroom/:id' element={<RenderChatRoom currentUser={currentUser}/>}/>
      </Routes>
    
    </>

  )
}

export default App;
