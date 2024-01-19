// import { BsCart, BsHeart } from 'react-icons/bs'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import {convertRatingToStars} from "../../helpers/helper";
const Product = ({product}) => {
  return (
    <div className='w-[300px] px-3 py-1 hover:shadow-md hover:border-[1px] hover:border-light hover:shadow-light'>
        <img src={product.thumbnail} loading='lazy' className='w-full h-[350px] object-cover' alt="#" />
        <h1 className='font-[400] mt-2 text-[16px]'>
        {product.title}
        </h1>
        <div className="price font-[700]">${product.price}</div>
        <div className='flex text-yellow'>{convertRatingToStars(product.rating).map((starType ,index)=>(
          <span key={index}>
            {starType === 1 ? <FaStar/>: <FaStarHalf/>}
          </span>
        ))}
        </div>
        <div className="flex my-4 gap-3 justify-center font-bold">
        </div>
    </div>
  )
}

export default Product