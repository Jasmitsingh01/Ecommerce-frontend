import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { ShowSideBar } from "../../feautures/Admin";
import { useDispatch } from "react-redux";
function TopNavAdmin() {
 const Dispacth=useDispatch();
 const [Show, setShow] = useState(true);
 

  return (
    <nav className='flex items-center justify-between'>
    <button className=" hidden md:block text-[35px]" onClick={()=>Dispacth(ShowSideBar(true))}><IoMenu/></button>

    <form className="flex items-center m-2">
        <input type="text" placeholder="Seacrh" className=" outline-none  rounded shadow p-2"  />
        <button type="button" className="rounded  bg-blue-300 p-3"><CiSearch />
</button>
    </form>
    
    <div className="">
        <img src={'/Profile.jpeg'} alt="Profile" className=" rounded-full w-[50px] h-[50px] shadow me-10" onClick={()=>setShow(!Show)}/>
        <div className={`Dropdwon ${Show?'hidden':null} absolute right-2 rounded border-2 bg-white z-10`}>
            <div className="p-2 border-b-2">View Proflie</div>
            <div className="p-2 border-b-2">Message</div>
            <div className="p-2 border-b-2">Settings</div>
        </div>
    </div>

    </nav>
  )
}

export default TopNavAdmin