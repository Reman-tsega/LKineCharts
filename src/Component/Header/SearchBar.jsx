import React from 'react';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { sideBarAction } from '../../Store/SideBarStore';
import { useDispatch, useSelector } from "react-redux";

function SearchBar() {
  // const target8 = useSelector(state => state.classNames.name[8])

  const dispatch = useDispatch()
  const toggleSideBar =()=>{
    dispatch(sideBarAction.toggle())

  }
  return (
    <div id="step-9" className="flex items-center justify-between rounded-md">
      {/* Desktop and Tablet View */}
      <div className="hidden sm:flex items-center border border-gray-300 rounded-lg px-2">
        <form action="#" method="POST" className="flex items-center">
          <button
            type="submit"
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <BiSearch className="text-lg" />
          </button>
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
            className="py-2 px-4 border-none focus:outline-none flex-1"
          />
        </form>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden">
        <button
          type="button"
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={toggleSideBar}
        >
          <BiMenu className="text-4xl text-24  " />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
