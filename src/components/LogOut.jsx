import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const LogOut = ({ eraseCart, cart }) => {
  const { logout, user } = useContext(AuthContext)
  const completeLogout = () => {
    if (cart.length > 0) { window.localStorage.setItem(`${user.id}`, JSON.stringify(cart)) }
    logout()
    eraseCart()
  }

  return (
    <div className='px-2 whiteText menuItem' onClick={completeLogout}>LogOut</div>
  )
}

export default LogOut
