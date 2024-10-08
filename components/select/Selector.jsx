"use client";

const Selector = ({vendors}) => {
  return (
    <select value={vendors[0]} className="outline-none border-b-2 border-gray-400 placeholder:text-gray-400 text-sm font-thin mb-2 py-3 w-full text-gray-500 " name="" id="">
      {vendors.map((vendor,index) => <option key={vendor.vendor_id} value={vendor.code}>{vendor.code}</option>)}
    </select>
  );
};

export default Selector;
