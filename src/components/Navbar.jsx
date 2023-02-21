import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/NavbarStyles.css'
import LogOut from './LogOut'

// terminar Links
// estilizar

const Navbar = ({ items, onAction, cart }) => {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const searchItems = (data) => {
    if (data.itemForSearch !== '') {
      const resultsOfSearch = items.filter((item) => {
        let results
        const itemsForSearchInLowerCase = data.itemForSearch.toLowerCase()
        if (item.name.toLowerCase().includes(itemsForSearchInLowerCase)) {
          results = item
        }
        return results
      })
      onAction(resultsOfSearch)
      console.log(data)
      navigate('/results')
    }
  }

  return (
    <nav className='navbar'>
      <div className='container-fluid justify-content-center'>
        <Link to='/'><div className='navbar-brand whiteText'>Store One</div></Link>
        <form className='d-flex' role='search' onSubmit={handleSubmit(searchItems)}>
          <input {...register('itemForSearch')} className='form-control' type='search' placeholder='Search' aria-label='Search' />
          <button className='btn d-flex align-items-center whiteText' type='submit'>
            <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </button>
        </form>
        <Link to='/signIn'><div className='px-2 whiteText menuItem'>Sign in</div></Link>
        <Link to='/signUp'><div className='px-2 whiteText menuItem'>Sign up</div></Link>
        <LogOut />
        <Link to='/postItem'><div className='px-2 whiteText menuItem'>Post item</div></Link>
        <Link className='d-flex mx-3' to='/cart'>
          <div className='whiteText me-1'>{`${cart.length}`}</div>
          <span className='whiteText menuItem'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-cart-fill' viewBox='0 0 16 16'>
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
          </span>
        </Link>
      </div>
    </nav>

  )
}

export default Navbar
