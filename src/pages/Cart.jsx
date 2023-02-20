import React from 'react'
import ItemCardForCart from '../components/ItemCardForCart'

const Cart = ({ cart }) => {
  return (
    <div className='container'>
      <ItemCardForCart item={cart[0]} />
    </div>
  )
}

export default Cart
