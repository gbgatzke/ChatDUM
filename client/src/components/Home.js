  import { useEffect } from 'react'
  
  function Home() {

    useEffect(() => {
        fetch('/me')
    })
    return (
        <div>
            <h1>Home Page</h1>
            
        </div>
        
    )
  }

  export default Home