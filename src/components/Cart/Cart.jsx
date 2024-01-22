import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import emptyCart from "../../assets/emptyCart.svg"
import { Link } from 'react-router-dom';
import { incrementQuantity ,decrementQuantity } from '../../features/cartSlice';
const Cart = () => {
    const {cart} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    console.log(cart);
  return (
    <div className='flex p-5 items-center justify-center'>
        {cart?.length === 0 ?
        <div className="empty-box h-[600px] p-4 text-center">
          <h1 className='font-[600] text-[40px]'>Cart is empty</h1>
          <img src={emptyCart} className='block w-[300px]' alt="" />
          <Link to="/" className='text-white flex gap-2 items-center justify-center p-3 bg-yellow rounded-md font-[600]'>Added items</Link>
        </div>
        :(
           <div className="cart-content min-h-screen min-w-[1200px] gap-5 mx-auto flex justify-start">
            <div className="content-left py-4 px-2 h-[500px] w-[800px] border-[1px] border-slate-100 shadow rounded-lg">
                <h1 className='text-[22px] font-[700]'>Shopping Cart</h1>
                <div className="cart-items mt-5">
                    {cart?.map((item)=>(
                        <div className='cart-item p-3 flex justify-between gap-14 border-t-[1px] border-slate-300 py-2' key={item.id}>
                            <img src={item.thumbnail} className='w-[120px] h-[130px] rounded-lg' alt="" />
                            <div className="flex w-1/2 text-[20px] font-[400] flex-col gap-1">
                                <h1 className='title'>{item?.title}</h1>
                                <div className="price">{item?.price} $</div>
                            <div onClick={()=>{dispatch(decrementQuantity(item?.id))}} className="change-quantity w-[140px] h-[40px] rounded-lg border-[1px] border-slate-200 flex items-center justify-between">
                                <button className='h-full text-slate-950 w-[40px] rounded-l-lg bg-slate-200'>-</button>
                                <span className='text-[16px]'>{item?.quantity}</span>
                                <button onClick={()=>{dispatch(incrementQuantity(item?.id))}} className='h-full text-slate-950 w-[40px] rounded-r-lg bg-slate-200'>+</button>
                            </div>
                            </div>
                            <div className="total-item-price">
                                <h1>{item?.price * item?.quantity} $</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="content-right h-[500px] w-[400px] border-[1px] border-slate-100 shadow rounded-lg">

            </div>
           </div>
        )
        }
    </div>
  )
}

export default Cart