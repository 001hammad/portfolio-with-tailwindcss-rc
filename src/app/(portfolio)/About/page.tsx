'use client'
import React from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import aboutpic from '../../../../public/about-pic.jpg'

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 ">
      <Image src={aboutpic} alt="About-Pic" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="rounded-s-full shadow-red-500 shadow-2xl"/>
      <div className=" text-center p-4   lg:p-8">
        <h2 className="text-white font-bold text-4xl sm:mt-5 mt-5  md:text-3xl lg:text-4xl mb-4"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
          My Introduction
        </h2>
        <p className="text-white text-sm md:text-lg  leading-relaxed"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"data-aos-duration="1000">
          Hello, I'm Hammad Hafeez, a driven and passionate individual from
          Karachi, Pakistan. With a keen interest in technology, I'm currently
          pursuing my IT course from Governor House Sindh, while simultaneously
          exploring my entrepreneurial spirit.
        </p>
        <p className="text-white text-sm md:text-lg leading-relaxed"data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">
          As a self-taught frontend developer, I've acquired expertise in HTML,
          CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS. My dedication
          and hard work have enabled me to successfully develop various projects
          that have garnered appreciation from my teachers and peers.
        </p>
        <p className="text-white text-sm md:text-lg leading-relaxed sm:mb-28"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"data-aos-duration="1000">
          I'm eager to continue learning and expanding my skill set, staying
          up-to-date with the latest advancements in the tech industry. I'm
          excited to collaborate and contribute to innovative projects that make
          a meaningful impact.
        </p><hr className="h-24"/>
        <h2 className="text-white font-bold text-4xl  md:text-3xl lg:text-4xl mb-4" data-aos="fade-up"
     data-aos-duration="3000">
        As a skilled frontend developer, I offer the following services:

        </h2>
        <p className="text-white text-sm md:text-lg  leading-relaxed" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"data-aos-duration="1000">
        1. Web Development: Building responsive, user-friendly, and visually appealing websites using HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.

        </p>
        <p className="text-white text-sm md:text-lg leading-relaxed" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"data-aos-duration="1000">
        2. Frontend Development: Creating interactive and engaging frontend experiences for web applications, including UI/UX design, prototyping, and testing.

        </p>
        <p className="text-white text-sm md:text-lg leading-relaxed">
        3. Mobile-First Design: Designing and developing mobile-friendly websites and applications that provide seamless user experiences across various devices.

        </p>
      </div>
    </div>
  );
};

export default About;
