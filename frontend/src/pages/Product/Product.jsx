import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantitiy, setQuantitiy] = useState(1);

  const { data, loading } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className='product'>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className='left'>
            <div className='images'>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=''
                onClick={setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=''
                onClick={setSelectedImg("img2")}
              />
            </div>
            <div className='mainImg'>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=''
              />
            </div>
          </div>
          <div className='right'>
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>{data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className='quantity'>
              <button
                onClick={() =>
                  setQuantitiy((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantitiy}
              <button onClick={() => setQuantitiy((prev) => prev + 1)}>
                +
              </button>
            </div>
            <button className='add'>
              <AddShoppingCartIcon /> Add to Cart
            </button>
            <div className='link'>
              <div className='item'>
                <FavoriteBorderIcon /> Add to Wishlist
              </div>
              <div className='item'>
                <BalanceIcon /> Compare
              </div>
            </div>
            <div className='info'>
              <span>Vendor: LTP Threads</span>
              <span>Product Type: Men's Blazer</span>
              <span>Tags: Men, Blazer, Jacket, Top</span>
            </div>
            <hr />
            <div className='info'>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
