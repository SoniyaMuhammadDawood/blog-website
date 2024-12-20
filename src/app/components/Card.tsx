import React from 'react'
import Image from 'next/image'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import Example from './EncryptButton';
import Link from 'next/link';
import { FcExport } from "react-icons/fc";



const Card = () => {
  return (
    <div>

      <section className="text-gray-600 body-font">
<div className="container px-5 py-16 mx-auto">

<div className="flex flex-col text-center w-full mb-16">
      <h2 className="text-2xl text-indigo-500 tracking-widest font-bold title-font mb-2 uppercase">
      AI Spectrum
      </h2>
      <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
       Unlocking the Power of Artificial Intelligence
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-medium text-gray-700">
      Explore the endless possibilities of AI with AI Spectrum. Dive into insightful articles, latest trends, and real-world applications that showcase how AI is revolutionizing industries and improving lives. Join us on this journey to uncover the vibrant and ever-expanding spectrum of artificial intelligence.
      </p>
    </div>

{/* blog Card */}
  <div className="flex flex-wrap -m-4">

      {/* 1st Blog */}
    <div className="p-4 md:w-1/3 ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer transition hover:scale-105 duration-300 shadow-xl">
        <Image
          className="lg:h-56 md:h-36 w-full object-cover object-center"
          src="/picture/agri.png"
          alt="blog"
          width={300}
          height={300}
        />
        <div className="p-6 ">
          <h2 className="tracking-widest text-md title-font font-md text-gray-800 flex items-center gap-3 mb-4">

          <IoCalendarNumberOutline  className="text-2xl font-bold text-gray-800"/> 
            <span >12/01/2024</span>
          
            <MdAccessTime className="text-2xl font-bold text-gray-800 ml-10"/>
            <span>10 Min</span>
          </h2>


          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Transforming Farming Practices
          </h1>
          <p className="leading-relaxed mb-3 line-clamp-3">
          AI in Agriculture is revolutionizing the farming industry by introducing smart and efficient technologies. From precision farming and crop monitoring to predictive analytics, AI-powered systems are enabling farmers to optimize their processes, reduce waste, and improve yields.
          </p>
          <div className="flex items-center flex-wrap ">
            


            {/* Import Button from ____Hover.dev    ____  https://www.hover.dev/components/buttons */}
            <div> <Link href={"../blog/post1"}><Example/></Link></div>
          
            

            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm font-semibold pr-3 py-1 border-r-2 border-gray-200 cursor-pointer hover:text-teal-600">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none font-bold hover:text-teal-600 cursor-pointer ">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* 2nd blog */}
    <div className="p-4 md:w-1/3 ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer transition hover:scale-105 duration-300 shadow-xl">
        <Image
          className="lg:h-56 md:h-36 w-full object-cover object-center"
          src="/picture/education.png"
          alt="blog"
          width={300}
          height={300}
        />
        <div className="p-6 ">
          <h2 className="tracking-widest text-md title-font font-md text-gray-800 flex items-center gap-3 mb-4">

          <IoCalendarNumberOutline  className="text-2xl font-bold text-gray-800"/> 
            <span >11/01/2024</span>
          
            <MdAccessTime className="text-2xl font-bold text-gray-800 ml-10"/>
            <span>15 Min</span>
          </h2>


          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Revolutionizing Education
          </h1>
          <p className="leading-relaxed mb-3 line-clamp-3">
          AI in Education is transforming the way students learn and teachers instruct by integrating cutting-edge technology into classrooms. From personalized learning experiences to intelligent 
          </p>
          <div className="flex items-center flex-wrap ">



          <div> <Link href={"../blog/post2"}><Example/></Link></div>



            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm font-semibold pr-3 py-1 border-r-2 border-gray-200 cursor-pointer hover:text-teal-600">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none font-bold hover:text-teal-600 cursor-pointer ">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>

   {/* 3rd blog */}
   <div className="p-4 md:w-1/3 ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer transition hover:scale-105 duration-300 shadow-xl">
        <Image
          className="lg:h-56 md:h-36 w-full object-cover object-center"
          src="/picture/heal.png"
          alt="blog"
          width={300}
          height={300}
        />
        <div className="p-6 ">
          <h2 className="tracking-widest text-md title-font font-md text-gray-800 flex items-center gap-3 mb-4">

          <IoCalendarNumberOutline  className="text-2xl font-bold text-gray-800"/> 
            <span >11/15/2024</span>
          
            <MdAccessTime className="text-2xl font-bold text-gray-800 ml-10"/>
            <span>15 Min</span>
          </h2>


          <h1 className="title-font text-lg font-medium text-gray-900 mb-3 ">
          Revolutionizing Medical Practices
          </h1>
          <p className="leading-relaxed mb-3 line-clamp-3">
          AI in Health Care is transforming the medical field by enhancing diagnostic accuracy, streamlining operations, and personalizing treatment plans. These advancements are paving the way for
         
          </p>
          <div className="flex items-center flex-wrap ">

            {/* botton ha ya */}


          <div> <Link href={"../blog/post3"}><Example/></Link></div>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm font-semibold pr-3 py-1 border-r-2 border-gray-200 cursor-pointer hover:text-teal-600">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none font-bold hover:text-teal-600 cursor-pointer ">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>


  </div>


{/* Button */}
  <button className='flex justify-center w-full mt-14'>
<Link href="/blog" className="relative px-6 py-3 font-bold text-black group ">
  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple-300 group-hover:translate-x-0 group-hover:translate-y-0" />
  <span className="absolute inset-0 w-full h-full border-4 border-black" />
  <span className="relative">View More  <FcExport className="text-3xl inline-block align-middle"/></span>
</Link>
</button>

</div>




</section>
    </div>
  )
}

export default Card
