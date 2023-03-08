  import { joinPaths } from '@remix-run/router'
import { useEffect, useState } from 'react'
  import ChatList from './ChatList'
  import UserList from './UserList'

  function Home({ currentUser }) {

    const [ users, setUsers ] = useState([])

    useEffect(() =>{
      fetch("/users")
      .then(r => r.json)
      .then(data => setUsers(data))
    })

    if(!currentUser){
      return(<h3>Please log in to see your messages!</h3>)
    }
    return (
        <div>
            <h1>Welcome, {currentUser.name}!</h1>
            <p>With ChatDUM, you can <em>chat directly</em> with other <em>users</em> using <em>messages!</em></p>
            <ChatList currentUser={currentUser}/>
            <UserList users={users}/>
        </div>
    )
  }

  export default Home