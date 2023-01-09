import { React } from 'react';
import './Featured.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const Featured = ({ type }) => {

    const {data, loading, error} = useFetch(
        `/products?populate=*`)

  return (
    <div className='featured'>
        <div className='top'>
            <h1>{type} Items</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel arcu metus. Etiam nulla mauris, semper at risus vitae, tempor porta felis.
            </p>
        </div>
        <div className='bottom'>
            {error
                ? "Something went wrong..."
                : loading
                ? "Loading..."
                : data.map((item) => <Card item={item} key={item.id} />)
            }
        </div>
    </div>
  )
}

export default Featured