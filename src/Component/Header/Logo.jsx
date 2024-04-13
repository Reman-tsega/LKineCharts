import React from 'react'
import logo from '../../assets/dirlink_logo.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Logo() {
  const showSideBar = useSelector((state) => state.SideBar.showSideBar);

  return (
    <div  className='mb-12 py-2'>
        
            
        
        <div className="flex justify-start align-middle items-start">
          <div
            className={` ${showSideBar? "":""} w-[80px] sm:w-[100px] md:w-[140px]
             h-[2px] md:h-[5px]   flex items-center
           justify-center  sm:ml-0`}
          >
            
            <a href='/dashboard'>
            {/* {showSideBar ? <img src={logo} alt="logo" className="w-full  " />:<img src={logo} alt="Logo" className="h-12 w-20 ml-[-20px]" />} */}
        
            <img className="graphic-headline-icon max-w-12 max-h-12 md:max-w-24 md:max-h-24 bg-white" src="https://assets.graphic-portal.com/spaces/-Ns4Y6W9ApHcBTBEzu9S/graphics/-NsNham4iKudej0xLINo/versions/-NsNhi7ANB5ZktQHydB2/main/bundestag.png" alt="icon" /> 

          
        </a> 
          </div>
        </div>
    </div>
  )
}

export default Logo