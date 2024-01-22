import React from 'react'
import Product from '../Product/Product'

const SimilarProducts = ({similarProducts}) => {
  return (
    <div className="products_list mt-14 max-w-[1300px] p-5">
    <h1 className='ps-3 my-3 font-bold text-[30px]'>Similar Products</h1>
    <div className="flex mt-2 flex-wrap justify-start items-center gap-5">
        {similarProducts.map((product)=>(
            <Product key={product?.id} product={product}/>
        ))}
     </div>
     </div>
  )
}

export default SimilarProducts