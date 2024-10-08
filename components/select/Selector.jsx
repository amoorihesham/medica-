"use client";
import Style from "./style.module.css";
const Selector = ({vendors,select,setSelect,press}) => {
    
  return (
    <select value={select} onChange={(e) => press(e.target.value)} className="outline-none border-b-2 border-gray-400 placeholder:text-gray-400 text-sm font-thin mb-2 py-3 w-[500px] text-gray-500 " name="" id="">
      {vendors?.map((vendor,index) => 
      <option className={Style.option} key={vendor.vendor_id} value={vendor.vendor_id}> <span className="text-sm text-gray-800 mr-3">code : {vendor.code}</span>{" "}<span>price : {vendor.price}</span>{" "}<span>discount : {vendor.discount}</span> </option>)}
    </select>
  );
};

export default Selector;
