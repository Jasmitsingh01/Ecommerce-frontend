import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Dyaamic/Navbar";
import Footer from "./components/static/Footer";
import Home from "./Pages/user/Home";
import About from "./Pages/user/About";
import Contact from "./Pages/user/Contact";
import Login from "./Pages/user/Login";
import Productpage from "./Pages/user/Productpage";
import { useEffect, useState } from "react";

Contact
function App() {
  const [Path, setPath] = useState('')
  const location=useLocation();
useEffect(() => {
  setPath(location.pathname);

},[location])


  return (
    <>
{

  
Path ==='/'||Path ==='/about'||Path ==='/contact'? <Navbar color={'transparent'}/>:<Navbar color={'black'}/>
}    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/store" element={<Productpage/> }/>
    </Routes>
    
{

  
Path ==='/'||Path ==='/about'||Path ==='/contact'? <Footer top={100}/>:<Footer top={0}/>
}
    
    </>
  )
}

export default App
