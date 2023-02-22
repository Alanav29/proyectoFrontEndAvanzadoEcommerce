import React from 'react'
// import Image1 from '../assets/itemTest.jpg'
import '../styles/ItemCardForCartStyles.css'

const ItemCardForCart = ({ item }) => {
  return (
    <div className='card my-2'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={item.itemInCart.image} className='img-fluid rounded-start imageCart' alt='itemImage' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{`${item.itemInCart.product_name}`}</h5>
            <h5 className='card-title'>Quantity</h5>
            <p className='card-text'>{`${item.quantityInCart}`}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ItemCardForCart
