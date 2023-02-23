import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const LogOut = ({ eraseCart }) => {
  const { logout } = useContext(AuthContext)
  const completeLogout = () => {
    logout()
    eraseCart()
  }

  return (
    <div className='px-2 whiteText menuItem' onClick={completeLogout}>LogOut</div>
  )
}

export default LogOut
