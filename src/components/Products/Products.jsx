import { Suspense, lazy, useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux";
import { error, fetchProducts, products, status } from '../../features/productSlice';
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
    <div className='products_wrapper'>
       {products_error !==null && <h1>{products_error}</h1>}
       {products_status === 'loading' ? <h1>loading</h1> : (
        <div className="products_list mt-5 max-w-[1300px] mx-auto p-5">
          <h1 className='ps-3 my-3 font-bold text-[30px]'>All Products</h1>
          <div className="flex flex-wrap justify-start items-center gap-5">
            {productsList.map((product)=>(
               <Suspense fallback={<div>Loading...</div>}>
              <Product key={product.id} product={product}/>
               </Suspense>
              ))}
              </div>
        </div>
       )}
    </div>
  )
}

export default Products