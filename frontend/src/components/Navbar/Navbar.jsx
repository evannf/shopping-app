import { useState, React } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";
import './Navbar.scss'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img className='flags' src='/images/flags.png' alt=''/>
            <ArrowDropDownIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <ArrowDropDownIcon />
          </div>
          <div className='item'>
            <Link className='link' to="/products/1"> Men </Link>
          </div>
          <div className='item'>
            <Link className='link' to="/products/2"> Women </Link>
          </div>
          <div className='item'>
            <Link className='link' to="/products/3"> Accessories </Link>
          </div>
        </div>


        <div className='center'>
          <Link className='link' to='/'> SUCCESS + DRESS </Link>
        </div>


        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'> Homepage </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'> About </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'> Contact Us </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'> Stores </Link>
          </div>
          <div className='icons'>
            <SearchIcon className='icon' />
            <AccountBoxIcon className='icon' />
            <FavoriteIcon className='icon' />
            <div className='cartIcon' onClick={() => setOpen(!open)}>
              <ShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>

      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar