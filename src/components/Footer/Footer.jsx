import React, { useEffect } from "react";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import {MdMailOutline} from "react-icons/md"
import {RiInstagramFill} from "react-icons/ri"
import {useSelector,useDispatch} from "react-redux"
import { categories, fetchCategories } from "../../features/categorySlice";
import { Link } from "react-router-dom";
const Footer = () => {
    const dispatch = useDispatch();
    const categories_List = useSelector(categories);
    useEffect(()=>{
        dispatch(fetchCategories());
    },[dispatch])
  return (
    <footer className="footer">
      <div className="footer-content py-10 max-w-[1300px] mx-auto border-t-2 border-yellow flex justify-between">
        <div className="contact-us flex flex-col gap-3">
          <h1 className="text-[35px] font-[500]">Contact Us</h1>
          <p className="max-w-[300px] text-slate-600">
            Vous avez des questions? Appelez-nous du lundi au vendredi de 9h00 à
            19h00 Le samedi de 9h à 12h30
          </p>
          <div className="num-tele text-blue-700 font-[700] tracking-wide">+212696035453</div>
          <div className="contact-form relative">
            <input type="text" placeholder="E-mail" className="w-[300px] bg-slate-100 ps-10 pe-2 py-3 rounded-md placeholder:text-blue-950 placeholder:font-[700] border-2 border-slate-100 hover:border-yellow focus:outline-0 focus:border-yellow" />
            <div className="email-icon absolute top-[12px] left-[8px]">
             <MdMailOutline className="text-[22px]" />
            </div>
          </div>
          <div className="follow-us">
          <h1 className="text-[35px] font-[500] mt-5">Follow Us</h1>
          <div className="social-media flex gap-4 text-[25px] mt-2 text-slate-500">
           <FaFacebookF  className="hover:text-yellow cursor-pointer"/>
           <RiInstagramFill className="hover:text-yellow cursor-pointer"/>
           <FaYoutube  className="hover:text-yellow cursor-pointer"/>
           <FaTiktok  className="hover:text-yellow cursor-pointer"/>
          </div>
          </div>
        </div>
        <div className="catrgories w-[300px]">
          <h1 className="text-[35px] font-[500]">Categories</h1>
          <ul className="flex flex-wrap gap-3 mt-2">
            {categories_List?.map((category,index)=>(
               <li className="text-[17px] font-[400] transition duration-300 hover:text-yellow" key={index}>
                <Link to={`/category/${category}`}>{category}</Link>
                </li>
            ))}
          </ul>
        </div>
        <div className="others">
          <h1 className="text-[35px] font-[500]">Others</h1>
          <ul className="flex flex-col mt-2">
            <li className="text-[17px] font-[400] transition duration-300 hover:text-yellow">F.A.Q</li>
            <li className="text-[17px] font-[400] transition duration-300 hover:text-yellow">Delivry Condition</li>
            <li className="text-[17px] font-[400] transition duration-300 hover:text-yellow">Terms And Conditions</li>
            <li className="text-[17px] font-[400] transition duration-300 hover:text-yellow">Privacy & Policy</li>
          </ul>
        </div>
      </div>
      <p className="text-center pb-5">&copy; 2024,All Right Reserved , Powered By <strong className="text-yellow">ABDERRAHIM BOUJEDAR</strong></p>
    </footer>
  );
};

export default Footer;
