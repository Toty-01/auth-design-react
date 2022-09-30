import React from 'react'
import cat from "./cat.gif"

export default function PrivateHome() {
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light mb-4">
        Home Sweet Home
      </h1>
      <h2 className='display-4 text-light text-center mb-4'>Welcome</h2>
      <img src={cat} />
    </div>
  )
}
