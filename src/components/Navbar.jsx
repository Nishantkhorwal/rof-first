import React, { useState,useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import '../App.css'

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  }

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  }
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      if (window.scrollY > navbarHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar w-full hidden lg:flex justify-end px-6 md:px-28 bg-[#5C4033] ${isFixed ? 'fixed top-0 left-0 right-0 z-50 justify-center navbar-expanded' : 'navbar-collapsed'}`}>
      <ul className='flex flex-row justify-end items-end w-full  text-white lora'>
        <a href='/'><li className='text-lg font-semibold hover:bg-yellow-500 py-3 px-6 cursor-pointer'>Home</li></a>
        <li className='relative'
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}>
          <div
            className='flex flex-row items-center text-lg font-semibold py-3 px-6 hover:bg-yellow-500 cursor-pointer'
            onClick={() => handleDropdownClick(0)}
          >
            About Us <MdKeyboardArrowDown className='ml-2' />
          </div>
          {openDropdown === 0 && (
            <div className='absolute top-full left-0 bg-[#654321] text-white text-md font-semibold w-[200px] shadow-md z-10'
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}>
              <ul className='py-2'>
                <a href='/vision'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Our Vision</li></a>
                <li><hr className='w-full border border-t border-red-950  '/></li>
                <a href='/foundermessage'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Our Work</li></a>
                 <li><hr className='w-full border border-t border-red-950  '/></li>
                <a href='/principalmessage'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Our Blogs</li></a>
              </ul>
            </div>
          )}
        </li>
        <li className='relative'
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}>
          <div
            className='flex flex-row items-center text-lg font-semibold py-3 px-6 hover:bg-yellow-500 cursor-pointer'
            onClick={() => handleDropdownClick(1)}
          >
            Media <MdKeyboardArrowDown className='ml-2' />
          </div>
          {openDropdown === 1 && (
            <div className='absolute top-full left-0 bg-[#654321] text-white text-md font-semibold w-[200px] shadow-md z-10'
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}>
              <ul className='py-2'>
              <a href='/admissionprocess'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Media</li></a>
               <li><hr className='w-full border border-t border-red-950 '/></li>
              <a href='/applynow'> <li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Media</li></a>
              </ul>
            </div>
          )}
        </li>
        <a href='/'><li className='text-lg font-semibold hover:bg-yellow-500 py-3 px-6 cursor-pointer'>Construction Updates</li></a>
        <li className='relative'
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}>
          <div
            className='flex flex-row items-center text-lg font-semibold py-3 px-6 hover:bg-yellow-500 cursor-pointer'
            onClick={() => handleDropdownClick(3)}
          >
            Contact Us <MdKeyboardArrowDown className='ml-2' />
          </div>
          {openDropdown === 3 && (
            <div className='absolute top-full left-0 bg-[#654321] text-white text-md font-semibold w-[200px] shadow-md z-10'
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}>
              <ul className='py-2'>
              <a href='/contactinfo'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Contact Information</li></a>
               <li><hr className='w-full border border-t border-red-950  '/></li>
              <a href='/enquiry'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Enquiry</li></a>
               <li><hr className='w-full border border-t border-red-950  '/></li>
              <a href='/career'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Career</li></a>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;