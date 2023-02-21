import React from 'react'
import ItemCardForCart from '../components/ItemCardForCart'

const Cart = ({ cart }) => {
  let cartComponent
  if (cart.length) {
    cartComponent = cart.map((item) => (
      <ItemCardForCart key={`cartItem${item.productId}`} item={item} />
    ))
  } else {
    cartComponent = <h1>Vacio</h1>
  }

  return (
    <div className='container'>
      {cartComponent}
    </div>
  )
}

export default Cart
