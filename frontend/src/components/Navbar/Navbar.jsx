import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import './navbar.css'
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
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
            <Link to="/products/1"> Men </Link>
          </div>
          <div className='item'>
            <Link to="/products/2"> Women </Link>
          </div>
          <div className='item'>
            <Link to="/products/3"> Accessories </Link>
          </div>
        </div>


        <div className='center'>
          <Link to='/'> STORE NAME/LOGO HERE </Link>
        </div>


        <div className='right'>
          <div className='item'>
            <Link to='/'> Homepage </Link>
          </div>
          <div className='item'>
            <Link to='/'> About </Link>
          </div>
          <div className='item'>
            <Link to='/'> Contact Us </Link>
          </div>
          <div className='item'>
            <Link to='/'> Stores </Link>
          </div>
          <div className='icons'>
            <SearchIcon />
            <AccountBoxIcon />
            <FavoriteIcon />
            <div className='cartIcon'>
              <ShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar