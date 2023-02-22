// import React, { useContext } from 'react'
// import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const PostItem = () => {
  const navigate = useNavigate()
  // const { isAuth, user } = useContext(AuthContext)

  const sendData = (data) => {
    console.log(data)
    const token = window.localStorage.getItem('token')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify(data)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch('http://localhost:3000/items', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.message === 'Item created successfully') {
          navigate('/')
        }
      })
      .catch(error => console.log('error', error))
  }

  const { register, handleSubmit } = useForm()

  return (
    <div className='container'>
      <h1 className='my-3'>Post Item</h1>
      <form className='d-block' onSubmit={handleSubmit(sendData)}>
        <label className='form-label' htmlFor='productNameInput'>Product Name</label>
        <input {...register('product_name')} className='form-control' type='text' placeholder='Product Name' id='productNameInput' required />
        <label className='form-label' htmlFor='descriptionInput'>Description</label>
        <input {...register('description')} className='form-control' type='text' placeholder='Product Description' id='descriptionInput' required />
        <label className='form-label' htmlFor='priceInput'>Price</label>
        <input {...register('price')} className='form-control' type='text' placeholder='Product Price' id='priceInput' required />
        <label className='form-label' htmlFor='categorySelect'>Category</label>
        <select {...register('category')} className='form-select' id='categorySelect' required>
          <option value=''>Choose...</option>
          <option value='Books'>Books</option>
          <option value='Movies'>Movies</option>
          <option value='Music'>Music</option>
          <option value='Games'>Games</option>
          <option value='Electronics'>Electronics</option>
          <option value='Computers'>Computers</option>
          <option value='Home'>Home</option>
          <option value='Garden'>Garden</option>
          <option value='Tools'>Tools</option>
          <option value='Grocery'>Grocery</option>
          <option value='Health'>Health</option>
          <option value='Beauty'>Beauty</option>
          <option value='Toys'>Toys</option>
          <option value='Kids'>Kids</option>
          <option value='Baby'>Baby</option>
          <option value='Clothing'>Clothing</option>
          <option value='Shoes'>Shoes</option>
          <option value='Jewelery'>Jewelery</option>
          <option value='Sports'>Sports</option>
          <option value='Outdoors'>Outdoors</option>
          <option value='Automotive'>Automotive</option>
          <option value='Industrial'>Industrial</option>
        </select>
        <label className='form-label' htmlFor='brandInput'>Brand</label>
        <input {...register('brand')} className='form-control' type='text' placeholder='Product Brand' id='brandInput' required />
        <label className='form-label' htmlFor='skuInput'>Product SKU</label>
        <input {...register('sku')} className='form-control' type='text' placeholder='Product SKU' id='skuInput' required />
        <label className='form-label' htmlFor='imageInput'>Image URL</label>
        <input {...register('image')} className='form-control' type='text' placeholder='Product Image URL' id='imageInput' required />
        <button className='btn btn-success mt-3' type='submit'>Post</button>
      </form>
    </div>
  )
}

export default PostItem
