import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const PostItem = () => {
  const navigate = useNavigate()
  const { isAuth, user } = useContext(AuthContext)

  const myHeaders = new Headers()
  myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0MzIxMTM5LWVkZTYtNDcyNy05MzUzLTg5NmYxMzA3ZmNmYyIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY3NzA0MzkxNn0.Rw1L-M0HFBHN_ccNURdYQH5Pj_g0tJ_08K7aC-u7rqs')
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    product_name: 'Awesome Granite Bacon 2',
    description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: 962,
    category: 'Kids',
    brand: 'Osinski - Prosacco',
    sku: 'e9cbfac1-301a-42c3-b94a-711a39dc7450',
    image: 'https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg'
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  const sendData = () => {
    fetch('http://localhost:3000/items', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.message === 'Item created successfully') {
          navigate('/')
        }
      })
      .catch(error => console.log('error', error))
  }

  let component

  if (isAuth && user.role === 'ADMIN') {
    component = <button onClick={sendData}>Post</button>
  }

  return (
    <div>
      <h1>Post Item</h1>
      {component}
    </div>
  )
}

export default PostItem
