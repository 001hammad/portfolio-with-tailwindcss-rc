import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-between  items-center sm:w-full bg-[#00224D] text-white h-16  sm:h-14 md:h-20 lg:h-14 '>
      <div>
        <Image src={logo} alt='logo' width={40} className='animate-spin duration-1000'/>
      </div>

      <div>
        <ul className='flex mr-16 sm:mr-24 space-x-10 md:space-x-40 '>
          <li className='hover:shadow-lg hover:shadow-yellow-400 hover:text-yellow-300 duration-300'><Link href='/'>Home</Link></li>
          <li className='hover:shadow-lg hover:shadow-yellow-400 hover:text-yellow-300 duration-300'><Link href='/About'>About</Link></li>
          <li className='hover:shadow-lg hover:shadow-yellow-400 hover:text-yellow-300 duration-300 '><Link href='/Contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;