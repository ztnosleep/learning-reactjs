import React from "react";
import { NavLink } from "react-router-dom";
 const Menu = () => {
    return (
        <div className="w-64 bg-white text-black h-screen p-5">
      <div className="font-bold text-xl mb-6">
        <img src="./image/logo.png" alt="" />
      </div>
      <a href="#" className="block mb-2">Dashboard</a>
      <a href="#" className="block mb-2">Projects</a>
      <a href="#" className="block mb-2">Teams</a>
      <a href="#" className="block mb-2">Analytics</a>
      <a href="#" className="block mb-2">Messages</a>
      <button className="mt-6 bg-white text-blue-600 py-2 px-4 rounded">Try Now</button>
    </div>
      );
 };
 
 export default Menu;