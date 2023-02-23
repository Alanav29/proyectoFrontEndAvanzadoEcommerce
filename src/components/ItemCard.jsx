// Terminar de estilizar
import '../styles/ItemCardStyles.css'
import { Link, useNavigate } from 'react-router-dom'

const ItemCard = ({ item }) => {
  const navigate = useNavigate()
  const singleAddToCart = () => { navigate(`/product/${item.id}`) }

  return (
    <div className='card m-3 itemCard'>
      <img src={item.image} className='card-img-top' alt='itemIMG' />
      <div className='card-body'>
        <Link to={`/product/${item.id}`}><h5 className='card-title'>{item.product_name}</h5></Link>
        <p className='card-text mb-1'>Brand</p>
        <p className='card-text'>{item.brand}</p>
        <p className='card-text'>${item.price}</p>
        <button onClick={singleAddToCart} className='btn btn-primary'>
          More Info
        </button>
      </div>
    </div>

  )
}

export default ItemCard
