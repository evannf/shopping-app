import React from 'react';
import Categories from '../../components/Categories/Categories';
import Featured from '../../components/Featured/Featured';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Featured type='Featured'/>
      <Categories />
      <Featured type='Most Popular'/>
    </div>
  )
}

export default Home