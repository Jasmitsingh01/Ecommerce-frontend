import {Outlet, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from '../components/Dyaamic/Navbar'
import Footer from '../components/static/Footer'
import TopNavAdmin from "../components/Dyaamic/TopNavAdmin";
import SidebarAdmin from "../components/Dyaamic/SidebarAdmin";
import { useDispatch } from "react-redux";
import { SetLocation,RemoveLocation } from "../feautures/Admin";
function Layout() {
const Location=useLocation();
const [Top, setTop] = useState();
const [NavColor, setNavColor] = useState();
const [NavData, setNavData] = useState([]);
const [FooterView,setFooterView]=useState('');
 const Dispacth=useDispatch();
useEffect(()=>{
  const Data=['everything','women','men','accesories'];

if (!Location.pathname.includes('admin')&&Location.pathname==='/about'||Location.pathname==='/contact'|| Location.pathname==='/' ) {
  setTop('100');
  setNavColor('transparent');
  setNavData(Data)
  setFooterView('')
  Dispacth(RemoveLocation())

}
else if(Location.pathname.includes('admin')){
  setNavData([]);
  setNavColor('sky-blue-300');
  setFooterView('hidden');
  Dispacth(SetLocation())
}
else{
  setNavColor('sky-blue-300')
  setNavData(Data)
  setTop('0');
  setFooterView('')


}

},[Location])
  
  return (
<>
<Navbar Data={NavData} color={NavColor}/>
{
  Location.pathname.includes('admin') && Location.pathname !='/admin/singup' &&Location.pathname !='/admin/singin' ?<div className=" relative"><TopNavAdmin/><SidebarAdmin/></div>:null
}
<Outlet/>
{
  !Location.pathname.includes('admin')?<Footer top={Top} display={FooterView}/>
  :null
}
</>
)
}

export default Layout