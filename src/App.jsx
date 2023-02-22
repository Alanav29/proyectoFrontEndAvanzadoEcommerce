
// import Home from './pages/Home'
import Navbar from './components/Navbar'
// import ItemDetail from './pages/ItemDetail'
// import Image1 from './assets/itemTest.jpg'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import ResultsOfSearch from './pages/ResultOfSearch'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
// import Cart from './pages/Cart'
// import PostItem from './pages/PostItem'
import { AuthProvider } from '@/context/AuthContext'
import Index from './routes/Index'
import { getAllItems } from './services/itemServices'

function App () {
  const [items, setItems] = useState([])
  useEffect(() => {
    // Traigo mis items de la API y los almaceno en el estado itemsData
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
      findItemInCart.quantityInCart += quantityInCart
      // console.log(cart)
    } else {
      const itemForCart = { itemInCart: item, productId: itemId, quantityInCart }
      setCart(cart => [...cart, itemForCart])
      // console.log(cart)
    }
  }

  const [resultsOfNavbarSearch, setResultsOfNavbarSearch] = useState([])

  const addToResultsOfNavbarSearch = (itemsResult) => {
    console.log(resultsOfNavbarSearch)
    setResultsOfNavbarSearch(itemsResult)
  }

  return (
    <Router>
      <AuthProvider>
        <Navbar items={items} onAction={addToResultsOfNavbarSearch} cart={cart} />
        <Index items={items} addToCart={addToCart} resultsOfNavbarSearch={resultsOfNavbarSearch} cart={cart} />
        {/* <Routes>
          <Route path='/' element={<Home onAction={addToCart} items={items} />} />
          <Route path='/product/:idProduct' element={<ItemDetail onAction={addToCart} items={items} />} />
          <Route path='/results' element={<ResultsOfSearch items={resultsOfNavbarSearch} />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/postItem' element={<PostItem />} />
          <Route path='/cart' element={<Cart cart={cart} />} />
        </Routes> */}
      </AuthProvider>
    </Router>
  )
}

export default App
