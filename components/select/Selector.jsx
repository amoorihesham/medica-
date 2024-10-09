"use client";
import { useState } from "react";
//import {KeyboardArrowDownIcon,KeyboardArrowUpIcon} from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Style from "./style.module.css";
const Selector = ({vendors,select,press}) => {
    const [open, setOpen] = useState(false);
    const [data,setData] = useState({code:'1234',price:'50',discound:'10'})

  return (
    // <select value={select} onChange={(e) => press(e.target.value)} className="outline-none border-b-2 border-gray-400 placeholder:text-gray-400 text-sm font-thin mb-2 py-3 w-[500px] text-gray-500 " name="" id="">
    //   {vendors?.map((vendor,index) => 
    //   <option className={Style.option} key={vendor.vendor_id} value={vendor.vendor_id}> <span className="text-sm text-gray-800 mr-3">code : {vendor.code}</span>{" "}<span>price : {vendor.price}</span>{" "}<span>discount : {vendor.discount}</span> </option>)}
    // </select>
    <div className="relative" >
    <div onClick={() => setOpen(!open)} className=" flex justify-between hover:cursor-pointer border-b-2 border-gray-400 placeholder:text-gray-400 text-sm font-thin mb-2 py-3 w-full text-gray-500 " >
    <div className=" flex justify-between items-center px-2 w-full  rounded-lg transition-all duration-500 "> <span className='text-gray-500' >Code:{select?.code}</span> <span className=' text-blue-800' >{select?.price}EGP</span>  <span className=" bg-[#4EBD2D] text-sm text-white p-1 rounded">{select?.discount}% discount</span> </div>
{open?<KeyboardArrowUpIcon color="black" />: <KeyboardArrowDownIcon color="black"/>}
    </div>
{open &&<div className=" absolute z-10 shadow w-full rounded-lg bg-[#F9F3F3] " >
  {vendors?.map((vendor,index) =>(
  <div onClick={() => {
    press(vendor)
    setOpen(false)
  }} key={vendor.vendor_id} className=" flex justify-between items-center px-2 border-b-2 h-[47px] rounded-lg hover:cursor-pointer hover:bg-[#e0dada] hover:scale-105 transition-all duration-500 "> <span className='text-gray-500' >Code:{vendor?.code}</span> <span className=' text-blue-800 font-medium' >{vendor?.price}EGP</span>  <span className=" bg-[#4EBD2D] text-sm text-white p-1 rounded">{vendor?.discount}% discount</span> </div>
  )) }
 
  
  
  </div>}
    </div>
  );
};

export default Selector;
