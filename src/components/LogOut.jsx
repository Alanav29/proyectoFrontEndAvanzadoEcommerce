import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const LogOut = () => {
  const { logout } = useContext(AuthContext)
  return (
    <button onClick={logout}>LogOut</button>
  )
}

export default LogOut
