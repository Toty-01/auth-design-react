import React, {useContext} from 'react'
import {UserContext} from "../context/userContext"


const LoginButton = () => {

  const {toggleModals} = useContext(UserContext)

  return (
    <div>
        <button 
        onClick={() => toggleModals("signUp")}
        className="btn btn-primary">
          S'inscrire
        </button>
        <button 
        onClick={() => toggleModals("signIn")}
        className="btn btn-primary ms-2">
          Se connecter
        </button>
    </div>
  )
}

export default LoginButton