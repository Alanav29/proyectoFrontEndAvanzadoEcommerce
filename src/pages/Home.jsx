
import Carousel from '../components/Carousel'
import HomeProducts from '../components/ListOfProducts'

const Home = ({ items }) => {
  return (
    <div>
      <Carousel />
      <HomeProducts items={items} />
    </div>
  )
}

export default Home
