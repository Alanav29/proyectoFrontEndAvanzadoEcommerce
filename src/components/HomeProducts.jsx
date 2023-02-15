import ItemCard from './ItemCard'

// Terminar de estilizar

const HomeProducts = ({ items }) => {
  return (
    <div className='container d-flex flex-wrap justify-content-center'>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default HomeProducts
