import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../styles/NavbarStyles.css'

// terminar Links
// estilizar

const Navbar = ({ items }) => {
  const { register, handleSubmit } = useForm()

  const searchItems = (data) => {
    const resultsOfSearch = items.filter((item) => {
      let results
      const itemsForSearchInLowerCase = data.itemForSearch.toLowerCase()
      if (item.name.toLowerCase().includes(itemsForSearchInLowerCase)) {
        results = item
      }
      return results
    })
    console.log(data)
    console.log(resultsOfSearch)
  }

  return (
    <nav className='navbar'>
      <div className='container-fluid justify-content-center'>
        <Link to='/'><div className='navbar-brand whiteText'>Store One</div></Link>
        <form className='d-flex' role='search' onSubmit={handleSubmit(searchItems)}>
          <input {...register('itemForSearch')} className='form-control' type='search' placeholder='Search' aria-label='Search' />
          <button className='btn d-flex align-items-center whiteText' type='submit'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
              <path d='M11.742 10.3445 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </button>
        </form>
        <a className='px-2 whiteText'>Sign in</a>
        <a className='px-2 whiteText'>Sign up</a>
        <span className='mx-3 whiteText'>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-cart-fill' viewBox='0 0 16 16'>
            <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
          </svg>
        </span>
      </div>
    </nav>

  )
}

export default Navbar
