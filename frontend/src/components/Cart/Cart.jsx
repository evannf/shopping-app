import React from 'react';
import './Cart.scss';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useSelector } from "react-redux";

const Cart = () => {
    const products = useSelector(state=>state.cart.products)

  return (
    <div className='cart'>
        <h1>Your Cart:</h1>
        {products.map((item) => (
            <div className='item' key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt='' />
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className='price'>1 x ${item.price}</div> 
                </div>
                <HighlightOffOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className='total'>
            <span>Subtotal:</span>
            <span>$123</span>
        </div>
        <button>Checkout</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart