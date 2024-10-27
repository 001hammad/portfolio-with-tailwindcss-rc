"use client";
import React from "react";
import Image from "next/image";
import heropic from "../../../public/hero-pic.jpg";
import heropic1 from "../../../public/heropic-1.jpg";
import stylesolepic from "../../../public/style-sole-pic.jpg";
import Beautycarepic from "../../../public/beauty-care-pic.jpg";
import Todopic from "../../../public/todo-pic.jpg";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      {/* <h1>        SECTION  -----    1      </h1> */}

      <div className="flex flex-wrap justify-center items-center">
        <div className="m-20 flex-1">
          <h1
            className="font-extrabold text-4xl"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Hi I ,am Hammad Hafeez
          </h1>
          <p
            className="font-bold text-4xl mt-3"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Frontend Developer
          </p>
          <p
            className="max-w-72 mt-7 text-lg tracking-wide"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Hello, I'm Hammad Hafeez, a frontend developer with expertise in
            HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS. I
            craft responsive, user-friendly websites and applications, with a
            passion for problem-solving and collaboration. Always learning, I
            stay updated with industry trends to deliver high-quality solutions!
          </p>
          <div
            className="flex space-x-10 mt-8"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <button className="bg-[#03346E] hover:shadow-2xl hover:shadow-yellow-400 text-lg border-2 border-white w-24 sm:w-32 rounded-lg p-3 hover:border-yellow-500 duration-500">
              Hire Me
            </button>
            <button className="bg-[#03346E] hover:shadow-2xl hover:shadow-yellow-400 text-lg border-2 border-white w-24 sm:w-32 rounded-lg hover:border-yellow-500 duration-500 ">
              Lets Talk
            </button>
          </div>
        </div>
        <div className="flex-1 md:hidden">
          <Image
            src={heropic}
            alt="Front-end-dev"
            className="w-full h-full rounded-full p-6 border-2 border-yellow-200 shadow-lg shadow-yellow-300"
          />
        </div>
        <div
          className="flex-1 hidden md:block"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <Image
            src={heropic}
            alt="Front-end-dev"
            className="sm:h-full lg:h-full lg:w-full  p-5  sm:w-full rounded-s-full border-2 border-double shadow-lg shadow-yellow-500 hover:opacity-80 mix-blend-luminosity duration-500 border-green-600"
          />
        </div>
      </div>
      <hr className="sm:w-4/5 w-80 sm:mt-0 mt-11" />

      {/* <h1>        SECTION  -----    2      </h1> */}

      <div className="flex flex-wrap justify-center items-center">
        <div className="m-20 flex-1">
          <h1
            className=" ml-16 sm:ml-0 font-extrabold text-4xl "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            About Me
          </h1>
          <p
            className="max-w-72 mt-7 text-lg ml-16 sm:ml-0 tracking-wide"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            aperiam possimus exercitationem, saepe sint quod nisi harum at,
            maiores, ut quaerat similique sunt praesentium dignissimos officia
            {/* aspernatur quam suscipit dicta eveniet? Cum error vero magnam dicta
          quis atque eaque neque sed eveniet, illo facilis praesentium laborum
          est. Pariatur, veniam ipsa! */}
          </p>
          <div
            className="flex space-x-16 sm:mt-9 mt-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p>Skills</p>
            <p>Experience</p>
            <p>Education</p>
          </div>
          <div className="flex" data-aos="fade-up" data-aos-duration="2000">
            <div className="mt-3 mr-4 border-s-2 p-2 hover:bg-black hover:opacity-55 duration-700 hover:rounded-lg">
              <hr />
              <ul>
                <li>
                  <p>
                    HTML
                    <br />
                    CSS
                    <br />
                    Tailwind
                    <br />
                    TypeScript
                    <br />
                    Next.js
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-3 mr-8 border-s-2 p-2 hover:bg-black hover:opacity-55 duration-700 hover:rounded-lg">
              <hr />
              <ul>
                <li>2 Years</li>
                <li>OF</li>
                <li>Experience</li>
                <li>In This</li>
                <li>Languages</li>
              </ul>
            </div>
            <div className="mt-3 border-s-2 p-2 hover:bg-black hover:opacity-55 duration-700 hover:rounded-lg ">
              {" "}
              <hr />
              <ul>
                <li>
                  <p>
                    <b>Inter:</b> In Science (Ongoing) <br />
                    <b>Matric:</b> In Science
                    <br />
                    <b>Programming:</b> (Ongoing)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 md:hidden">
          <Image
            src={heropic1}
            alt="Front-end-dev"
            className="w-full h-full rounded-full p-6 border-2 border-yellow-200 shadow-lg shadow-yellow-300"
          />
        </div>
        <div className="flex-1 hidden md:block">
          <Image
            src={heropic1}
            alt="Front-end-dev"
            className="sm:h-full lg:h-full lg:w-full  p-5 sm:w-full rounded-s-full border-2 border-double shadow-lg shadow-yellow-500 hover:opacity-80 mix-blend-luminosity duration-500 border-green-600"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
      </div>
      <hr className="ml-28 mr-28 mb-9" />

      {/* <h1>        SECTION  -----    3      </h1> */}
      <div
        className="flex justify-center items-center font-bold text-3xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1>Explore My Projects</h1>
      </div>
      <div className="block  sm:flex sm:space-x-20 sm:mt-0 mt-24 sm:mr-5  sm:ml-5 p-0 sm:p-10 ml-16 justify-center">
        <div className="sm:mb-0 mb-14 border-2 border-white bg-[#0B192C] hover:opacity-50 opacity-100 duration-300  rounded-3xl sm:rounded-xl sm:w-full w-5/6">
          <Link href="https://style-sole-web.vercel.app/" target="_blank">
            <Image
              src={stylesolepic}
              alt="Style Sole Website"
              width={350}
              className="shadow-xl shadow-red-500 rounded-full sm:rounded-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
            <h1 className="text-white sm:w-full w-44 sm:ml-0 ml-11 text-center mt-3 text-lg pb-5">
              Style Sole Website Project-1
            </h1>
          </Link>
        </div>
        <div className="sm:mb-0 mb-14 border-2 border-white bg-[#0B192C] hover:opacity-50 opacity-100 duration-300 rounded-3xl sm:rounded-xl sm:w-full w-5/6">
          <Link href="https://beauty-flax.vercel.app/" target="_blank">
            <Image
              src={Beautycarepic}
              alt="Beauty Care Pic"
              width={350}
              className="shadow-xl shadow-red-500 rounded-full sm:rounded-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
            <h1 className="text-white sm:w-full w-44 sm:ml-0 ml-11 text-center mt-3 text-lg">
              Beauty Care Website Project-2
            </h1>
          </Link>
        </div>
        <div className="sm:mb-0 border-2 border-white bg-[#0B192C] hover:opacity-50 opacity-100 duration-300 rounded-3xl sm:rounded-xl sm:w-full w-5/6">
          <Link href="#" target="_blank">
            <Image
              src={Todopic}
              alt="To-Do-App"
              width={350}
              className="shadow-xl shadow-red-500 rounded-full sm:rounded-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
            <h1 className="text-white sm:w-full w-44 sm:ml-0 ml-11 text-center mt-3 text-lg">
              To-Do-List App Project-3
            </h1>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
