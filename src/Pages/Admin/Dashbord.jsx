import { useState } from "react";
import SidebarAdmin from "../../components/Dyaamic/SidebarAdmin"
import { AiOutlineMenuFold } from "react-icons/ai";
// import TotalProduct from "../../components/Anality/TotalProduct";

function Dashbord() {
  const [active,steactive]=useState(false)
  return (
    <section className=" relative flex flex-col w-full">
      <div className="w-full">
      <SidebarAdmin active={active}/>

      </div>
        <button className={` bg-sky-200 p-3 rounded hidden lg:block shadow hover:bg-sky-400 fixed top-[100px] ${active?'left-[260px]':'left-[70px]'} w-fit h-fit  text-2xl`} onClick={()=>steactive(!active)} ><AiOutlineMenuFold/></button>
        <div className=" flex  flex-col justify-around">
          
        </div>
    </section>
  )
}

export default Dashbord