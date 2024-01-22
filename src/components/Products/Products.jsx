import { Suspense, lazy, useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux";
import { error, fetchProducts, products, status } from '../../features/productSlice';
import slider from "../../assets/slider.png"
import { Link } from 'react-router-dom';
const Product = lazy(()=>import("../Product/Product"));
// import Product from '../Product/Product';
const Products = () => {
    const dispatch = useDispatch();
    const productsList = useSelector(products);
    const products_status = useSelector(status);
    const products_error = useSelector(error);
    useEffect(()=>{
      dispatch(fetchProducts())
    },[dispatch]);
  return (
    <div className='products_wrapper mb-5'>
      <Link to="/products/2" className='max-w-[1000px] mt-10 block mx-auto'>
      <img src={slider}  alt="" />
      </Link>
       {products_error !==null && <h1>{products_error}</h1>}
       {products_status === 'loading' ? <h1>loading</h1> : (
        <div className="products_list mt-5 max-w-[1300px] mx-auto p-5">
          <h1 className='ps-3 my-8 font-bold text-[30px] inline-block relative before:absolute before:content[""] before:w-[30%] before:h-[5px] before:bg-yellow before:rounded-xl before:bottom-0'>All Products</h1>
          <div className="flex flex-wrap justify-start items-center gap-5">
            {productsList.map((product)=>(
               <Suspense key={product?.id} fallback={<div>Loading...</div>}>
                 <Product product={product}/>
               </Suspense>
              ))}
              </div>
        </div>
       )}
    </div>
  )
}

export default Products