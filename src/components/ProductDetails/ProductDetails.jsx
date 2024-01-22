import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useParams} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux"
import { fetchProductsCategory, fetchSingleProduct, productsCategory, singleProduct, singleProductStatus } from '../../features/productSlice';
import { convertRatingToStars, generateNumberArray } from '../../helpers/helper';
import { FaRegHeart, FaStar, FaStarHalf } from 'react-icons/fa';
import {FaRegCircleCheck ,FaArrowLeftLong} from 'react-icons/fa6';
import {IoBagOutline} from 'react-icons/io5';
import {CiDeliveryTruck} from 'react-icons/ci';
import { addToCart } from '../../features/cartSlice';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
const ProductDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(singleProduct);
  const status = useSelector(singleProductStatus);
  const sizes = generateNumberArray(39,45);
  const [size , setSize] = useState("");
  const [productAddedToCart , setProductAddedToCart] = useState(false);
  const similarProducts = useSelector(productsCategory);
  useEffect(()=>{
    window.scrollTo(0, 0);
    dispatch(fetchSingleProduct(id));
    dispatch(fetchProductsCategory(product?.category))
  },[dispatch,id , product?.category]);
  return (
    <div className="product-details-container truncate relative p-5">
      <div className={`box transition duration-500 flex flex-col gap-5 items-center justify-start bg-white absolute top-[5px] ${productAddedToCart ? 'right-[50px] translate-x-0' : 'translate-x-[550px] -right-[550px]'}  z-20 p-4 border-2 border-green-600 rounded-lg shadow-md`}>
        <p className='mt-3 text-[22px] capitalize font-[700]'>product added to cart</p>
        <FaRegCircleCheck  className='text-green-700 text-[80px]'/>
        <div className="flex gap-3">
        <Link to="/cart" className='text-white flex gap-2 items-center px-5 py-3 bg-black rounded-md font-[600]'>
        <IoBagOutline/> Proceed to Cart
         </Link>
        <Link to="/" className='text-white flex gap-2 items-center px-5 py-3 bg-yellow rounded-md font-[600]'>
        <FaArrowLeftLong/> Continue Shop
         </Link>
        </div>
      </div>
      {status === "loading"? (<h1 className='min-h-screen'>Loading ...</h1>):
      (
        <>
        <div className="head flex items-center gap-10 my-3 font-[500]">
        <Link to="/" className="text-[18px] hover:text-yellow relative before:content-[''] before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-slate-600 before:top-[12px] before:-right-[22px] before:z-10">Home</Link>
        <h1 className="text-[18px] text-yellow">
          {product?.title}
        </h1>
      </div>
      <section className="product-details flex gap-10">
        <div className="images-side h-full flex flex-wrap flex-1">
          <div className="main-image w-full">
            <img src={product?.thumbnail} alt="##" className='w-full h-[500px] object-cover shadow-xl rounded-md' />
          </div>
          <div className="other-images flex flex-wrap justify-start gap-5 pt-3">
            {product?.images?.map((img ,index)=>(
              <img key={index} src={img} className='cursor-pointer w-[120px] h-[120px] object-cover rounded-md shadow-xl shadow-slate-400' alt="" />
              ))}
          </div>
        </div>
        <div className="other-details-side h-full flex-1 flex flex-col gap-5">
          <h1 className='product-title text-[40px] font-[700]'>{product?.title}</h1>
          <div className="product-price text-slate-600">{product?.description}</div>
          <div className="product-price text-[30px] font-[800]">{product?.price}$</div>
          <div className='flex text-yellow'>{convertRatingToStars(product?.rating).map((starType ,index)=>(
          <span key={index}>
            {starType === 1 ? <FaStar/>: <FaStarHalf/>}
          </span>
        ))}
        </div>         
        <Link to={`/category/${product?.category}`} className="category w-[170px] text-center rounded-md text-yellow font-[600] capitalize py-2 px-5 border-2 border-yellow">{product?.category}</Link>
        <div className="sizes">
          <h3 className='text-[18px] mb-2 font-[700] capitalize'>size :</h3>
          <div class="flex flex-wrap gap-3">
            {sizes.map((s , index)=>(
              <label key={index}>
          <input type="radio" value={s} onChange={(e)=>{setSize(e.target.value)}} class="peer hidden" name="size" />
          <div class="hover:bg-gray-50 flex items-center justify-center gap-4 px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-yellow">
              <h2 class="font-medium text-gray-700">{s}</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 text-yellow invisible group-[.peer:checked+&]:visible">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </div>
              </label>
                ))}
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <button onClick={()=>{dispatch(addToCart({...product,quantity:1})); setProductAddedToCart(true) ; window.scrollTo(0,0)  }} className='flex-1 flex gap-5 items-center font-[700] justify-center bg-yellow text-slate-800 py-4 px-5 cursor-pointer rounded-md'>
          <IoBagOutline className='text-[20px]' />
            <span>Add to cart</span>
          </button>
          <button className='flex-5 bg-slate-800 text-slate-50 py-4 px-5 cursor-pointer rounded-md'>
          <FaRegHeart />
          </button>
        </div>
        <p className='flex gap-2 items-center font-[400] text-slate-700'><CiDeliveryTruck className='text-[22px]' /> delivery on orders over 15.00 $</p>
        </div>
      </section>
      <SimilarProducts similarProducts={similarProducts?.filter((p)=>(p.title !== product?.title))}/>
      </>
    )
    }
    </div>
  )
}

export default ProductDetails