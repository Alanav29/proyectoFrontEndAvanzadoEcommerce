import ItemCard from './ItemCard'

// Terminar de estilizar

const HomeProducts = ({ items, onAction }) => {
  return (
    <div className='container d-flex flex-wrap justify-content-center'>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onAction={onAction} />
      ))}
    </div>
  )
}

export default HomeProducts
