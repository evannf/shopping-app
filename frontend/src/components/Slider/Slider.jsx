import React from 'react';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

const Slider = () => {

    const data = [
        'https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/8680625/63d47aef-afd0-4b7e-9e6c-9a051c2f33e5.jpg',
        'https://c10.patreonusercontent.com/4/patreon-media/p/campaign/1055672/95e03cc441e144b8b3e2ba547ffb79ad/eyJ3Ijo5NjAsIndlIjoxfQ==/1.jpg?token-time=1672790400&token-hash=kJsZ6RCPFgFVWsR9zm4pWHoIXuKJutXcqT5T-QP3Tv4%3D',
        'https://external-preview.redd.it/57hWLlhL0fUOF0tXZ1nOV-W6R7Yuc1hvqAcMBJx5kTc.jpg?format=pjpg&auto=webp&s=8b3d9b2aadf847e2cd09f100940f69094ffad44f'
    ];


  return (
    <div className='slider'>
        <div className='container'>
            <img src={data[0]} alt=''/>
            <img src={data[1]} alt=''/>
            <img src={data[2]} alt=''/>
        </div>
        <div className='icons'>
            <div className='icon'>
            <ArrowCircleLeftRoundedIcon />
            </div>
            <div className='icon'>
            <ArrowCircleRightRoundedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider