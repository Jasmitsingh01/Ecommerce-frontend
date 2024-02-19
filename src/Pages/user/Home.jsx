import React from "react";
import Categorycard from "../../components/static/Categorycard";
import ProductCard from "../../components/Dyaamic/ProductCard";
import Banner from "../../components/static/Banner";
import BannerSecond from "../../components/static/BannerSecond";

function Home() {
  return (
    <div>
      <div className="lg:absolute lg:top-0 w-full">
      <Banner/>

      </div>
      <div className=" relative lg:top-[100vh] mb-[10%]">
        
        <Categorycard />
      </div>
    <div className="relative lg:top-[100vh] bg-slate-100 py-20">
      <h3 className=" text-center text-6xl font-semibold  mb-5">Featured Products</h3>
      <div className=" border-2 border-blue-500 w-[100px] mx-auto mb-20"></div>
    <div className=" grid  grid-cols-2  md:grid-cols-3  lg:grid-cols-4  justify-items-center gap-y-10 mb-16">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      </div>
    </div>
      <div className="relative lg:top-[100vh] ">
      <BannerSecond/>
      </div>

    </div>
  );
}

export default Home;
