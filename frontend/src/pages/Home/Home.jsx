import React from 'react';
import Featured from '../../components/Featured/Featured';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Featured type='products'/>
      <Featured type='episodes'/>
    </div>
  )
}

export default Home