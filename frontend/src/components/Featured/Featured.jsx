import "./Featured.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const Featured = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='featured'>
      <div className='top'>
        <h1>{type} Items</h1>
        <p>
          Check out these new and {type} items from some of our favorite partners.
        </p>
      </div>
      <div className='bottom'>
        {error
          ? "Something went wrong..."
          : !data
          ? "No data found"
          : loading
          ? "Loading..."
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Featured;
