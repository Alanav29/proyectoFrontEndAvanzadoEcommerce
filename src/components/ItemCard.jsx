// Terminar de estilizar
import '../styles/ItemCardStyles.css'
import { Link } from 'react-router-dom'
import { addToNavBarQuantity } from '../utils/NavbarCartQuantity'

const ItemCard = ({ item }) => {
  const addToCartClick = () => { addToNavBarQuantity(1) }
  return (
    <div className='card m-3 itemCard'>
      <img src={item.img} className='card-img-top' item={item} alt='itemIMG' />
      <div className='card-body'>
        <Link to={`/product/${item.id}`}><h5 className='card-title'>{item.name}</h5></Link>
        <p className='card-text'>SKU {item.id}</p>
        <p className='card-text'>${item.price}</p>
        <div onClick={addToCartClick} className='btn btn-primary d-flex justify-content-center align-items-center'>
          <div className='px-2'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-cart-plus-fill' viewBox='0 0 16 16'>
              <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z' />
            </svg>
          </div>
          <div>Add to cart</div>
        </div>
      </div>
    </div>

  )
}

export default ItemCard
