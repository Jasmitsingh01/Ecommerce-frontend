import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SideBarProduct from "../../components/Dyaamic/sideBarProduct";
import ProductCard from "../../components/Dyaamic/ProductCard";

function Productpage() {
  return (
    <div className=" bg-slate-300 flex flex-col lg:flex-row py-10 relative m-h-[100vh]  ">
      <div className="w-full p-5  lg:w-1/2">
        <SideBarProduct />
      </div>

      <div className="bg-white w-full  p-5 ">
        <h3 className=" text-5xl font-normal ms-10  mb-20">Women</h3>
        <p className=" text-xl mx-5 mb-10">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
          augue. Sed non neque elit sed ut.
        </p>
        <div className=" grid grid-cols-2 md:grid-cols-3  gap-y-3   md:gap-5  justify-items-center mb-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="md:ms-5 flex justify-center ">
          <button className=" bg-black text-white border-2 border-black py-3 px-5 mx-2">
            1
          </button>
          <button className=" bg-transparent border-2 border-black text-black hover:bg-black hover:text-white py-3 px-5 me-2">
            2
          </button>
          <button className=" bg-transparent border-2 border-black text-black hover:bg-black hover:text-white py-3 px-5 me-2">
            3
          </button>
          <button className=" bg-transparent border-2 border-black text-black hover:bg-black hover:text-white py-3 px-5 text-2xl me-2">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productpage;
