
import Home from '../pages/Home'
import ItemDetail from '../pages/ItemDetail'
import ResultsOfSearch from '../pages/ResultOfSearch'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Cart from '../pages/Cart'
import PostItem from '../pages/PostItem'
import { AuthContext } from '@/context/AuthContext'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'

const Index = ({ addToCart, items, cart, resultsOfNavbarSearch }) => {
  const { isAuth } = useContext(AuthContext)
  if (isAuth) { console.log(isAuth) } else { console.log('no autorizado') }

  return (
    <Routes>
      <Route path='/' element={<Home onAction={addToCart} items={items} />} />
      <Route path='/product/:idProduct' element={<ItemDetail onAction={addToCart} items={items} />} />
      <Route path='/results' element={<ResultsOfSearch items={resultsOfNavbarSearch} />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/postItem' element={<PostItem />} />
      <Route path='/cart' element={<Cart cart={cart} />} />
    </Routes>
  )
}

export default Index
