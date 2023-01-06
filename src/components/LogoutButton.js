import React from 'react'
import {signOut} from "firebase/auth"
import {auth} from "../firebase-config"
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
  
  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
    }
  }

  return (
    <div>        
        <button 
        onClick={logOut}
        className="btn btn-danger ms-2">
          Déconnexion
        </button>
    </div>
  )
}

export default LogoutButton