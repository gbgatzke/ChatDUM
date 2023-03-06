import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router'
import Login from './components/Login'
import { useState, useEffect } from 'react'
import Home from './components/Home'

import NewUserForm from './components/NewUserForm'



function App() {

  const [ currentUser, setCurrentUser ] = useState('')

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if (r.ok) {
        r.json().then(user => setCurrentUser(user))
      }
    })
    },[])

    if(!currentUser) return (
      <div>
        <NavBar />
        <Login setCurrentUser={setCurrentUser}/>
      </div>
    )

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}/>
    
        <Route path="/userform" element={<NewUserForm setCurrentUser={setCurrentUser}/>}/>

        <Route path='/login' element={<Login />}/>
      </Routes>
    
    </>

  )
}

export default App;
