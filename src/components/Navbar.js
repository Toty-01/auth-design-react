import React, {useContext} from 'react'
import {UserContext} from "../context/userContext"
import {Link} from "react-router-dom"
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'

export default function Navbar() {

 const {currentUser} = useContext(UserContext)

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthJS 
      </Link>
      <div>
      {currentUser
        ? <LogoutButton  />
        : <LoginButton />
      }
      </div>
    </nav>
  )
}
