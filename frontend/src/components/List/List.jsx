import React from "react";
import "./List.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${
      subCats.length > 0
        ? `&[filters][sub_categories][id][$eq]=${subCats.join(",")}`
        : ""
    }&[filters][price][$lte]=${maxPrice}`
  );

  return (
    <div className='list'>
      {loading
        ? "Loading..."
        : data && data.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
