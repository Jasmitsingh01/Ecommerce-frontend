import React from "react";

function CartList() {
  return (
    <ul>
      <li className=" p-5 md:flex md:items-center">
        <img
          src={"/bule_shoe.jpg"}
          alt="product"
          className="  md:w-[100px] md:h-[100px] md:rounded-full"
        />
        <div className=" flex justify-between m-4 md:w-1/2 lg:w-full">
          <p className=" text-xl text-nowrap me-5">Bule Shoes</p>
          <p className=" text-xl text-nowrap">Price :$15</p>
        </div>
        <div className="flex justify-between m-4 md:w-1/2 lg:w-full ">
          <input
            type="text"
            value={1}
            readOnly
            className="w-1/2 outline-none shadow-lg"
          />
          <div className="w-1/2 flex">
            <button className="w-1/2 min-w-[50px] shadow-lg bg-slate-400 border-2 py-2 ">
              +
            </button>
            <button className="w-1/2 min-w-[50px] shadow-lg bg-slate-400 border-2 py-2 ">
              -
            </button>
          </div>
        </div>
        <button className="w-full min-w-[200px] md:mx-10 bg-red-600 shadow-lg border-0 py-3 text-white">
          {" "}
          Delete
        </button>
      </li>
    </ul>
  );
}

export default CartList;
