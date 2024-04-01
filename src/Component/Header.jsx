import React from 'react'
import { useTheme } from '../Store/Context/ThemContext';

function Header() {
  const { darkMode } = useTheme();

  return (
    <div className={` ${darkMode ? 'text-white bg-black' : 'text-black bg-white'} items-center align-middle p-10 my-12'`}>
        <h1 className={` ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}  mx-auto w-48 text-2xl`}>Line Chart</h1>
    </div>
  )
}

export default Header