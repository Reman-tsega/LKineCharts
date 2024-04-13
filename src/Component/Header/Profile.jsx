import React, { useState, useRef, useEffect } from 'react';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import alternativeProfile from '../../assets/pp.png'
import alternativeProfileblack from '../../assets/pp.png'
import profilePic from '../../assets/pp.png'
const Profile= ({isDarkTheme, handleLogOut }) => {
  const [dropDown, setDropDown] = useState(false);
    const dropRef = useRef(null);
  const handleToggleDropdown = () => {
    setDropDown(!dropDown);
  };

  const truncateCompanyName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 20) + '...';
    }
    return name;
  };

  const hadleNavigateProfile = () => {
    // Handle navigation to profile page
  };
  const handleClickOutside = (event) => {
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    // Attach click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup: Remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center align-middle my-auto gap-4">
      <Avatar
        src={
          isDarkTheme
            ? alternativeProfileblack
            : profilePic
            ? profilePic
            : alternativeProfile
        }
      />

      <div className="hidden sm:flex items-center gap-2 w-[100px]">
        <h1 className="dark:text-white text-smallP md:text-midP lg:text-largeP">
          {truncateCompanyName("User Profile")}
        </h1>
        <FontAwesomeIcon className="dark:text-white hidden sm:block" icon={faCaretDown} onClick={handleToggleDropdown} />
      </div>
      {/* <FontAwesomeIcon className="dark:text-white hidden sm:block" icon={faCaretDown} onClick={handleToggleDropdown} /> */}

      <div
        ref={dropRef}
        className={
          dropDown
            ? "cursor-pointer rounded-lg bordred-2 border-gray-400  dark:bg-[#1b1f23] absolute top-[8%] lg:right-[1%] w-[70px] md:w-[100px] lg:w-[120px] drop-shadow-lg bg-topbarBg transition bg-slate-50 ease-in-out delay-150"
            : "h-[0px] cursor-pointer bordred-2 border-gray-400 overflow-hidden absolute  w-[208px] drop-shadow-lg transition ease-in-out delay-150"
        }
      >
        <ul className="hidden sm:flex flex-col z-10 w-full h-full items-center justify-center">
          <Link onClick={hadleNavigateProfile} to="/profile" className="w-full">
            <li className="w-full p-3 items-center justify-start hover:bg-lightPrimaryHover">
              <p className="dark:text-white text-smallP md:text-midP lg:text-largeP">
                View Profile
              </p>
            </li>
          </Link>
          <hr className="w-full border-t border-gray-300 dark:border-gray-700" />{" "}
          {/* Added this line */}
          <Link onClick={hadleNavigateProfile} to="/">
          <li   
            className="w-full cursor-pointer p-3 items-center text-start justify-start hover:bg-lightPrimaryHover"
            onClick={handleLogOut}
          >
            <p className="dark:text-white text-smallP md:text-midP lg:text-largeP items-start">
              Sign Out
            </p>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
