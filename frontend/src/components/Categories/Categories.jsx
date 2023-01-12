import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                <img src='https://media.istockphoto.com/id/515306510/photo/making-decision-on-the-move.jpg?s=612x612&w=0&k=20&c=2bKoyPS-Yfo8VymP16mLdfB3FIAsvhozT1crLqelFFQ=' alt='Men'/>
                <Link className='link' to='/products/1'>
                    <button>
                    Men
                    </button>
                </Link>
            </div>
            <div className='row'>
                <img src='https://media.istockphoto.com/id/1297832789/photo/successful-businesswoman.jpg?s=612x612&w=0&k=20&c=L4BF20miGc6RGB01qlqCWdmjvYSRTuIQkJcnGh-HfSw=' alt='Women'/>
                <Link className='link' to='/products/2'>
                    <button>
                    Women
                    </button>
                </Link>
            </div>
        </div>
        <div className='col'>
            <div className='row'>
                <img src='https://media.istockphoto.com/id/689777730/photo/folded-mens-shirts.jpg?s=612x612&w=0&k=20&c=KzHMCBxqUC_aF7zCoZtb5TwDypl6zmgwPyOZ2u1u1sY=' alt='sale'/>
                <Link className='link' to='/products/5'>
                    <button>
                    On Sale
                    </button>
                </Link>
            </div>
        </div>
        <div className='col-l'>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <img src='https://media.istockphoto.com/id/1014655158/photo/shoes-concept-woman-and-men-shoes.jpg?s=612x612&w=0&k=20&c=4Qucr5xNArJ7dxeGPfL4EyJc12YmLaxNTPK1Z0MoYwc=' alt=''/>
                        <Link className='link' to='/products/4'>
                            <button>
                            Shoes
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='row'>
                        <img src='https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE=' alt=''/>
                        <Link className='link' to='/products/3'>
                            <button>
                            Accessories
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row'>
                <img className='shopAll' src='https://media.istockphoto.com/id/800287296/photo/putting-their-best-foot-forward.jpg?s=612x612&w=0&k=20&c=cAbElSqexAummycmI_CEO1Hc1aPceiCxrW4JT0L7J9o=' alt=''/>
                <Link className='link' to='/products'>
                    <button>
                    Shop All
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories