import {  GoTriangleUp } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import img from '../../assets/bule_shoe.jpg'
import { useState } from "react";
function OrderTable() {
  const [Active, setActive] = useState(false)
  
  return (
    <div >
      <table className=" hidden lg:table w-full">
        <tr className="flex justify-between w-full">
           <th className="  border-b-2  py-2 w-full">#ORDER</th>
           <th  className=" border-b-2   py-2 w-full">Product</th>
           <th  className=" border-b-2   py-2 w-full">Category</th>
           <th  className=" border-b-2   py-2 w-full" >Payment</th>
           <th  className=" border-b-2   py-2 w-full">order Status</th>
           <th  className=" border-b-2   py-2 w-full">Action</th>
        </tr>
        <tr className=" flex justify-between ">
          <td className=" border-b-2 w-full flex justify-center items-center">
            <p className=" text-blue-800 font-bold ">#123456</p>
          </td>
          <td className=" border-b-2 w-full flex justify-center  p-3">
            <img src={img} alt="product-image" className=" w-[100px] h-[100px] object-cover" />
          </td>
          <td className=" border-b-2 w-full flex justify-center items-center">
            Men
          </td>
          <td className=" border-b-2 w-full flex flex-col justify-center items-center">
            <p className=" font-bold">$600</p>
            <p>Fully Paid</p>
          </td>
          <td className=" border-b-2 w-full flex justify-center items-center">
            Compeleted
          </td>
          <td className=" border-b-2 w-full flex justify-center items-center">
            <button><FiEdit size={30}/></button>
          </td>
        </tr>
      </table>
      <div className="lg:hidden px-2 flex flex-col shadow-xl ">
        <div className=" flex items-center justify-between px-2 mb-5">
          <p className=" text-blue-950 font-bold ">#123456</p>
          <div>
            <button className={`${Active?'rotate(-180deg)':'rotate(0deg)'} mx-2`} id="rotate" onClick={()=>{setActive(!Active); document.getElementById('rotate').style.transform=`${Active?'rotate(-180deg)':'rotate(0deg)'}` }}><GoTriangleUp size={20 } /></button>
            <button><FiEdit size={20}/></button>

          </div>
        </div>
         <div className={`${Active? 'block':'hidden'}`}>
          <p className=" border-2 py-3 rounded rounded-b-none px-3">Product </p>
          <div className=" border-2 border-t-0 p-3 flex justify-between">
            <img src={img} alt="product-image" className="w-[100px] h-[100px]" />
            <div className="ms-5">
              <p className=" text-blue-950 font-bold">Dnk Bule Shoes</p>
              <p className=" text-gray-400 font-bold "> Regular price :$600</p>
              <p className=" text-gray-500 font-bold "> sale price :$600</p>

            </div>
          </div>
         <table className="flex">
          <tr className=" w-1/2">
            <th className="block py-5  border-2 border-t-0">Category</th>
            <th className="block py-5  border-2 border-t-0">Payment</th>
            <th className="block py-5  border-2 border-t-0">status</th>
          </tr>
          <tr className="flex flex-col w-full">
           
            <td className="block py-5 px-3 border-2 border-t-0 border-s-0">Men</td>
            <td className="block py-2  px-3  border-2 border-t-0 border-s-0">
              <p className=" font-bold">$600</p> 
              <p>Fully Paid</p> 
            </td>
            <td className="block py-5 px-3 border-2 border-t-0 rounded-b border-s-0">Compeleted </td>
          </tr>
         </table>
         </div>
      </div>
    </div>
  );
}

export default OrderTable;
