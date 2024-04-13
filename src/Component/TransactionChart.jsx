import React, { useState } from 'react';
import burger from '../assets/burger.png'
import sandwich from '../assets/sandwich.png'
import pizza from '../assets/pizza.png'
const SampleTable = () => {
  // Sample data for the table
  const data = [
    // Your sample data here
    {
        id: 1,
        name: 'Berger',
        image: burger,
        price: 100,
        customers: ['Alice Smith'],
        status: 'Delivered',
      },
      {
        id: 2,
        name: 'Piza',
        image: pizza,
        price: 150,
        customers: ['Emily Brown'],
        status: 'Pending',
      },
      {
        id: 3,
        name: 'Tibs',
        image: burger,
        price: 200,
        customers: ['Emma Wilson'],
        status: 'Cancelled',
      },
      {
        id: 4,
        name: 'sandwich',
        image: sandwich,
        price: 200,
        customers: ['Emma Wilson'],
        status: 'Cancelled',
      },
      {
          id: 5,
          name: 'Cocacola',
          image: pizza,
          price: 150,
          customers: ['Emily Brown'],
          status: 'Pending',
        },
        {
          id: 6,
          name: 'Apple',
          image: burger,
          price: 100,
          customers: ['Alice Smith'],
          status: 'Delivered',
        }
       
  ];

  // State for filtering
  const [filter, setFilter] = useState('All'); // Default filter is 'All'
  const [showFilter, setShowFilter] = useState(false); // State to toggle filter card visibility

  // Filtered data based on filter selection
  const filteredData = filter === 'All' ? data : data.filter(item => item.status === filter);

  return (
    <div className='px-4'>
      {/* Filter button and filter card */}
      <div className="mb-0 lg:mb-4 bg-white p-4 flex justify-between items-center relative">
        <div className='flex justify-between w-[100vw]'>
          <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
          <button
            className="bg-blue-100 hover:bg-blue-100 text-blue-500 px-4 py-1 rounded-md"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter <i className={`fas fa-${showFilter ? 'angle-up' : 'angle-down'} ml-2`} />
          </button>
        </div>
        {showFilter && (
          <div className="bg-gray-100 p-4 rounded-md shadow-md absolute top-12 right-0 z-10">
            <h3 className="text-lg font-semibold mb-2">Filter</h3>
            <ul>
              <li
                className={`cursor-pointer ${
                  filter === 'All' ? 'font-bold' : 'text-blue-500 hover:underline'
                }`}
                onClick={() => {
                  setFilter('All');
                  setShowFilter(false);
                }}
              >
                All
              </li>
              <li
                className={`cursor-pointer ${
                  filter === 'Delivered' ? 'font-bold' : 'text-blue-500 hover:underline'
                }`}
                onClick={() => {
                  setFilter('Delivered');
                  setShowFilter(false);
                }}
              >
                Delivered
              </li>
              <li
                className={`cursor-pointer ${
                  filter === 'Pending' ? 'font-bold' : 'text-yellow-500 hover:underline'
                }`}
                onClick={() => {
                  setFilter('Pending');
                  setShowFilter(false);
                }}
              >
                Pending
              </li>
              <li
                className={`cursor-pointer ${
                  filter === 'Cancelled' ? 'font-bold' : 'text-red-500 hover:underline'
                }`}
                onClick={() => {
                  setFilter('Cancelled');
                  setShowFilter(false);
                }}
              >
                Cancelled
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Table with scroll bar */}
      <div className="overflow-x-auto h-[500px]">
        <table className="table-auto w-full  overflow-y-auto ">
          {/* Table header */}
          <thead>
            <tr>
              <th className="px-2 py-1">Name</th>
              <th className="px-2 py-1">Price</th>
              <th className="px-2 py-1">Customers</th>
              <th className="px-2 py-1">Status</th>
              <th className="px-2 py-1">Action</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className='bg-white py-4'>
            {filteredData.map(item => (
              <tr key={item.id}>
                {/* Table columns */}
                <td className="px-2 py-1 flex items-center">
                  <img src={item.image} alt="img" className="w-8 h-8  mr-2" />
                  {item.name}
                </td>
                <td className="px-2 py-1">{item.price} Br</td>
                <td className="px-2 py-1">
                  <ul>
                    {item.customers.map((customer, index) => (
                      <li key={index}>{customer}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-2 py-1">
                  <span
                    className={`inline-block px-2 py-0 rounded-md ${
                      item.status === 'Delivered'
                        ? 'bg-blue-200 text-blue-500'
                        : item.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-500'
                        : 'bg-red-200 text-red-500'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-2 py-1 ">
                  <a href="dashboard/transaction" className="text-blue-600 hover:underline">
                    See Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SampleTable;
