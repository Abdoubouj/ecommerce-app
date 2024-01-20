import { useEffect, lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsCategory,
  productsCategory,
  productsCategoryStatus,
} from "../../features/productSlice";
const Product = lazy(() => import("../Product/Product"));
// import Product from "../Product/Product";
const ProductsCategory = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(productsCategory);
  const productsStatus = useSelector(productsCategoryStatus);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductsCategory(category));
  }, [category]);
  return (
    <div className="products_list mt-5 max-w-[1300px] mx-auto p-5">
      <div className="head flex items-center gap-10 ps-3 my-3 font-[500]">
        <Link
          to="/"
          className="text-[18px] hover:text-yellow relative before:content-[''] before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-slate-600 before:top-[12px] before:-right-[22px] before:z-10"
        >
          Home
        </Link>
        <h1 className="text-[18px] text-yellow">Products {category}</h1>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-5">
        {productsStatus === "loading" ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            {products.map((product) => (
              <Suspense fallback={<div>Loading...</div>}>
                <Product key={product.id} product={product} />
              </Suspense>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsCategory;
