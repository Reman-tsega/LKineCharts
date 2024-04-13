import React from 'react';
import { useTheme } from '../Store/Context/ThemContext';
import DownloadSourceCode from './DownloadSourceCode';

function Header() {
  const { darkMode } = useTheme();

  return (
    <div className={`px-4 md:px-20 lg:px-32 mt-10 items-center ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
      <h1 className="text-center text-4xl">Line Chart</h1>
      <div className='flex justify-end'>
        <DownloadSourceCode />
      </div>
      <div className="graphic-header p-6 shadow-md z-10 flex">
        {/* <h2 className={`graphic-headline m-0 text-2xl font-semibold flex justify-between gap-6 ${darkMode ? 'text-white' : 'text-black'}`}>
          <img className="graphic-headline-icon max-w-8 max-h-8 bg-white" src="https://assets.graphic-portal.com/spaces/-Ns4Y6W9ApHcBTBEzu9S/graphics/-NsNham4iKudej0xLINo/versions/-NsNhi7ANB5ZktQHydB2/main/bundestag.png" alt="icon" />
          Sonntagsfragen zur Bundestagswahl
        </h2> */}
      </div>
    </div>
  );
}

export default Header;
