import { Route,  Routes } from "react-router-dom";
import{ Home ,About,Contact,Login,Singup,Cart,Productpage} from './Pages/user/index'
import Layout from "./layout/UserLayout";
import { Dashbord } from "./Pages/Admin";


const App=()=>{
  return(

      <Routes  >
      <Route path={'/'} element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Singup/>}/>
          <Route path="/cart" element={<Cart/>}/>

          <Route path="/store/:id" element={<Productpage/>}/>
        </Route>
        <Route path="/admin/:id" element={<Layout/>}>
          <Route path="" element={<Dashbord/>}/>
        </Route>
      </Routes>
  )
}
export default App
