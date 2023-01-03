import React, { useState } from 'react';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import './Slider.scss';

const Slider = () => {


    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);

    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);

    };

    const data = [
        'https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY=','https://media.istockphoto.com/id/1439676462/photo/portrait-of-a-smiling-businessman-standing-in-his-office-with-arms-crossed.jpg?b=1&s=170667a&w=0&k=20&c=_0rcSGxGUa2rAs9uWi7m-nP1z3iYruRbSnVLLx1upvs=',
        'https://media.istockphoto.com/id/1396659808/photo/group-of-young-happy-successful-business-team-people-pointing-finger-up-and-smiling.jpg?s=612x612&w=0&k=20&c=x4uFh_8giCdvu0JrVQwSm843bgXW7ZfN5OhQezSJ_FQ=',

    ];

    
  return (
    <div className='slider'>
        <div className='container' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt=''/>
            <img src={data[1]} alt=''/>
            <img src={data[2]} alt=''/>
        </div>
        <div className='icons'>
            <div className='icon' onClick={prevSlide}>
            <ArrowBackIosRoundedIcon />
            </div>
            <div className='icon' onClick={nextSlide}>
            <ArrowForwardIosRoundedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider