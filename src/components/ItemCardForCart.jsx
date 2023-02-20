import React from 'react'
import Image1 from '../assets/itemTest.jpg'

const ItemCardForCart = ({ item }) => {
  return (
    <div className='card my-2'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={Image1} className='img-fluid rounded-start' alt='itemImage' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{`${item.itemInCart.name}`}</h5>
            <h5 className='card-title'>Quantity</h5>
            <p className='card-text'>{`${item.quantityInCart}`}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ItemCardForCart
