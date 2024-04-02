import React, { useCallback } from 'react';
import JSZip from 'jszip';
import { useTheme } from '../Store/Context/ThemContext';

const DownloadSourceCode = () => {
  const downloadUrl = 'https://github.com/Reman-tsega/LKineCharts/archive/main.zip';  
  const { darkMode } = useTheme();

  return (
    <div className="flex justify-end items-center m-4 md:my-6">
      <a href={downloadUrl} download className={` ${darkMode ? 'text-white bg-black' : 'text-black bg-white'} text-xl border-2 rounded-md`}>
        <button className={`px-4 py-2 border-2 ${darkMode ? "border-white":"border-black"} rounded-md`}>Download Src Zip</button>
      </a>
    </div>
  );
}

export default DownloadSourceCode;
