import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ItemDetailStyles.css'
import Option from '../utils/SelectOption'
import { useForm } from 'react-hook-form'
import { getSingleItem } from '../services/itemServices'

const ItemDetail = ({ onAction }) => {
  const { idProduct } = useParams()
  const [item, setItem] = useState({})
  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const result = await getSingleItem(idProduct)
        if (result.status === 200) {
          setItem(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error al procesar los Items: ', error.message)
      }
    }
    fetchItemData()
  }, [])

  const itemUnits = []

  const setUnits = (units) => {
    for (let i = 1; i <= units; i++) {
      itemUnits.push(<Option key={i} unit={parseInt(i)} />)
    }
  }

  setUnits(5)

  const { register, handleSubmit } = useForm()

  const onSelect = (data) => {
    onAction(item, item.id, parseInt(data.selectedQuantity))
  }

  return (
    <div className='container itemDetail'>
      <div className='m-0 p-0 mt-4 row'>
        <div className='col-12 col-sm-6'>
          <img src={item.image} className='itemDetailIMG' alt='item' />
        </div>
        <div className='col-12 col-sm-6 p-4'>
          <h1>{item.product_name}</h1>
          <h3 className='text-secondary'>$ {item.price} MXN</h3>
          <p>{item.description}</p>
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
