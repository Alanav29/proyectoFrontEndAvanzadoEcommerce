import Image1 from '../assets/serie1.jpg'
import Image2 from '../assets/serie2.jpg'
import Image3 from '../assets/serie3.jpg'
import '../styles/CarouselStyles.css'

// Terminar funcionalidad

const Carousel = () => {
  return (
    <div className='container-fluid d-flex justify-content-center my-4'>
      <div className='Carousel'>
        <img id='carousel1' className='CarouselItem Active' src={Image1} />
        <img id='carousel2' className='CarouselItem' src={Image2} />
        <img id='carousel3' className='CarouselItem' src={Image3} />
      </div>
    </div>

  )
}

export default Carousel
