
import '../styles/ItemCardForCartStyles.css'
import Option from '../utils/SelectOption'

const ItemCardForCart = ({ item, onAction }) => {
  const itemUnits = []

  const setUnits = (units) => {
    for (let i = 1; i <= units; i++) {
      itemUnits.push(<Option key={i} unit={parseInt(i)} />)
    }
  }

  setUnits(5)

  const onSelect = (data) => {
    onAction(item.itemInCart, item.productId, parseInt(data))
  }

  return (
    <div className='card my-2'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={item.itemInCart.image} className='img-fluid rounded-start imageCart' alt='itemImage' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{`${item.itemInCart.product_name}`}</h5>
            <div className='quantityInput my-3'>
              <select onChange={e => onSelect(parseInt(e.target.value))} className='quantitySelect p-2' id={`quantityItemInCart${item.id}`}>
                <option value={`${item.quantityInCart}`} defaultValue>{`${item.quantityInCart}`}</option>
                {itemUnits}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ItemCardForCart
