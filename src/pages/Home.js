import React, {useContext} from 'react'
import {UserContext} from "../context/userContext"

export default function Home() {

  const {currentUser} = useContext(UserContext)

  return (
    <div className="container p-5">
      <h1 className="display-3 text-light text-center">
        { currentUser ? "Bienvenue" : "Bonjour, veuillez vous connecter ou vous inscrire !!" }
      </h1>
    </div>
  )
}
