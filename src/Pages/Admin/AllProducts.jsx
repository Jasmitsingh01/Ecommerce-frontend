import React from "react";

import ProductCard from "../../components/Dyaamic/ProductCard";
import AdminPageHeader from "../../components/static/AdminPageHeader";

function AllProducts() {
  return (
    <div>
      <AdminPageHeader value={"Product Grid"} />
      <div className=" text-right me-5 mb-5 text-xl font-bold">
        Select Product Category
      </div>
      <div className=" flex justify-end me-5 mb-5">
        <select className=" rounded border-2 outline-none p-2 w-1/6">
          <option>Men</option>
          <option>Women</option>
          <option>child</option>
        </select>
      </div>
      <div className=" grid grid-cols-2 justify-center gap-y-8 md:grid-cols-3 lg:grid-cols-4 mb-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default AllProducts;
