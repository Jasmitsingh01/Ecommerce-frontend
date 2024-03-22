import { Route,  Routes } from "react-router-dom";
import{ Home ,About,Contact,Login,Singup,Cart,Productpage} from './Pages/user/index'
import Layout from "./layout/UserLayout";
import { AddProduct, AllProducts, CustomerSupport, Dashbord ,Invoice,Orderhistory } from "./Pages/Admin";
import { Profile } from "./Pages/Profile";

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
          <Route path="/admin/profile/:id" element={<Profile/>}/>

          <Route path="/store/:id" element={<Productpage/>}/>
        </Route>
        <Route path="/admin" element={<Layout/>}>
          <Route path="/dashobord" element={<Dashbord/>}/>
          <Route path="/admin/singin" element={<Login/>}/>
          <Route path="/admin/allProduct" element={<AllProducts/>}/>
          <Route path="/admin/addProduct" element={<AddProduct/>}/>
          <Route path="/admin/allorder" element={<Orderhistory/>}/>
          <Route path="/admin/customersupport" element={<CustomerSupport/>}/>
          <Route path="/admin/invoice" element={<Invoice/>}/>
          <Route path="/admin/singup" element={<Singup/>}/>
          <Route path="/admin/profile/:id" element={<Profile/>}/>


        </Route>
      </Routes>
  )
}
export default App
