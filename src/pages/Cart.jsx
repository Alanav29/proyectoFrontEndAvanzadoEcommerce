import React from 'react'
import ItemCardForCart from '../components/ItemCardForCart'

const Cart = ({ cart }) => {
  let component
  if (cart.length) {
    component = <ItemCardForCart item={cart[0]} />
  } else {
    component = <h1>Vacio</h1>
  }

  return (
    <div className='container'>
      {component}
    </div>
  )
}

export default Cart
