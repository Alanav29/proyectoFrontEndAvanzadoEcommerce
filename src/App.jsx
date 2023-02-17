
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ItemDetail from './pages/ItemDetail'
import Image1 from './assets/itemTest.jpg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App () {
  const [items] = useState([
    {
      id: 0,
      img: Image1,
      name: 'Eames Chair',
      description: 'Minimalist design chair',
      price: 100,
      quantity: 10
    },
    {
      id: 1,
      img: Image1,
      name: 'Eames 2',
      description: 'Minimalist design chair',
      price: 200,
      quantity: 10
    }
  ])

  const cart = []

  const addToCart = (item, itemId, quantityInCart) => {
    const itemForCart = { itemInCart: item, productId: itemId, quantityInCart }
    cart.push(itemForCart)
    console.log(cart)
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home items={items} />} />
        <Route path='/product/:idProduct' element={<ItemDetail onAction={addToCart} items={items} />} />
      </Routes>
    </Router>
  )
}

export default App
