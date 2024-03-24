import React from "react";

function CartCard() {
  return (
    <div className="p-5">
      <ol
        className="list-decimal px-5 border-b-2 py-3
        "
      >
        <li className="mb-5">
          <div className=" flex justify-between">
            <p className=" text-xl">Blue Shoes</p>
            <p className=" text-xl"> $15</p>
          </div>
        </li>
        <li className="mb-5">
          <div className=" flex justify-between">
            <p className=" text-xl">Blue Shoes</p>
            <p className=" text-xl"> $15</p>
          </div>
        </li>
      </ol>
      <div className=" flex flex-col  min-[475px]:flex-row justify-between mb-4 min-[1025px]:flex-col border-b py-3">
        <p className=" text-xl min-[425px]:text-2xl text-nowrap mb-3">
          Sub Total: $15
        </p>
        <p className=" text-xl min-[425px]:text-2xl text-nowrap mb-3">
          Shipping Price : $5
        </p>
      </div>
      <p className=" text-2xl min-[425px]:text-3xl mb-3">Total Payable : $20</p>

      <button className="p-3 bg-green-500 w-full rounded shadow  text-white text-lg">
        Checkout
      </button>
    </div>
  );
}

export default CartCard;
