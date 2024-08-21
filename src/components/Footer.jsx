import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <>
      
      <div className='w-full bg-[#966919] px-8 lg:px-28 py-16 '>
        <div className='flex flex-col lg:flex-row'>
          <div className=' w-full lg:w-[30%] mb-6 lg:mb-0'>
          <div className='flex flex-row justify-start items-center mb-5'>
            <img src='logo.png' className='w-20 me-3'></img>
            <h1 className='text-gray-100 text-2xl font-bold '>ROF Group</h1>


          </div>
          <p className='text-white  mb-6 text-lg ms-5 '>
          Building No. 80,1st Floor,<br/> Sector-44, Gurugram,122003
          </p>
          <p className='text-gray-100 mb-6 ms-5'>+91 124 4399 399</p>
          <p className='text-gray-100 mb-6  ms-5'>rof@gmail.com</p>
          <hr className='border-t-2 hidden lg:block border-white w-72'></hr>
          </div>
          <div className='w-full lg:w-[20%] me-8 mb-6 lg:mb-0'>
            <h1 className='text-gray-50 font-bold text-2xl mb-3'>About Us</h1>
            <hr className='border-t-2 border-white mb-6'></hr>
            <ul>
              <li className='mb-8 text-white text-xl'>Our Vision</li>
              <li className='mb-8 text-white text-xl'>Our Values</li>
              <li className='mb-8 text-white text-xl'>Our Work</li>
            </ul>

          </div>
          <div className='w-full lg:w-[20%] me-8 mb-6 lg:mb-0'>
            <h1 className='text-gray-50 font-bold text-2xl mb-3'>Media</h1>
            <hr className='border-t-2 border-white mb-6'></hr>
            <ul>
              <li className='mb-8 text-white text-xl'>Our Media</li>
              <li className='mb-8 text-white text-xl'>Our Media</li>
            </ul>

          </div>
          <div className='w-full lg:w-[20%] mb-6 lg:mb-0'>
            <h1 className='text-gray-50 font-bold text-2xl mb-3'>Contact Us</h1>
            <hr className='border-t-2 border-white mb-6'></hr>
            <ul>
              <li className='mb-8 text-white text-xl'>Contact Info</li>
              <li className='mb-8 text-white text-xl'>Enquiry Page</li>
              <li className='mb-8 text-white text-xl'>Career Page</li>
            </ul>

          </div>
        </div>

      </div>
      <div className='bg-[#5C4033] px-4 lg:px-32 py-6'>
        <div className='flex flex-row justify-between'>
          <p className='text-lg text-white font-semibold'>Copyright All Right Reserved 2024</p>
          <div className='flex flex-row'>
          <a href='/' className='text-white me-4 text-lg hover:text-red-800' ><FaInstagram /></a>
          <a href='/' className='text-white me-4 text-lg hover:text-blue-600 '><FaTwitter /></a>
          <a href='/' className='text-white me-4 text-lg hover:text-blue-600'><FaLinkedin/></a>
          <a href='/' className='text-white me-4 text-lg hover:text-blue-600'><FaFacebookF /></a>
          <a href='/' className='text-white me-4 text-lg hover:text-green-600'><IoLogoWhatsapp /></a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer