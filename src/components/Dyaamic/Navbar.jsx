import React from 'react'
import logo from '../../assets/logo_white.png';
import logo1 from "../../assets/black_logo.png";
import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import NavsideBar from '../static/NavsideBar';
import CartSidebar from './CartSidebar';


function Navbar({color}) {
  const ShowNav=(e)=>{
    document.getElementById('sideNav').style.right='0';
  }
  const HideNav=(e)=>{
    document.getElementById('sideNav').style.right='-100%';

  }
  const ShowCart=()=>{
    document.getElementById('Cart').style.right='0%';
  }
  const HideCart=()=>{
    document.getElementById('Cart').style.right='-100%';

  }
  return (
    <header className={`flex items-center justify-between py-5 px-3 relative bg-${color} max-[1023px]:bg-white  lg:before:absolute  lg:before:w-full lg:before:h-full lg:before:bg-nav lg:before:top-0 lg:before:left-0 lg:before:z-10`}>
       <div className='z-20 flex '>
       <Link to={'/'}>  <picture className=' py-3 '>
            <source media="(min-width:1024px)" srcSet={logo}/>
          <img src={logo1} alt="logo"   className='w-[100px] h-[50px] md:w-[100px] md:h-[50px] object-contain'/>
        </picture>
        </Link>

        <ul className='flex  items-center px-2 '>
                <li className='z-20 hidden lg:block lg:me-3'><Link to="/store" className=' text-xl text-white '>EVERYTHING</Link></li>
                <li className='z-20 hidden lg:block lg:me-3'><Link to="#"  className=' text-xl text-white'>WOMEN</Link></li>
                <li className='z-20 hidden lg:block lg:me-3'><Link to="#"  className='text-xl  text-white'>MEN</Link></li>
                <li className='z-20 hidden lg:block lg:me-3'><Link to="#"  className=' text-xl text-white '>ACCESSORIES</Link></li>
        </ul>
       </div>
        <nav>
            <ul className='flex  items-center px-2 '>
                <li className='z-20 hidden lg:block lg:me-2'><Link to="/" className=' text-xl text-white '>Home</Link></li>
                <li className='z-20 hidden lg:block lg:me-2'><Link to="/about"  className=' text-xl text-white'>About us</Link></li>
                <li className='z-20 hidden lg:block lg:me-2'><Link to="/contact"  className='text-xl  text-white'>Contact us</Link></li>
                <li className='z-20 hidden lg:block lg:me-2'><Link to="/login"  className=' text-xl text-white '>Login</Link></li>
                <li className=' self-end mb-1 lg:self-center lg:m-0 z-20 '><button  className=' text-lg lg:text-xl ms-3 me-6 relative lg:text-white' onClick={()=>ShowCart()}><GiShoppingBag/> <span className='absolute block  rounded-full bg-black lg:bg-white lg:text-black text-white text-sm  top-[-15px] px-2 right-[-15px] '>0</span></button></li>
                <li><button className='bg-black text-white p-2 text-2xl lg:hidden ' onClick={(e)=>ShowNav(e)}><IoMenuSharp/></button></li>
                <li id='sideNav' className=' fixed w-full h-screen md:w-1/2 shadow-xl lg:hidden   top-0  -right-full transition-[right] ease-in-out duration-[5] z-30'><NavsideBar/> <button className=' absolute top-0 right-0 p-3 m-2 rounded shadow text-xl font-semibold' onClick={(e)=>{HideNav(e)}} >X</button>  </li>
                <li id='Cart' className=' fixed w-full h-screen  md:w-1/2 lg:w-1/4 shadow-xl bg-white     top-0   -right-full transition-[right] ease-in-out duration-[5] z-30'><CartSidebar/> <button className=' absolute top-0 right-0 p-3 m-2 rounded shadow text-xl font-semibold' onClick={(e)=>{HideCart(e)}} >X</button>  </li>

            </ul>
        </nav>
    </header>
  )
}

export default Navbar