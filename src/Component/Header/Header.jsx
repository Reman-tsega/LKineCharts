import React from 'react';
import Profile from './Profile';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';


function Header() {

  return (
    <div className='header  transition-all duration-500 z-50 h-20 shadow-lg bg-white flex justify-between items-center px-4  '>
      <div className='items-center pl-4'>
        {/* Logo */}
        {/* Search bar */}
      <SearchBar />

      </div>
      <div className='notification-profile flex items-center gap-2'>
        {/* Navigation */}

        {/* Profile */}
        <Profile />
      </div>
    </div>
  );
}

export default Header;
