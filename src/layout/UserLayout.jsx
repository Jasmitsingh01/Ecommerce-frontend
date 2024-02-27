import {Outlet, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from '../components/Dyaamic/Navbar'
import Footer from '../components/static/Footer'
function Layout() {
  const [color, setcolor] = useState('transparent');
  const [Navdata, setNavdata] = useState([])
  const [Top, setTop] = useState('100')
  const currentLocation=useLocation();
  useEffect(() => {
    if (currentLocation.pathname ==='/'|| currentLocation.pathname ==='/about'|| currentLocation.pathname ==='/contact') {
      setcolor('transparent');
      setTop('100')
    }
    else{
      setcolor('black');
      setTop('0')
    }
     if(currentLocation.pathname!='/admin/:id'){
      const Data=['EVERYTHING','WOMEN','MEN','ACCESSORIES' ];
      setNavdata(()=>[...Data])
     }
     else{
      setNavdata([])
     }



  }, [currentLocation])
  
  return (
<>
<Navbar color={color} FirstNav={Navdata} SecondNav={Navdata}/>
<Outlet/>
<Footer top={Top}/>
</>
)
}

export default Layout