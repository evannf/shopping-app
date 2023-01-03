import React from 'react';
import './Featured.scss';
import Card from '../Card/Card';

function Featured({type}) {

    const data = [
        {
            id: 1,
            img: 'https://media.istockphoto.com/id/1152838910/photo/male-dark-blue-blazer-on-isolated-background.jpg?b=1&s=170667a&w=0&k=20&c=op8HLIk7SWCyUHJAJJ9XrcR0qVYntOBidNRhotcYKMs=',
            img2: 'https://media.istockphoto.com/id/1332649527/photo/blank-blazer-mockup-mens-grey-suit-front-view.jpg?b=1&s=170667a&w=0&k=20&c=_jFSNrfL7DflmIq0oT8eFsucxgHvuGgbUVyMgDeOiYk=',
            title: "Men's Blazer",
            isNew: true,
            oldPrice: 35,
            price: 27
            
        },
        {
            id: 2,
            img: 'https://media.istockphoto.com/id/1219378994/photo/men-shirt-isolated-on-white-background-top-view.jpg?s=612x612&w=0&k=20&c=LmgnNUXRWmfXrZs4rlYfsdSKbfkO5oz4Gs0AZun2OtI=',
            img2:'https://media.istockphoto.com/id/1175649269/photo/shirt-or-fashionable-men-shirt.jpg?s=612x612&w=0&k=20&c=5zng1OmyeaJo45rXnS3x-rb1GjwVlCPTyQX0wfG1nPw=',
            title: 'Collared Plaid Shirt',
            isNew: true,
            oldPrice: 18,
            price: 14
        },
        {
            id: 3,
            img: 'https://media.istockphoto.com/id/917648936/photo/necktie.jpg?s=612x612&w=0&k=20&c=cwmSkmkchc7MuBUsvw97Ltj1lm1uc2sSMV8yi2Q9y0o=',
            img2: 'https://media.istockphoto.com/id/917690766/photo/necktie.jpg?s=612x612&w=0&k=20&c=8z7I7In0I0dofI2p4b-k1jqjXSeSksw3UnJpcfndKJM=',
            title: 'Basic Tie',
            isNew: false,
            oldPrice: 8,
            price: 5
        },
        {
            id: 4,
            img: 'https://media.istockphoto.com/id/172417586/photo/elegant-black-leather-shoes.jpg?s=612x612&w=0&k=20&c=c_tTljwbu2m0AGxwb27NxCgG0Y2Cv-C4v8q6V36RYbw=',
            img2:'https://media.istockphoto.com/id/475612125/photo/male-shoes-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=T04_zNnrS_F3ANViIKfdFA2AJbf2Kb9qeK9_AHX3-y0=',
            title: 'Wingtip Shoes',
            isNew: false,
            oldPrice: 45,
            price: 30
        },
    ]

  return (
    <div className='featured'>
        <div className='top'>
            <h1>{type} Items</h1>
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