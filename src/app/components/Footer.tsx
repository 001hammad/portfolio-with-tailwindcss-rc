'use client'
import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaSquareGithub } from "react-icons/fa6";
import { SiYoutubekids } from "react-icons/si";
import { DiAptana } from "react-icons/di";
import { ImAndroid } from "react-icons/im";
import { FaArrowUp } from "react-icons/fa";
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
          // ------------------------------OUR FOOTER SECTION----------------------- 
const Footer = () => {

      // ------------WE USE SMALL AMOUNT OF TYPESCRIPT FOR ARROW TO MOVE TOP OF THE PAGE------------ 


    const ArrowClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

          // ------------------------------WE USE HOOK FOR AOS ANIMATION----------------------- 
    
    useEffect(() => {
        AOS.init();
      }, []);
          // ------------------------------OUR RETURN SECTION----------------------- 

  return (


          // ------------------------------ITS OUR FULL SECTION COLUMN FOR FOOTER----------------------- 

  <footer className='bg-black text-white text-xs sm:text-sm h-full sm:h-auto p-7 sm:pt-32 w-auto'>
    <div className='flex justify-center'>
      <FaArrowUp size={24} onClick={ArrowClick} className='text-green-600 cursor-pointer'/>
    </div>

    <div className='sm:flex justify-between p-2 sm:p-8 mb-20'>
    <div data-aos="fade-up"
     data-aos-duration="1000" className='sm:mb-0 mb-12'>
    <p className='underline mb-2'>Quick Links</p>
    <p><b>Tel:</b> +92 3172774237</p>
    <p><b>Email:</b> <a href="mailto:iamhammad224@gmail.com">iamhammad224@gmail.com</a></p>
    <p><b>LinkedIn:</b><a href="mailto:iamhammad224@gmail.com"></a> Click Me To Go </p>
    </div>
    <div data-aos="fade-up"
     data-aos-duration="2000" className='sm:mb-0 mb-12'>
    <p className='underline mb-2'>Owner Info</p>
    <p><b>Owner:</b> Hammad Hafeez</p>
    <p><b>Province:</b> Sindh</p>
    <p><b>Passion:</b> Programming</p>
    </div>
    <div data-aos="fade-up"
     data-aos-duration="3000" className='sm:mb-0 mb-12'>
    <p className='underline mb-2'>Web About</p>
    <p><b>Html-Used:</b> 40%</p>
    <p><b>Tailwind-Used:</b> 30%</p>
    <p><b>Next.js-Used</b> 30%</p>
    </div>
    <div data-aos="fade-up"
     data-aos-duration="4000" className='sm:mt-0 mt-14'>
    <label htmlFor="subscribe" className='mr-2 bg-green-500 border-2 border-green-400 p-1 rounded-lg font-bold hover:bg-green-950 cursor-pointer duration-200'>Subscribe</label>
    <input type="text" placeholder='Here your message box' className='h-7 rounded-lg border-2 border-green-400 text-black'/>
    </div>
    </div>


    {/*  ------------------------------WE USE REACT ICONS-----------------------  */}

     
    <div className='flex justify-center space-x-6  sm:space-x-12 text-2xl'>
      <Link href='https://www.facebook.com/share/1EeYXoBoWb/' target='_blank'>
      <ImFacebook2 className='hover:text-blue-500 rounded-lg hover:shadow-lg hover:shadow-blue-700 duration-150' data-aos="fade-up"
     data-aos-duration="1000"/>
      </Link>
    
      <Link href='https://github.com/001hammad/my-portfolio.git' target='_blank'>
      <FaSquareGithub className='hover:text-blue-500 rounded-lg hover:shadow-lg hover:shadow-blue-700 duration-150' data-aos="fade-up"
     data-aos-duration="3000"/>
      </Link>
    
    <SiYoutubekids className='hover:text-blue-500 rounded-lg hover:shadow-lg hover:shadow-blue-700 duration-150' data-aos="fade-up"
     data-aos-duration="3000"/>
    <DiAptana className='hover:text-blue-500 rounded-lg hover:shadow-lg hover:shadow-blue-700 duration-150' data-aos="fade-up"
     data-aos-duration="2000"/>
    <ImAndroid className='hover:text-blue-500 rounded-lg hover:shadow-lg hover:shadow-blue-700 duration-150' data-aos="fade-up"
     data-aos-duration="3000"/>
    </div>

    {/*  ------------------------------ITS OUR END POINT -  COPYRIGHT SECTION-----------------------  */}


    <div className='flex justify-center items-center pt-12'>
        <p>&copy; 2024 All Right Reserved. Hammad Portfolio</p>
    </div>
  </footer>
  )
}

export default Footer;
