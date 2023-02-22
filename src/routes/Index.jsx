
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
  const { isAuth, user } = useContext(AuthContext)
  let userSessionComponent
  if (isAuth) {
    console.log(user)
    if (user.role === 'ADMIN') {
      userSessionComponent = <Route path='/postItem' element={<PostItem />} />
    } else { userSessionComponent = <></> }
  } else {
    userSessionComponent = <><Route path='/signIn' element={<SignIn />} /><Route path='/signUp' element={<SignUp />} /></>
  }

  return (
    <Routes>
      <Route path='/' element={<Home onAction={addToCart} items={items} />} />
      <Route path='/product/:idProduct' element={<ItemDetail onAction={addToCart} />} />
      <Route path='/results' element={<ResultsOfSearch items={resultsOfNavbarSearch} />} />
      {userSessionComponent}
      <Route path='/cart' element={<Cart cart={cart} />} />
    </Routes>
  )
}

export default Index
