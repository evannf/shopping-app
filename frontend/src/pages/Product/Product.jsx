import { useState, React } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantitiy, setQuantitiy] = useState(1);

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
      <div className='right'>
        <h1>Title</h1>
        <span className='price'>$35</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ante ut varius vulputate. Vivamus ante dolor, tempus a elit vel, lacinia ornare du Duis sagittis dui vitae enim finibus tincidunt. In facilisis ex ut erat imperdiet, in volutpat lacus cursusi. Vivamus vel maximus felis. Nulla mattis egestas mollis.
        </p>
        <div className='quantity'>
          <button onClick={() => setQuantitiy((prev) => prev === 1 ? 1 : prev-1)}>-</button>
          {quantitiy}
          <button onClick={() => setQuantitiy((prev) => prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> Add to Cart
        </button>
        <div className='link'>
          <div className='item'>
            <FavoriteBorderIcon /> Add to Wishlist
          </div>
          <div className='item'>
            <BalanceIcon /> Compare
          </div>
        </div>
        <div className='info'>
          <span>Vendor: LTP Threads</span>
          <span>Product Type: Men's Blazer</span>
          <span>Tags: Men, Blazer, Jacket, Top</span>
        </div>
        <hr />
        <div className='info'>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product