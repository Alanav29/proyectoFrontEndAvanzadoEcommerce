
import Carousel from '../components/Carousel'
import ListOfProducts from '../components/ListOfProducts'

const Home = ({ items, onAction }) => {
  return (
    <div>
      <Carousel />
      <ListOfProducts items={items} onAction={onAction} />
    </div>
  )
}

export default Home
