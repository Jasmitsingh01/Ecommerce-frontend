/* eslint-disable react/prop-types */
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";
import { MdAddShoppingCart } from "react-icons/md";
import { BsChatSquareDotsFill } from "react-icons/bs";

import logo1 from "../../assets/men.jpg";

function SidebarAdmin({active}) {
  return (
    <aside className={` hidden bg-sky-400 lg:flex lg:flex-col  w-${active?'1/6':'fit'} min-h-[85.5vh] justify-evenly  p-2`}>
      <div className="p-5 text-center mx-auto hidden mb-5">
        {
          active?<><img src={logo1} alt="logo" className=" w-[100px] h-[100px] rounded-full mb-3" />
          <p className=" text-2xl">UserName</p></>:null
        }
      </div>
      <button className=" border-2 mb-2 rounded p-3 flex justify-between items-center text-xl">
       {
        active? 'Dashboard':null
       } <AiOutlineDashboard/>
      </button>
      
      <button className=" border-2 mb-2  p-3 rounded flex justify-between items-center text-xl">
       {
        active? 'Add Product':null
       } <MdAddShoppingCart/>
      </button>
      <button className=" border-2 mb-2  p-3 rounded flex justify-between items-center text-xl">
       {
        active?'Invoice':null
       } <TbFileInvoice/>
      </button>
      <button className=" border-2 mb-2  p-3 rounded flex justify-between items-center text-xl">
       {
        active?'Chat ':null
       }                       <BsChatSquareDotsFill/>
      </button>
      <button className=" border-2 mb-2  p-3 rounded flex justify-between items-center text-xl">
       {
        active?'Profile':null
       } <FaUserCircle/>
      </button>
      <button className=" border-2 mb-2  p-3 rounded flex justify-between items-center text-xl">
       {
        active?'Setting ':null
       }                       <IoSettings/>
      </button>
    
    </aside>
  )
}

export default SidebarAdmin