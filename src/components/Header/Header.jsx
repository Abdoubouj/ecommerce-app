import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { BsBag , BsHeart, BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import {useSelector , useDispatch} from "react-redux";
import { categories, categories_error, categories_status, fetchCategories } from "../../features/categorySlice";
const Header = () => {
  const dispatch = useDispatch();
  const categories_list = useSelector(categories);
  const status = useSelector(categories_status);
  const error = useSelector(categories_error);
  useEffect(()=>{
     dispatch(fetchCategories())
  },[dispatch]);
  console.log(categories_list);
  return (
    <header className="app-header border-b-2 border-light">
      <div className="header-top px-5 flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="#" width={100} />
        </div>
        <div className="search-box relative">
          <input
            type="text"
            placeholder="search product..."
            className="border-[1px] border-light p-2 px-8 rounded-xl w-[430px] bg-slate-50 text-dark placeholder:text-black focus:outline-none"
          />
          <BsSearch className="absolute top-[15px] left-[8px] text-black" />
        </div>
        <div className="h-right flex items-center gap-8 text-black">
          <div className="cart flex flex-col justify-center items-center relative">
            <BsBag className="text-[20px]" />
            <span className="text-[14px]">Cart</span>
            <span className="absolute -top-[4px] -right-[4px] text-[10px] bg-yellow inline-block w-4 h-4 rounded-full leading-4 text-center">
              0
            </span>
          </div>
          <div className="wishlist flex flex-col justify-center items-center">
            <BsHeart className="text-[20px]" />
            <span className="text-[14px]">Wishlist</span>
          </div>
          <div className="user-account">
            <img
              src="user.jpg"
              alt="#"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="header-bottom px-8 py-2">
        <div className="categories">
          {error !== null && (<h1>{error}</h1>)}
          {status === "loading" ? (<h1>loading ...</h1>) : (
            <div className="categories_list font-[600] text-black flex gap-7">
              { categories_list.slice(0,8).map((category,index)=>(   
                  <Link to="#" key={index} className="hover:text-yellow">
                   {category}
                  </Link>
                ))
              }
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
