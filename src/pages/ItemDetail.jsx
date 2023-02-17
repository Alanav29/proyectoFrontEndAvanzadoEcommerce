import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ItemDetailStyles.css'
import Option from '../utils/SelectOption'
import { useForm } from 'react-hook-form'

const ItemDetail = ({ items, onAction }) => {
  const { idProduct } = useParams()

  const itemUnits = []

  const setUnits = (units) => {
    for (let i = 1; i <= units; i++) {
      itemUnits.push(<Option key={i} unit={i} />)
    }
  }

  setUnits(items[idProduct].quantity)

  const { register, handleSubmit } = useForm()

  const onSelect = (data) => {
    onAction(items[idProduct], items[idProduct].id, data.selectedQuantity)
    console.log(data)
  }

  return (
    <div className='container itemDetail'>
      <div className='m-0 p-0 mt-4 row'>
        <div className='col-12 col-sm-6'>
          <img src={items[idProduct].img} className='itemDetailIMG' alt='item' />
        </div>
        <div className='col-12 col-sm-6 p-4'>
          <h1>{items[idProduct].name}</h1>
          <h3 className='text-secondary'>$ {items[idProduct].price} MXN</h3>
          <p>{items[idProduct].description}</p>
          <form onSubmit={handleSubmit(onSelect)}>
            <div className='quantityInput my-3'>
              <select {...register('selectedQuantity')} className='quantitySelect p-2' id={`quantityItem${idProduct}`}>
                <option value='0'>Quantity</option>
                {itemUnits}
              </select>
            </div>
            <button type='submit' className='btn btn-success'>Add to cart</button>
          </form>
        </div>
      </div>

    </div>

  )
}

export default ItemDetail
