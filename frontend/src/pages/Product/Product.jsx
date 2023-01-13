import { useState , React } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantitiy, setQuantitiy] = useState(1);

  const {data, loading, error} = useFetch(
    `/products/${id}?populate=*`
    );


  return (
    <div className='product'>
    {loading ? (
      "Loading..."
    ) : (
      <>
      <div className='left'>
        <div className='images'>
          <img 
            src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} 
            alt='' 
            onClick={e => setSelectedImg("img")} />
          <img 
            src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} 
            alt='' 
            onClick={e => setSelectedImg("img2")} />
        </div>
        <div className='mainImg'>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt='' />
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
      </>)}
    </div>
  )
}

export default Product