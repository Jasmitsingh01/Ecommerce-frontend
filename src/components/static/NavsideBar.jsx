import React from "react";
import { Link } from "react-router-dom";

function NavsideBar() {
  return (
    <div className="w-full bg-slate-200 min-h-screen flex flex-col justify-between">
      <ul>
        <li
          className=" p-3  border-b-[1px]  border-black my-5"
        >
          <Link to="/login" className=" text-xl  font-semibold">
            Login
          </Link>
        </li>
        <li
          className=" p-3  border-b-[1px] border-black my-5"
        >
          <Link to="/store" className=" text-xl  font-semibold">
            EVERYTHING
          </Link>
        </li>
        <li
          className=" p-3  border-b-[1px]  border-black my-5"
        >
          <Link to="#" className=" text-xl  font-semibold">
            WOMEN
          </Link>
        </li>
        <li
          className=" p-3  border-b-[1px]  border-black my-5"
        >
          <Link to="#" className=" text-xl  font-semibold">
            MEN
          </Link>
        </li>
        <li
          className=" p-3  border-b-[1px]  border-black my-5"
        >
          <Link to="#" className=" text-xl  font-semibold">
            ACCESSORIES
          </Link>
        </li>
      </ul>
      <ul>
        <li
          className=" p-3  border-b-[1px]  border-black my-5"
        >
          <Link to="/about" className=" text-xl  font-semibold">
            About us
          </Link>
        </li>
        <li
          className=" p-3  border-black"
        >
          <Link to="/contact" className=" text-xl  font-semibold">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavsideBar;
