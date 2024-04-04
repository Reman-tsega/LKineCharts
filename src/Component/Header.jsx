import React from 'react';
import { useTheme } from '../Store/Context/ThemContext';
import DownloadSourceCode from './DownloadSourceCode';

function Header() {
  const { darkMode } = useTheme();

  return (
    <div className={`px-4 md:px-20 lg:px-32 mt-10 items-center ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
      <h1 className="text-center text-4xl">{darkMode ? 'Line Chart' : 'Line Chart'}</h1>
      <div className='flex justify-end'>
        <DownloadSourceCode />
      </div>
    </div>
  );
}

export default Header;
