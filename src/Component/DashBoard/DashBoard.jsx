import React, { useState } from 'react';
import { FaRegBookmark, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import GridMotion from '../GridMotion/GridMotion';
const items = [
    'Item 1',
    <div key='jsx-item-1'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 2',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 4',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 5',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 7',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 8',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 10',
    <div key='jsx-item-3'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 11',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 13',
    <div key='jsx-item-4'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 14',
    // Add more items as needed
  ];
  
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold text-blue-600">naukri</span>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Jobs</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Companies</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Movies</a>
            </div>
          </div>

          {/* Middle section - Search Box */}
          <div className="flex flex-grow mx-8">
            <input
              type="text"
              placeholder="Search jobs, companies, services..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white bg-blue-500 px-4 py-2 rounded-full">Login</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Explore</a>
            <a 
              href="#" 
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              For employees
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    workMode: {
      workFromOffice: false,
      remote: true,
      hybrid: false,
      tempWFH: false,
    },
    experience: { min: 0, max: 'Any' },
    department: {
      engineering: false,
      sales: false,
      dataScience: false,
      marketing: false,
    },
    location: {
      delhi: false,
      bengaluru: false,
      hyderabad: false,
      mumbai: false,
    },
    salary: {
      '0-3': false,
      '3-6': false,
      '6-10': false,
      '10-15': false,
    },
    companyType: {
      corporate: false,
      foreignMNC: false,
      startup: false,
      indianMNC: false,
    },
  });

  const handleCheckboxChange = (category, key) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [key]: !prevFilters[category][key],
      },
    }));
  };

  return (
    <div className="p-6 ml-50 w-90 bg-white shadow-sm rounded-lg">
      <h2 className="text-xl font-semibold mb-4">All Filters</h2>
      <div className="mb-6">
        <span className="text-lg text-gray-600">Applied (1)</span>
      </div>

      {/* Work Mode */}
      <div className="mb-6">
        <h3 className="font-medium text-xl mb-2">Work mode</h3>
        {Object.entries(filters.workMode).map(([key, value]) => (
          <label key={key} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleCheckboxChange('workMode', key)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="text-lg text-gray-700">
              {key.replace(/([A-Z])/g, ' $1').trim()} (
              {key === 'workFromOffice' ? 531896 : key === 'remote' ? 20668 : key === 'hybrid' ? 13593 : 15})
            </span>
          </label>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Experience</h3>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="0 Yrs"
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Any"
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Department */}
      <div className="mb-6">
        <h3 className="font-medium text-xl mb-2">Department</h3>
        {Object.entries(filters.department).map(([key, value]) => (
          <label key={key} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleCheckboxChange('department', key)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="text-lg text-gray-700">
              {key.replace(/([A-Z])/g, ' $1').trim()} (
              {key === 'engineering' ? 11762 : key === 'sales' ? 1531 : key === 'dataScience' ? 972 : 687})
            </span>
          </label>
        ))}
        <button className="text-blue-600 text-xl mt-2">View More</button>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h3 className="font-medium text-xl mb-2">Location</h3>
        {Object.entries(filters.location).map(([key, value]) => (
          <label key={key} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleCheckboxChange('location', key)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="text-lg text-gray-700">
              {key === 'delhi' ? 'Delhi / NCR' : key === 'bengaluru' ? 'Bengaluru' : key === 'hyderabad' ? 'Hyderabad' : 'Mumbai (All Areas)'} (
              {key === 'delhi' ? 1374 : key === 'bengaluru' ? 1361 : key === 'hyderabad' ? 667 : 648})
            </span>
          </label>
        ))}
        <button className="text-blue-600 text-sm mt-2">View More</button>
      </div>

      {/* Salary */}
      <div className="mb-6">
        <h3 className="font-medium text-xl mb-2">Salary</h3>
        {Object.entries(filters.salary).map(([key, value]) => (
          <label key={key} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleCheckboxChange('salary', key)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="text-lg text-gray-700">
              {key.replace('-', '-')} Lakhs (
              {key === '0-3' ? 2968 : key === '3-6' ? 9998 : key === '6-10' ? 13089 : 7150})
            </span>
          </label>
        ))}
        <button className="text-blue-600 text-sm mt-2">View More</button>
      </div>

      {/* Company Type */}
      <div className="mb-6">
        <h3 className="font-medium text-xl mb-2">Company type</h3>
        {Object.entries(filters.companyType).map(([key, value]) => (
          <label key={key} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleCheckboxChange('companyType', key)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="text-lg text-gray-700">
              {key.replace(/([A-Z])/g, ' $1').trim()} (
              {key === 'corporate' ? 1744 : key === 'foreignMNC' ? 1300 : key === 'startup' ? 449 : 281})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

const JobCard = () => {
  return (
    <div className="max-w-xl ml-30 p-4 bg-white shadow-lg rounded-lg border border-gray-200 mt-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Amazon is hiring For SEPO Level 2</h2>
          <p className="text-gray-500 text-sm">Amazon ★ 4.1 | 24,700 Reviews</p>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" width={100} className="h-10" />
      </div>

      <div className="flex items-center text-gray-600 text-sm mt-3 space-x-4">
        <div className="flex items-center">
          <FaBriefcase className="mr-1" /> 0-2 Yrs
        </div>
        <div className="flex items-center">
          ₹ 2.5-2.75 LPA
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1" /> Remote
        </div>
      </div>

      <p className="text-gray-700 text-sm mt-3">Please note that you are requested to read the JD till the end and take up as...</p>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <div>Communication Skills · Hiring</div>
        <button className="flex items-center text-gray-600 hover:text-blue-500">
          <FaRegBookmark className="mr-1" /> Save
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-2">1 Day Ago</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <div className="p-8 bg-gray-100 flex justify-center">
        <div className="w-1/4 pr-4">
          <FilterSidebar />
        </div>
        <div className="w-3/4 pl-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl ml-30 font-semibold">1 - 20 of 20068 Remote Jobs</h2>
            
            <select className="border  border-gray-300 rounded-md px-2 py-1">
              <option>Sort by: Relevance</option>
            </select>
          </div>
          <JobCard />
          <JobCard />
          <JobCard />
        <div className="bottom-30 sticky h-full ml-180 w-170">
        <GridMotion items={items} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;