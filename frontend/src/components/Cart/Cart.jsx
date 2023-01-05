import React from 'react';
import './Cart.scss';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://media.istockphoto.com/id/1152838910/photo/male-dark-blue-blazer-on-isolated-background.jpg?b=1&s=170667a&w=0&k=20&c=op8HLIk7SWCyUHJAJJ9XrcR0qVYntOBidNRhotcYKMs=',
            img2: 'https://media.istockphoto.com/id/1332649527/photo/blank-blazer-mockup-mens-grey-suit-front-view.jpg?b=1&s=170667a&w=0&k=20&c=_jFSNrfL7DflmIq0oT8eFsucxgHvuGgbUVyMgDeOiYk=',
            title: "Men's Blazer",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ante ut varius vulputate. Vivamus ante dolor, tempus a elit vel, lacinia ornare du Duis sagittis dui vitae enim finibus tincidunt. In facilisis ex ut erat imperdiet, in volutpat lacus cursusi.',
            isNew: true,
            oldPrice: 35,
            price: 27
            
        },
        {
            id: 2,
            img: 'https://media.istockphoto.com/id/1219378994/photo/men-shirt-isolated-on-white-background-top-view.jpg?s=612x612&w=0&k=20&c=LmgnNUXRWmfXrZs4rlYfsdSKbfkO5oz4Gs0AZun2OtI=',
            img2:'https://media.istockphoto.com/id/1175649269/photo/shirt-or-fashionable-men-shirt.jpg?s=612x612&w=0&k=20&c=5zng1OmyeaJo45rXnS3x-rb1GjwVlCPTyQX0wfG1nPw=',
            title: 'Collared Plaid Shirt',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ante ut varius vulputate. Vivamus ante dolor, tempus a elit vel, lacinia ornare du Duis sagittis dui vitae enim finibus tincidunt. In facilisis ex ut erat imperdiet, in volutpat lacus cursusi.',
            isNew: true,
            oldPrice: 18,
            price: 14
        }
    ]

  return (
    <div className='cart'>
        <h1>Your Cart:</h1>
        {data.map((item) => (
            <div className='item' key={item.id}>
                <img src={item.img} alt='' />
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className='price'>1 x ${item.price}</div> 
                </div>
                <HighlightOffOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className='total'>
            <span>Subtotal:</span>
            <span>$123</span>
        </div>
        <button>Checkout</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart