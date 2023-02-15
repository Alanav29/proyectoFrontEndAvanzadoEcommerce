
import Carousel from '../components/Carousel'
import HomeProducts from '../components/HomeProducts'

const Home = ({ items }) => {
  return (
    <div>
      <Carousel />
      <HomeProducts items={items} />
    </div>
  )
}

export default Home
