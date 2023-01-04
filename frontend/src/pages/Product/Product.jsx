import { useState, React } from 'react';
import "./Product.scss"

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)

  const images = [
    "https://media.istockphoto.com/id/1152838910/photo/male-dark-blue-blazer-on-isolated-background.jpg?b=1&s=170667a&w=0&k=20&c=op8HLIk7SWCyUHJAJJ9XrcR0qVYntOBidNRhotcYKMs=",
    "https://media.istockphoto.com/id/1332649527/photo/blank-blazer-mockup-mens-grey-suit-front-view.jpg?b=1&s=170667a&w=0&k=20&c=_jFSNrfL7DflmIq0oT8eFsucxgHvuGgbUVyMgDeOiYk="
  ]

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt='' onClick={e => setSelectedImg(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className='right'></div>
    </div>
  )
}

export default Product