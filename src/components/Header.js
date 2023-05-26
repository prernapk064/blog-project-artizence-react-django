import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
  let {user,logoutUser} = useContext(AuthContext)
  
  return (
    <div>
        <Link to ="/" > Blog</Link>
        <span> | </span>
        {user? (
          
          <button onClick={logoutUser}>Logout</button>
        ):(
          <Link to ="/login" > Login</Link>
        )}
        <span> | </span>
        <Link to ='/register'>register</Link>
      

  

        
    </div>
  )
}

export default Header