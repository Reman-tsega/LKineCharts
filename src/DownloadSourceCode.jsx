import React, { useCallback } from 'react';
import JSZip from 'jszip';
import { useTheme } from './Store/Context/ThemContext';

const DownloadSourceCode = () => {
  const downloadUrl = 'https://github.com/Reman-tsega/LKineCharts/archive/main.zip';  
  const { darkMode } = useTheme();

  return (
    <div className={`items-center ${darkMode ? 'text-white bg-black' : 'text-black bg-white'} items-center align-middle p-10 my-12'`}>

      <a href={downloadUrl} download className={` ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}  mx-auto  text-xl`}>
        <button className='border-2 rounded-md'>Download Src Zip</button>
      </a>
    </div>
  );
}
export default DownloadSourceCode;
