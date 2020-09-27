import React, { useState } from 'react';

import logo from '../assets/devchallenges.svg';
import profileImage from '../assets/profile.jpg';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menu = showMenu ? (
    <div className="flex flex-col bg-gray-100 border border-gray-400 items-start rounded-lg absolute sm:w-over px-3 py-2 top-over right-0 menu w-40">
      <a href="/me" className="text-gray-700 w-full p-3 bg-gray-200 rounded-lg">
        <i className="fas fa-user-circle"></i> <span>My profile</span>
      </a>
      <a href="/group-chat" className="text-gray-700 w-full p-3 rounded-lg">
        <i className="fas fa-user-friends"></i> <span>Group Chat</span>
      </a>
      <hr className=" border-gray-400 w-full" />
      <button className="text-red-600 p-3 w-full text-left rounded-lg focus:outline-none">
        <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
      </button>
    </div>
  ) : null;

  return (
    <div className="flex py-6 justify-between w-full">
      <a href="/">
        <img src={logo} alt="Logo" className="" />
      </a>

      <div className="flex items-center relative cursor-pointer" onClick={handleMenu}>
        <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-lg" />
        <span className="text-sm font-bold pl-3 hidden sm:inline">Yomar Gutierrez</span>
        <button className="focus:outline-none pl-2 hidden sm:block">
          <i className="fas fa-angle-down"></i>
        </button>
        {menu}
      </div>
    </div>
  );
};

export default NavBar;
