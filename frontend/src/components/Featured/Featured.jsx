import React from 'react';
import './Featured.scss';
import Card from '../Card/Card';

function Featured({type}) {

    const data = [
        {
            id: 1,
            img: 'https://images.muffiz.com/rx/1000x1250,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/19397805/428cad4e4ba5bb8b6b540cfe4706546d?_a=AAClqGX',
            img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuSD4AiQpyh35mw-ObAZKYuEh-6MMEg5hzQ&usqp=CAU',
            title: 'The Dawgz T-Shit',
            isNew: true,
            oldPrice: 20,
            price: 16
            
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoY3_gc19fokYZmp3eSSPmulE_VYp91bMRQ&usqp=CAU',
            title: 'Slam Dunk T-Shirt',
            isNew: true,
            oldPrice: 20,
            price: 16
        },
        {
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU32r5UnjworiCAsN5J-uh--KfSTkoJMG9w&usqp=CAU',
            img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpez1bTLOWa9rajGVwbrL8tkugh_D0viBtA&usqp=CAU',
            title: 'Long Sleeve T-Shirt (white)',
            isNew: false,
            oldPrice: 25,
            price: 19
        },
        {
            id: 4,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBz3TBh3NvHIWD9oanWlojzMGNbg2tRseqHw&usqp=CAU',
            title: 'Shane Gillis Can-Coozie',
            isNew: false,
            oldPrice: 8,
            price: 5
        },
    ]

  return (
    <div className='featured'>
        <div className='top'>
            <h1>Featured {type}</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel arcu metus. Etiam nulla mauris, semper at risus vitae, tempor porta felis.
            </p>
        </div>
        <div className='bottom'>
        {data.map(item => (
            <Card item={ item } key={ item.id }/>
        ))}
        </div>
    </div>
  )
}

export default Featured