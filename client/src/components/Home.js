  import { useEffect } from 'react'
  
  function Home({currentUser}) {

    useEffect(() => {
        fetch('/me')
    })
    if(!currentUser){
      return(<h3>Please log in to see your messages!</h3>)
    }
    return (
        <div>
            <h1>Home Page</h1>

        </div>
    )
  }

  export default Home