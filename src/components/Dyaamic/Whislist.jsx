import React from "react";

function Whislist() {
  return (
    <div>
      <h2 className=" text-xl p-5 border-b-2">WhisList</h2>
      <div>
        <div className=" flex p-3 justify-between items-center">
          <div className=" flex">
            <div className="flex">
              <img
                src={"/bule_shoe.jpg"}
                alt="Product"
                className=" w-[50px] h-[50px] me-2"
              />
              <div>
                <h3 className=" text-lg">Dnk Bule shoes</h3>
                <p>1 x 150</p>
              </div>
            </div>
          </div>
          <button className=" border-2 border-black w-[30px] h-[30px] rounded-full ">
            X
          </button>
        </div>
        <div className="w-full p-3 absolute bottom-[50px] border-2 flex justify-between mb-5">
          <p className="text-lg font-semibold">Subtotal</p>
          <p>$150</p>
        </div>
        <button className=" absolute bottom-0 p-5 w-full bg-blue-700 text-white font-semibold hover:bg-blue-500 uppercase">
          Move To Cart
        </button>
      </div>
    </div>
  );
}

export default Whislist;
