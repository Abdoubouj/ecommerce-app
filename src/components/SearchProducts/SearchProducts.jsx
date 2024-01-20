import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchedProducts,
  searchedProducts,
  searechedProductsStatus,
} from "../../features/productSlice";
import Product from "../Product/Product";
const SearchProducts = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(searchedProducts);
  const productsStatus = useSelector(searechedProductsStatus);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSearchedProducts(query));
  }, [query]);
  console.log(productsStatus);
  return (
    <div className="products_list mt-5 max-w-[1300px] mx-auto p-5">
      <div className="head flex items-center gap-5 ps-3 my-3 font-[500]">
        <Link to="/" className="text-[18px] hover:text-yellow">Home</Link>
        <h1 className="text-[18px] text-yellow">
          Search Products By Query -{query}-
        </h1>
      </div>
        <div className="flex flex-wrap justify-start items-center gap-5">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
    </div>
  );
};

export default SearchProducts;
