  import { useNavigate } from 'react-router-dom'
  import ChatList from './ChatList'
  import UserList from './UserList'
  import UserDropDownList from './UserDropDownList'
  import { useState,useEffect } from 'react'

  function Home({ currentUser }) {

    const navigate = useNavigate()
    const [ users, setUsers ] = useState([])

    useEffect(() =>{
      fetch("/users")
      .then(r => r.json())
      .then(data => setUsers(data))
  },[])

  const dropdownUsers = users.map(user => {
    
      return <UserDropDownList key={user.id} user={user}/>
    
  }
)
    const handleClick = () => {
      navigate(`/editprofile/${currentUser.id}`)
    }


    ////////////////////////////
    // new chat room function //
    ////////////////////////////

    function handleNewChat(e){
      e.preventDefault()
      const formBody = {
        send_id: currentUser.id,
        receive_id: parseInt(e.target.drop.value),
        room_name: e.target.chatroomName.value,
      }

      fetch('chatroom/new', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formBody)
      })
      .then((r) => {
        if(r.ok){
          r.json().then((data) => {

          })
        }
      })
      console.log(formBody)
      e.target.reset()
    }

    if(!currentUser){
      return(<h3>Please log in to see your messages!</h3>)
    }
    return (
        <div>
          
            <h1>Welcome, {currentUser.name}!</h1>
            <p>With ChatDUM, you can <em>chat directly</em> with other <em>users</em> using <em>messages!</em></p>
            <div id="createChatroomForm">
              <h3>Create New Chat</h3>
            <form onSubmit={handleNewChat}>
              <label>Select User</label>
              <select name="drop">
                <option>Pick One</option>
                {dropdownUsers}
              </select>
              <label>Name of Chat</label>
              <input type="text" name="chatroomName" placeholder='something cool'/>
              <button>Create!</button>
            </form>
          </div>
            <ChatList currentUser={currentUser}/>
            <UserList />
            <button onClick={handleClick}>Edit Profile</button>
        </div>
    )
  }

  export default Home