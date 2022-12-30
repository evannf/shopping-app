import React from 'react';
import './Featured.scss';
import Card from '../Card/Card';

function Featured({type}) {

    const data = [
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9lOjzfDv16M1U3_u-pNkhbrIYsyDsg9cNw&usqp=CAU',
            title: 'The Cast T-Shit (womens)',
            isNew: true,
            oldPrice: 20,
            price: 16
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuSD4AiQpyh35mw-ObAZKYuEh-6MMEg5hzQ&usqp=CAU',
            title: 'The Cast T-Shit (mens)',
            isNew: true,
            oldPrice: 20,
            price: 16
        },
        {
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU32r5UnjworiCAsN5J-uh--KfSTkoJMG9w&usqp=CAU',
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