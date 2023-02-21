import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const LogOut = () => {
  const { logout } = useContext(AuthContext)
  return (
    <div className='px-2 whiteText menuItem' onClick={logout}>LogOut</div>
  )
}

export default LogOut
