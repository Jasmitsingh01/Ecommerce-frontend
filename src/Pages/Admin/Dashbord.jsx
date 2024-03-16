
// import TotalProduct from "../../components/Anality/TotalProduct";

import img from '../../assets/Balance.webp'
import AdminPageHeader from '../../components/static/AdminPageHeader'
function Dashbord() {

  return (
    <section className=" relative  w-full">

    <AdminPageHeader value={'Sales Analaytics'}/>
      <div className="flex flex-col min-[425px]:flex-row  justify-between">
        <div className="w-1/2">Bar chart</div>
        <div className="w-full min-[425px]:w-1/2 md:w-1/4 bg-blue-300 me-5">
          <img src={img} alt="Price" className="w-full h-full" />
        </div>
      </div>    
    </section>

       
  )
}

export default Dashbord