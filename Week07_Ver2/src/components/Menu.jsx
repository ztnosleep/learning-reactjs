import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="w-52 bg-white p-5 h-screen">
      {/* Logo */}
      <div className="font-bold text-xl mb-6">
        <img src="./image/logo.png" alt="Logo" className="" />
      </div>

      {/* Menu items với NavLink */}
      <nav>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block mb-2 p-2 rounded-md ${
              isActive ? 'bg-pink-500 text-white' : 'text-black hover:bg-gray-300'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `block mb-2 p-2 rounded-md ${
              isActive ? 'bg-pink-500 text-white' : 'text-black hover:bg-gray-300'
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/teams"
          className={({ isActive }) =>
            `block mb-2 p-2 rounded-md ${
              isActive ? 'bg-pink-500 text-white' : 'text-black hover:bg-gray-300'
            }`
          }
        >
          Teams
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `block mb-2 p-2 rounded-md ${
              isActive ? 'bg-pink-500 text-white' : 'text-black hover:bg-gray-300'
            }`
          }
        >
          Analytics
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `block mb-2 p-2 rounded-md ${
              isActive ? 'bg-pink-500 text-white' : 'text-black hover:bg-gray-300'
            }`
          }
        >
          Messages
        </NavLink>
      </nav>

      {/* Nút Try Now */}
      <button className="mt-6 border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-50 w-full">
        Try Now
      </button>
    </div>
  );
};

export default Menu;