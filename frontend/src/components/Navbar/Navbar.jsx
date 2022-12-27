import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img className='flags' src='/images/flags.png' alt=''/>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className='center'></div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default Navbar