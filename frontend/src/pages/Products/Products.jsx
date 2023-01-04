import React from 'react'

const Products = () => {
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Categories</h2>
          <div className='inputItem'>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor='1'>Shirts</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id="2" value={2} />
            <label htmlFor='2'>Jackets</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id="3" value={3} />
            <label htmlFor='3'>Pants</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by Price</h2>
          <div className='inputItem'>
            <span>$0</span>
            <input type='range' min={0} max={500} />
            <span>$500</span>
          </div>

        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor='asc'> Price (Lowest First) </label>
          </div>
          <div className='inputItem'>
            <input type="radio" id="desc" value="desc" name="price" />
            <label htmlFor='desc'> Price (Highest First) </label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className='catImg' src='https://media.istockphoto.com/id/1214667734/photo/looking-directly-up-at-the-abstract-and-modern-skyline-of-the-financial-district-in-central.jpg?s=612x612&w=0&k=20&c=XGN4aga3Z3D8syHOOapKfD5K61-xqQT5OCJk-Sr5boc=' alt='products header' />
      </div>
    </div>
  )
}

export default Products