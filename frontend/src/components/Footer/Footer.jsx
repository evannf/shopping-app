import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel arcu metus. Etiam nulla mauris, semper at risus vitae, tempor porta felis. Nam ac blandit purus, ac egestas orci. In pretium ex quis varius faucibus. Vivamus semper cursus malesuada. Nunc scelerisque urna leo, id consectetur nibh porttitor at.</span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel arcu metus. Etiam nulla mauris, semper at risus vitae, tempor porta felis. Nam ac blandit purus, ac egestas orci. In pretium ex quis varius faucibus. Vivamus semper cursus malesuada. Nunc scelerisque urna leo, id consectetur nibh porttitor at.</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
            <span className='logo'>MSSP</span>
            <span className='copyright'>
              © Copyright 2023. All Rights Reserved
            </span>
        </div>
        <div className='right'>
            <img src='/images/stripe.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer