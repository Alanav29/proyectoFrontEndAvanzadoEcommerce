
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthProvider } from '@/context/AuthContext'
import Index from './routes/Index'
import { getAllItems } from './services/itemServices'

function App () {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const result = await getAllItems()
        if (result.status === 200) {
          setItems(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error al procesar los Items: ', error.message)
      }
    }
    fetchItemsData()
  }, [])

  const [cart, setCart] = useState([])

  const addToCart = (item, itemId, quantityInCart) => {
    const itemToAddId = itemId
    const findItemInCart = cart.find(cartItem => cartItem.productId === itemToAddId)
    if (findItemInCart) {
      findItemInCart.quantityInCart = quantityInCart
      console.log(cart)
    } else {
      const itemForCart = { itemInCart: item, productId: itemId, quantityInCart }
      setCart(cart => [...cart, itemForCart])
      // console.log(cart)
    }
  }

  const eraseCart = () => { setCart([]) }

  const [resultsOfNavbarSearch, setResultsOfNavbarSearch] = useState([])

  const addToResultsOfNavbarSearch = (itemsResult) => {
    console.log(resultsOfNavbarSearch)
    setResultsOfNavbarSearch(itemsResult)
  }

  return (
    <Router>
      <AuthProvider>
        <Navbar items={items} eraseCart={eraseCart} onAction={addToResultsOfNavbarSearch} cart={cart} />
        <Index items={items} addToCart={addToCart} resultsOfNavbarSearch={resultsOfNavbarSearch} cart={cart} />
      </AuthProvider>
    </Router>
  )
}

export default App
