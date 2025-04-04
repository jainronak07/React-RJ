import React from "react";
import { LOGO_URL } from "../util/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

export const Header = () => {
  const onlineStatus=useOnlineStatus()
  return (
    <div className="flex justify-between bg-amber-200 ">
      <div className="logo">
        <img className='w-50 p-2 'src={LOGO_URL} alt="Khana Khajana Logo" />
        <h1 className=" px-7  mb-1 text-xl font-bold ">Khana Khajana</h1>
      </div>
      <div className="align-content-center justify-center">
        <ul className="flex align-center">
          <li className="px-2 border-2 bg-amber-200 rounded-xl m-4 hover:bg-orange-400">{onlineStatus?"Online:🟢":"Offline🔴"}</li>
          <li className="px-2 border-2 bg-amber-200 rounded-xl m-4 hover:bg-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 border-2 bg-amber-200 rounded-xl m-4 hover:bg-orange-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 border-2 bg-amber-200 rounded-xl m-4 hover:bg-orange-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 border-2 bg-amber-200 rounded-xl m-4 hover:bg-orange-400">Cart</li>
        </ul>
      </div>
    </div>
  );
};