
import ListProducts from '../components/ListOfProducts'

const ResultOfSearch = ({ items }) => {
  return (
    <div>
      <ListProducts items={items} />
    </div>
  )
}

export default ResultOfSearch
