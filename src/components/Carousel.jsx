import Image1 from '../assets/banner1.jpg'
import Image2 from '../assets/banner2.jpg'
import Image3 from '../assets/banner3.jpg'
import '../styles/CarouselStyles.css'

const Carousel = () => {
  return (
    <div className='d-flex justify-content-center my-4'>
      <div id='carouselExampleInterval' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active' data-bs-interval='{500}'>
            <img src={Image1} className='d-block' alt='...' />
          </div>
          <div className='carousel-item' data-bs-interval='{500}'>
            <img src={Image2} className='d-block' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={Image3} className='d-block' alt='...' />
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'>
            <span className='visually-hidden'>Previous</span>
          </span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'>
            <span className='visually-hidden'>Next</span>
          </span>
        </button>
      </div>
    </div>

  )
}

export default Carousel
