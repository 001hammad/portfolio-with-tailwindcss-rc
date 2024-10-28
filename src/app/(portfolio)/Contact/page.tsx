'use client'
import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
          //  -------------------------------OUR RETUNT SECTION-----------------------------
    
    <div className='text-center'>
      <h1 className='font-bold text-3xl mt-3'>Quick Contact</h1>

      {/* //  -------------------------------OUR VIP FORM----------------------------- */}

      <div className='flex justify-center items-center'>
        
        <form action="submit" className='mt-10 bg-black p-3 rounded-lg bg-opacity-55 border-x-2 border-white mb-5'data-aos="flip-right" data-aos-duration="2000">
        <h2 className='text-2xl underline'>Email Form</h2>
          <div className='flex flex-col mb-2 w-64'>
            <label htmlFor="name" className='mt-2 mb-2'>Name:</label>
            <input type="text" id='name' className='text-black rounded-md border-2 border-black' placeholder='Enter your name'/><br />
            </div>
            <div  className='flex flex-col mb-2 w-64'>
            <label htmlFor="email" className='mb-2'>Email:</label>
            <input type="email" id='email' className='text-black rounded-md border-2 border-black' placeholder='Enter your email'/><br />
            </div>
            <div  className='flex flex-col mb-2 w-64'>
            <label htmlFor="message" className='mb-2'>Message:</label>
            <input type="text" id='message' className='text-black rounded-md border-2 border-black' placeholder='Enter your message '/><br />
            </div>
            <div  className='flex flex-col mb-2 w-64'>
            <label htmlFor="phone" className='mb-2'>Phone:</label>
            <input type="number" id='phone'className='text-black rounded-md border-2 border-black' placeholder='Enter your phone'/><br />
            </div>
            <div  className='flex flex-col mb-2 w-64'>
            <label htmlFor="subject" className='mb-2'>subject:</label>
            <input type="text" id='subject'className='text-black rounded-md border-2 border-black' placeholder='Enter your subject'/>
            </div>
            <div className='p-4'>
              <button className='bg-blue-950 w-48 font-bold rounded-lg hover:border-2 hover:border-white duration-200'>Submit</button>
            </div>

            {/*   -------------------------------OUR SOCIAL MEDIA LINKS----------------------------- */}


            <div className='flex space-x-6 ml-2'>
              <Link href='https://www.facebook.com/share/1EeYXoBoWb/' target='_blank'><p><IoLogoFacebook className='text-2xl text-black bg-white shadow-inner shadow-slate-50 rounded-full hover:shadow-lg hover:shadow-red-900 duration-200 hover:bg-red-500 cursor-pointer'/> </p></Link>
              <Link href='https://www.linkedin.com/in/hammad-hafeez-554789329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><p><FaLinkedin className='text-2xl text-black bg-white shadow-inner shadow-slate-50 rounded-full hover:shadow-lg hover:shadow-red-900 duration-200 hover:bg-red-500 cursor-pointer'/></p></Link>
              <Link href='https://www.instagram.com/invites/contact/?igsh=mulm9zzy75ud&utm_content=mnyq1au' target='_blank'><p><AiFillInstagram className='text-2xl text-black bg-white shadow-inner shadow-slate-50 rounded-full hover:shadow-lg hover:shadow-red-900 duration-200 hover:bg-red-500 cursor-pointer'/></p></Link>
              <Link href='https://github.com/001hammad/my-portfolio' target='_blank'><p><FaGithub className='text-2xl text-black bg-white shadow-inner shadow-slate-50 rounded-full hover:shadow-lg hover:shadow-red-900 duration-200 hover:bg-red-500 cursor-pointer'/></p></Link>
              <p><FaSquareUpwork className='text-2xl text-black bg-white shadow-inner shadow-slate-50 rounded-full hover:shadow-lg hover:shadow-red-900 duration-200 hover:bg-red-500 cursor-pointer'/></p>
              <p><FaTwitterSquare className='text-2xl text-black bg-white shadow-inner shadow-slate-50 rounded-full hover:shadow-lg hover:shadow-red-900 duration-200 hover:bg-red-500 cursor-pointer'/>
              </p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
