  import { useNavigate } from 'react-router-dom'
  import ChatList from './ChatList'
  import UserList from './UserList'

  function Home({ currentUser }) {

    const navigate = useNavigate()
    const handleClick = () => {
      navigate(`/editprofile/${currentUser.id}`)
    }

    if(!currentUser){
      return(<h3>Please log in to see your messages!</h3>)
    }
    return (
        <div>
            <h1>Welcome, {currentUser.name}!</h1>
            <p>With ChatDUM, you can <em>chat directly</em> with other <em>users</em> using <em>messages!</em></p>
            <ChatList currentUser={currentUser}/>
            <UserList />
            <button onClick={handleClick}>Edit Profile</button>
        </div>
    )
  }

  export default Home